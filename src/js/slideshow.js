const slideshowRules =
  "# inject:../../process/min-styles/slideshow.min.css -> <- end #";

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
