const accordionRules =
  ".accordion{background-color:var(--sy_level_4);color:var(--sy_font_color);cursor:pointer;padding:1rem;text-align:left;width:90%;margin-left:5%;margin-right:5%;border:none;outline:0;transition:.3s;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.accordion::before{content:'';display:inline-block;width:.5em;height:.5em;border:2px solid var(--sy_font_color);border-left:0;border-top:0;margin-bottom:.1em;margin-right:1em;transform:rotate(-45deg);transition:all .3s ease-out}.accordion-active,.accordion:active,.accordion:hover{border:none;outline:0;background-color:var(--sy_element_hover)}.accordion-active::before,.accordion:active::before{transform-origin:80%;transform:rotate(45deg)}.accordion:focus{border:none;outline:0}.accordion-panel{display:block;padding:0 1.5rem;background-color:var(--sy_level_4);max-height:0;overflow:hidden;width:90%;margin-left:5%;margin-right:5%;opacity:0;transition:all .3s ease-out}.accordion-panel-open{padding:1rem 1.5rem;opacity:1;max-height:fit-content}";

function initializeAccordions() {
  const accordions = document.getElementsByClassName("accordion");

  for (i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("accordion-active");

      const panel = this.nextElementSibling;
      panel.classList.toggle("accordion-panel-open");
    });
  }
}

insertStyle(accordionRules);
initializeAccordions();
