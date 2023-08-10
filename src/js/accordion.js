const accordionRules =
  "# inject:../../process/min-styles/accordion.min.css -> <- end #";

function initializeAccordions() {
  const accordions = document.getElementsByClassName("accordion");

  for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("active");

      const panel = this.nextElementSibling;
      panel.classList.toggle("accordion-panel-open");
    });
  }
}

insertStyle(accordionRules);
initializeAccordions();
