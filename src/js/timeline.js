const timelineRules =
  "# inject:../../process/min-styles/timeline.min.css -> <- end #";

function revealTimeline(selectors, elementVisible = 150) {
  const toReveal = document.querySelectorAll(selectors);

  for (let i = 0; i < toReveal.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = toReveal[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      toReveal[i].classList.add("active");
    } else {
      toReveal[i].classList.remove("active");
    }
  }
}

function initializeTimelines() {
  const timelines = document.getElementsByClassName("timeline");

  for (const timeline of timelines) {
    let points = timeline.querySelectorAll(".timeline-content");

    for (let i = 0; i < points.length; i++) {
      let point = points[i];

      let dataDate = point.dataset.date;
      let dataTitle = point.dataset.title;

      let text = document.createElement("p");
      text.innerHTML = point.innerHTML;
      point.innerHTML = "";

      if (dataDate) {
        let date = document.createElement("h5");
        date.innerHTML = dataDate;
        point.appendChild(date);
      }

      if (dataTitle) {
        let title = document.createElement("h3");
        title.innerHTML = dataTitle;
        point.appendChild(title);
      }

      point.appendChild(text);

      let circle = document.createElement("div");
      circle.classList.add("timeline-circle");

      let middle = document.createElement("div");
      middle.classList.add("timeline-middle");
      middle.appendChild(circle);

      let empty = document.createElement("div");
      empty.classList.add("timeline-empty");

      let arrow = document.createElement("div");
      arrow.classList.add("timeline-arrow");
      point.after(arrow);

      if (i === points.length - 1) {
        point.classList.add("timeline-content-last");
        break;
      }

      if ((i + 1) % 2 === 0) {
        point.after(empty);
        point.after(middle);
      } else {
        timeline.insertBefore(empty, point);
        timeline.insertBefore(middle, point);
      }
    }
  }

  window.addEventListener("scroll", () => {
    revealTimeline(".timeline-content, .timeline-arrow", 80);
    revealTimeline(".timeline-middle, .timeline-circle", 180);
  });
}

insertStyle(timelineRules);
initializeTimelines();
