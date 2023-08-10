const accordionRules =
  "[data-sytheme=dark]{--sy_accordion_bg:var(--sy_level_2);--sy_accordion_fg:var(--sy_font_color);--sy_accordion_hover_bg:var(--sy_level_3);--sy_accordion_hover_fg:var(--sy_blue_regular);--sy_accordion_active_bg:var(--sy_red_regular);--sy_accordion_active_fg:var(--sy_font_color);--sy_accordion_panel_bg:var(--sy_level_3);--sy_accordion_panel_fg:var(--sy_font_color)}[data-sytheme=light]{--sy_accordion_bg:var(--sy_light);--sy_accordion_fg:var(--sy_font_color);--sy_accordion_hover_bg:var(--sy_grey_A_regular);--sy_accordion_hover_fg:var(--sy_light);--sy_accordion_active_bg:var(--sy_red_regular);--sy_accordion_active_fg:var(--sy_light);--sy_accordion_panel_bg:var(--sy_light);--sy_accordion_panel_fg:var(--sy_font_color)}.accordion{background-color:var(--sy_accordion_bg);color:var(--sy_accordion_fg);cursor:pointer;padding:1rem;text-align:left;width:98%;margin-left:1%;margin-right:1%;border:none;border-radius:.25rem;outline:0;z-index:1;transition:.2s;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}@media (min-width:767.98px){.accordion{width:90%;margin-left:5%;margin-right:5%}}.accordion::before{content:'';display:inline-block;width:.5em;height:.5em;border:2px solid var(--sy_accordion_fg);border-left:0;border-top:0;margin-bottom:.1em;margin-right:1em;transform:rotate(-45deg);transition:all .3s ease-out}.accordion:not(.active):hover{border:none;outline:0;background-color:var(--sy_accordion_hover_bg);color:var(--sy_accordion_hover_fg)}.accordion:not(.active):hover::before{border-color:var(--sy_accordion_hover_fg)}.accordion.active{border:none;outline:0;background-color:var(--sy_accordion_active_bg);color:var(--sy_accordion_active_fg);border-bottom-left-radius:0;border-bottom-right-radius:0}.accordion.active::before{transform-origin:80%;transform:rotate(45deg);border-color:var(--sy_accordion_active_fg)}.accordion:focus{border:none;outline:0}.accordion-panel{display:block;padding:0 1.5rem;background-color:var(--sy_accordion_panel_bg);color:var(--sy_accordion_panel_fg);max-height:0;overflow:hidden;border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem;width:98%;margin-left:1%;margin-right:1%;margin-bottom:5px;opacity:0;transition:all .3s ease-out;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}@media (min-width:767.98px){.accordion-panel{width:90%;margin-left:5%;margin-right:5%}}.accordion-panel-open{padding:1rem 1.5rem;opacity:1;max-height:fit-content}";

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
