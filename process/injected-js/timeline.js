const timelineRules =
  "[data-sytheme=dark]{--sy_timeline_content_bg:var(--sy_level_2);--sy_timeline_content_fg:var(--sy_font_color)}[data-sytheme=light]{--sy_timeline_content_bg:var(--sy_light);--sy_timeline_content_fg:var(--sy_font_color)}.timeline{width:100%;height:auto;max-width:800px;margin:0 auto;overflow:hidden;display:flex;flex-direction:column}.timeline-content{background:var(--sy_timeline_content_bg);box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);border-radius:5px;color:var(--sy_timeline_content_fg);padding:.5rem 1.75rem 1.75rem 1.75rem;overflow-wrap:break-word!important;margin:0 1% 1rem 1%;border-radius:6px;transform:translateY(150px);opacity:0;transition:1s all ease}.timeline-content.active{transform:translateY(0);opacity:1}.timeline-content.show{transform:translateY(0);opacity:1}.timeline-arrow{display:block;margin-left:50%;margin-bottom:1em;width:17px;height:17px;border:6px solid var(--sy_red_regular);border-left:0;border-top:0;opacity:0;transform-origin:bottom right;-webkit-transform:translateX(-16px) rotate(45deg);transform:translateX(-16px) rotate(45deg);transition:all 2s ease .5s}.timeline-arrow:not(:last-child).active{opacity:1}.timeline-arrow:not(:last-child).show{opacity:1}.timeline-content-last{border:3px solid var(--sy_red_regular)}@media screen and (min-width:767.98px){.timeline{display:grid;grid-template-columns:1fr 3px 1fr;margin-top:1rem}.timeline-content{margin:0 1.75rem 1rem 1.75rem}.timeline-content-last{grid-column:span 3;width:70%;margin-left:15%;margin-right:15%}.timeline-middle{position:relative;background-image:linear-gradient(45deg,var(--sy_orange_regular),var(--sy_red_regular),var(--sy_purple_regular));width:3px;height:0%;opacity:0;transition:1s all ease}.timeline-middle.active{opacity:1;height:100%}.timeline-middle.show{opacity:1;height:100%}.timeline-circle{position:absolute;top:0;left:50%;width:15px;height:15px;border-radius:50%;background-image:linear-gradient(45deg,var(--sy_orange_regular),var(--sy_red_regular),var(--sy_purple_regular));-webkit-transform:translateX(-50%);transform:translateX(-50%);opacity:0;transition:1s all ease}.timeline-circle.active{opacity:1}.timeline-circle.show{opacity:1}.timeline-arrow{display:none}}";

function revealTimeline(selectors, elementVisible = 150) {
  const toReveal = document.querySelectorAll(selectors);

  for (let i = 0; i < toReveal.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = toReveal[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - elementVisible) {
      toReveal[i].classList.add("show");
    } else {
      toReveal[i].classList.remove("show");
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
