const slideshowRules =
  "[data-sytheme=dark]{--sy_slide_bg:var(--sy_level_2);--sy_slide_fg:var(--sy_font_color);--sy_slide_nav_disabled:var(--sy_level_5);--sy_slide_dot_bg:var(--sy_level_5);--sy_slide_dot_hover_bg:var(--sy_level_6)}[data-sytheme=light]{--sy_slide_bg:var(--sy_grey_A_regular);--sy_slide_fg:var(--sy_light);--sy_slide_nav_disabled:var(--sy_grey_A_300);--sy_slide_dot_bg:var(--sy_light_darker);--sy_slide_dot_hover_bg:var(--sy_grey_A_200)}.slideshow{width:98%;position:relative;margin:0 auto}.slide{display:none;animation-name:slide-fade-left;animation-duration:.3s;border-radius:.25rem}.slide-basic{container-type:none;height:auto;background-color:var(--sy_slide_bg);color:var(--sy_slide_fg);box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);padding:1em}.slide p{color:var(--sy_slide_fg)}.slide-right{animation-name:slide-fade-right}.slide-title{display:block;max-width:100%;max-height:25%}.slide-content{display:block;font-size:inherit;width:80%;margin:20px 10%}@media (min-width:767.98px){.slideshow{width:90%}.slide-basic{min-height:80vh;container-type:inline-size}.slide-title{max-width:80%}.slide-content{width:90%;margin:30px 5%;font-size:2cqw}}.slide-next,.slide-prev{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-37px;padding:16px;color:var(--sy_slide_fg);font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;user-select:none}.slide-next{right:0;border-radius:3px 0 0 3px}.slide-navigation-disabled{color:var(--sy_slide_nav_disabled)!important;cursor:default}.slide-navigation-disabled:hover{background-color:transparent!important}.slide-next:hover,.slide-prev:hover{background-color:rgba(222,226,230,.4)}.slide-content img{max-width:100%}.slide-dot-container{display:block;margin:1em 0;width:100%;text-align:center}.slide-dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:var(--sy_slide_dot_bg);border-radius:50%;display:inline-block;transition:background-color .6s ease}.slide-dot-active,.slide-dot:hover{background-color:var(--sy_slide_dot_hover_bg)}@keyframes slide-fade-left{from{transform:translate(-100%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes slide-fade-right{from{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}";

class Slideshow {
  id;
  currentSlide = 0;
  slideCount = 0;

  constructor(id) {
    this.id = id;
  }
}

function showSlide(instance, lastSlide) {
  const slideshow = document.getElementById(instance.id);
  const slides = slideshow.querySelectorAll(".slide");
  const dots = slideshow
    .querySelector(".slide-dot-container")
    .querySelectorAll(".slide-dot");
  const next = slideshow.querySelector(".slide-next");
  const prev = slideshow.querySelector(".slide-prev");

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let dot of dots) {
    dot.classList.remove("slide-dot-active");
  }

  slides[instance.currentSlide].classList.toggle(
    "slide-right",
    lastSlide < instance.currentSlide
  );
  slides[instance.currentSlide].style.display = "block";
  dots[instance.currentSlide].classList.add("slide-dot-active");

  if (instance.currentSlide === 0) {
    prev.classList.add("slide-navigation-disabled");
  } else {
    prev.classList.remove("slide-navigation-disabled");
  }

  if (instance.currentSlide === instance.slideCount - 1) {
    next.classList.add("slide-navigation-disabled");
  } else {
    next.classList.remove("slide-navigation-disabled");
  }
}

function initializeSlideshows() {
  const slideshows = document.getElementsByClassName("slideshow");

  for (let i = 0; i < slideshows.length; i++) {
    let id = slideshows[i].id;
    if (!id) {
      continue;
    }

    let slideshow = new Slideshow(id);
    slideshow.slideCount = slideshows[i].querySelectorAll(".slide").length;

    let prevButton = document.createElement("a");
    prevButton.classList.add("slide-prev");
    prevButton.innerHTML = "&#10094;";
    prevButton.onclick = () => {
      if (slideshow.currentSlide < 1) {
        return;
      }

      let lastSlide = slideshow.currentSlide;
      slideshow.currentSlide -= 1;

      showSlide(slideshow, lastSlide);
    };

    slideshows[i].appendChild(prevButton);

    let nextButton = document.createElement("a");
    nextButton.classList.add("slide-next");
    nextButton.innerHTML = "&#10095;";
    nextButton.onclick = () => {
      if (slideshow.currentSlide >= slideshow.slideCount - 1) {
        return;
      }

      let lastSlide = slideshow.currentSlide;
      slideshow.currentSlide += 1;

      showSlide(slideshow, lastSlide);
    };

    slideshows[i].appendChild(nextButton);

    let dotContainer = document.createElement("div");
    dotContainer.classList.add("slide-dot-container");

    for (let j = 0; j < slideshow.slideCount; j++) {
      let dot = document.createElement("span");
      dot.classList.add("slide-dot");
      dot.onclick = () => {
        slideshow.currentSlide = j;
        showSlide(slideshow);
      };
      dotContainer.appendChild(dot);
    }

    slideshows[i].appendChild(dotContainer);
    showSlide(slideshow);
  }
}

insertStyle(slideshowRules);
initializeSlideshows();
