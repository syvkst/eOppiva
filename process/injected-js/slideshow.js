const slideshowRules =
  ".slideshow{max-width:90%;position:relative;margin:auto}.slide{display:none;margin-bottom:30px}.slide-show{display:block}.slide-next,.slide-prev{cursor:pointer;position:absolute;top:50%;width:auto;margin-top:-22px;padding:16px;color:var(--sy_light);font-weight:700;font-size:18px;transition:.6s ease;border-radius:0 3px 3px 0;user-select:none}.slide-next{right:0;border-radius:3px 0 0 3px}.slide-next:hover,.slide-prev:hover{background-color:rgba(0,0,0,.8)}.slide-title{position:absolute;top:2%;left:2%;max-width:80%;max-height:20%}.slide-dot-container{display:block;margin:1em 0;width:100%;text-align:center}.slide-dot{cursor:pointer;height:15px;width:15px;margin:0 2px;background-color:var(--sy_level_2);border-radius:50%;display:inline-block;transition:background-color .6s ease}.slide-dot.active,.slide-dot:hover{background-color:var(--sy_level_1)}.slide-fade{animation-name:slide-fade;animation-duration:1.5s}@keyframes slide-fade{from{opacity:.4}to{opacity:1}}";

class Slideshow {
  id;
  currentSlide = 0;
  slideCount = 0;

  constructor(id) {
    this.id = id;
  }
}

function showSlide(instance) {
  const slideshow = document.getElementById(instance.id);

  const slides = slideshow.querySelectorAll(".slide");
  const dots = slideshow
    .querySelector(".slide-dot-container")
    .querySelectorAll(".slide-dot");

  for (let slide of slides) {
    slide.classList.remove("slide-show");
  }

  for (let dot of dots) {
    dot.classList.remove("active");
  }

  slides[instance.currentSlide].classList.add(".slide-show");
  dots[instance.currentSlide].classList.add("active");
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
      slideshow.currentSlide -= 1;

      if (slideshow.currentSlide < 0) {
        slideshow.currentSlide = slideshow.slideCount - 1;
      } else if (slideshow.currentSlide > slideshow.slideCount - 1) {
        slideshow.currentSlide = 0;
      }

      showSlide(slideshow);
    };

    slideshows[i].appendChild(prevButton);

    let nextButton = document.createElement("a");
    nextButton.classList.add("slide-next");
    prevButton.onclick = () => {
      slideshow.currentSlide += 1;

      if (slideshow.currentSlide < 0) {
        slideshow.currentSlide = slideshow.slideCount - 1;
      } else if (slideshow.currentSlide > slideshow.slideCount - 1) {
        slideshow.currentSlide = 0;
      }

      showSlide(slideshow);
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
  }
}

insertStyle(slideshowRules);
initializeSlideshows();
