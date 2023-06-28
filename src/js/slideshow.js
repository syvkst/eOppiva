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
  const next = slideshow.querySelector(".slide-next");
  const prev = slideshow.querySelector(".slide-prev");

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let dot of dots) {
    dot.classList.remove("active");
  }

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

      slideshow.currentSlide -= 1;

      showSlide(slideshow);
    };

    slideshows[i].appendChild(prevButton);

    let nextButton = document.createElement("a");
    nextButton.classList.add("slide-next");
    nextButton.innerHTML = "&#10095;";
    nextButton.onclick = () => {
      if (slideshow.currentSlide >= slideshow.slideCount - 1) {
        return;
      }

      slideshow.currentSlide += 1;

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
    showSlide(slideshow);
  }
}

insertStyle(slideshowRules);
initializeSlideshows();
