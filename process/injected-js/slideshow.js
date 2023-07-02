const slideshowRules =
  ".slideshow{width:90%;position:relative;margin:auto}.slide{display:none;animation-name:slide-fade-left;animation-duration:.8s}.slide-right{animation-name:slide-fade-right}.slide-basic{height:80vh;background-color:var(--sy_level_2);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);padding:1em;container-type:inline-size}.slide-next,.slide-prev{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-37px;padding:16px;color:var(--sy_font_color);font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;user-select:none}.slide-next{right:0;border-radius:3px 0 0 3px}.slide-navigation-disabled{color:var(--sy_level_5)!important;cursor:default}.slide-navigation-disabled:hover{background-color:transparent!important}.slide-next:hover,.slide-prev:hover{background-color:rgba(222,226,230,.4)}.slide-title{display:block;max-width:80%;max-height:20%}.slide-content{display:block;width:90%;margin:30px 5%;font-size:2cqw}.slide-content img{max-width:100%}@media (max-width:700px){.slideshow{width:100%}.slide-basic{container-type:none;height:auto}.slide-title{max-width:90%}.slide-content{font-size:inherit;width:80%;margin:20px 10%}}.slide-dot-container{display:block;margin:1em 0;width:100%;text-align:center}.slide-dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:var(--sy_level_5);border-radius:50%;display:inline-block;transition:background-color .6s ease}.slide-dot.active,.slide-dot:hover{background-color:var(--sy_level_6)}@keyframes slide-fade-left{from{transform:translate(-100%);opacity:0}to{transform:translate(0);opacity:1}}@keyframes slide-fade-right{from{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}";

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
    dot.classList.remove("active");
  }

  slides[instance.currentSlide].classList.toggle(
    "slide-right",
    lastSlide < instance.currentSlide
  );
  slides[instance.currentSlide].style.display = "block";
  dots[instance.currentSlide].classList.add("active");

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
