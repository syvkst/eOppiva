const navigationRules =
  "[data-sytheme=dark]{--sy_nav_fg:var(--sy_font_color);--sy_nav_level_1_bg:var(--sy_level_2);--sy_nav_level_1_border:var(--sy_purple_regular);--sy_nav_level_1_hover_bg:var(--sy_level_3);--sy_nav_level_1_hover_fg:var(--sy_blue_regular);--sy_nav_level_1_hover_border:var(--sy_blue_regular);--sy_nav_level_1_active_bg:var(--sy_purple_regular);--sy_nav_level_1_active_fg:var(--sy_font_color);--sy_nav_level_2_bg:var(--sy_level_4);--sy_nav_level_2_border:var(--sy_purple_regular);--sy_nav_level_2_hover_bg:var(--sy_level_5);--sy_nav_level_2_hover_fg:var(--sy_orange_regular);--sy_nav_level_2_active_bg:var(--sy_purple_regular);--sy_nav_level_2_active_fg:var(--sy_orange_regular);--sy_nav_level_2_active_border:var(--sy_purple_regular);--sy_nav_submenu_fg:var(--sy_font_color);--sy_nav_hover_submenu_bg:var(--sy_level_4);--sy_nav_hover_submenu_text:var(--sy_blue_regular);--sy_nav_hover_submenu_border:var(--sy_blue_regular);--sy_nav_submenu_active_bg:var(--sy_level_4)}[data-sytheme=light]{--sy_nav_fg:var(--sy_font_color);--sy_nav_level_1_bg:var(--sy_light);--sy_nav_level_1_border:var(--sy_grey_A_regular);--sy_nav_level_1_hover_bg:var(--sy_grey_A_regular);--sy_nav_level_1_hover_fg:var(--sy_light);--sy_nav_level_1_hover_border:var(--sy_grey_A_regular);--sy_nav_level_1_active_bg:var(--sy_purple_regular);--sy_nav_level_1_active_fg:var(--sy_light);--sy_nav_level_2_bg:var(--sy_orange_regular);--sy_nav_level_2_border:var(--sy_orange_regular);--sy_nav_level_2_hover_bg:var(--sy_grey_A_regular);--sy_nav_level_2_hover_fg:var(--sy_light);--sy_nav_level_2_active_bg:var(--sy_grey_A_800);--sy_nav_level_2_active_fg:var(--sy_purple_regular);--sy_nav_level_2_active_border:var(--sy_purple_regular);--sy_nav_submenu_fg:var(--sy_light);--sy_nav_hover_submenu_bg:var(--sy_grey_A_400);--sy_nav_hover_submenu_text:var(--sy_blue_regular);--sy_nav_hover_submenu_border:var(--sy_blue_regular);--sy_nav_submenu_active_bg:var(--sy_grey_A_600)}@media (min-width:767.98px){.tabs-wrapper .nav-tabs{border-bottom:none;border-top:none;padding-top:10px;background-color:transparent;margin-bottom:0!important}.tabs-wrapper .nav-tabs .nav-item{background-color:transparent;color:var(--sy_nav_fg);transition:.2s}.tabs-wrapper .nav-tabs .nav-item .nav-link{display:block;color:var(--sy_nav_fg);padding:10px 1rem;background-color:var(--sy_nav_level_1_bg);margin-bottom:0;margin-right:3px;border:none;border-bottom:2px solid var(--sy_nav_level_1_border);border-radius:.25rem;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);transition:.2s}[data-sytheme=light] .tabs-wrapper .nav-tabs .nav-item .nav-link{border-bottom:1px solid var(--sy_nav_level_1_border)}.tabs-wrapper .nav-tabs .nav-item:hover .nav-link:not(.active){background-color:var(--sy_nav_level_1_hover_bg);color:var(--sy_nav_level_1_hover_fg);border-color:var(--sy_nav_level_1_hover_border)}.tabs-wrapper .nav-tabs .nav-item:hover .nav-link:has(~.sub-menu){border-radius:.25rem .25rem 0 0;border-color:transparent}.tabs-wrapper .nav-tabs .nav-link.active{color:var(--sy_nav_level_1_active_fg);background-color:var(--sy_nav_level_1_active_bg);border-color:transparent}.onetopic-tab-body .nav-tabs{width:95%;margin-left:auto;margin-right:auto;border-bottom:none;border-top:none;padding-top:10px;background-color:transparent;margin-bottom:0!important}.onetopic-tab-body .nav-tabs .nav-item{background-color:transparent;color:var(--sy_nav_fg);transition:.2s}.onetopic-tab-body .nav-tabs .nav-item .nav-link{display:block;color:var(--sy_nav_fg);font-size:.8rem;padding:10px 1rem;background-color:var(--sy_nav_level_2_bg);margin-bottom:0;margin-right:3px;border:none;border-bottom:2px solid var(--sy_nav_level_2_border);border-radius:.25rem;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);transition:.2s}.onetopic-tab-body .nav-tabs .nav-item:hover .nav-link:not(.active){background-color:var(--sy_nav_level_2_hover_bg);color:var(--sy_nav_level_2_hover_fg);border-color:var(--sy_nav_level_2_hover_fg)}.onetopic-tab-body .nav-tabs .nav-link.active{color:var(--sy_nav_fg);background-color:var(--sy_nav_level_2_active_bg);border-color:transparent}.nav-tabs .nav-item:not(:last-child) .nav-link i{display:none}body:not([class~=editing]) .onetopic-tab-body>.nav-tabs{display:none}}.tabs-wrapper .nav-tabs .nav-item:hover .nav-link~.sub-menu{padding:.5rem;transition:max-height .8s ease;max-height:800px}ul.sub-menu{position:absolute;z-index:99;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);width:fit-content;max-height:0;overflow:hidden;transition:all 10ms;padding:0;margin-top:-2px;border-radius:0 10px 10px 10px;background:var(--sy_nav_selected_bg)}ul.sub-menu li{display:block}ul.sub-menu li a{display:block;padding:15px 15px;width:100%;color:var(--sy_nav_submenu_fg);transition:background-color .1s,color .1s;border-radius:.25rem}ul.sub-menu li:hover a:not(.active){background-color:var(--sy_nav_hover_submenu_bg);color:var(--sy_nav_hover_submenu_text)}ul.sub-menu li a.active{border-left:5px solid var(--sy_nav_level_2_active_border);background-color:var(--sy_nav_submenu_active_bg)}ul.sub-menu li:hover a.active{cursor:default}.index-level-1,.index-level-2{display:block;padding:1rem 1rem;transition:.3s;color:var(--sy_nav_overlay_index_text)}.index-level-1:focus,.index-level-1:hover{background-color:var(--sy_nav_hover_submenu_bg);color:var(--sy_nav_hover_submenu_text)}.index-level-1{background-color:var(--sy_nav_overlay_index_level_1_bg);z-index:4;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}.index-level-2{font-size:.9rem;width:95%;margin-right:auto;margin-left:auto;z-index:3;background-color:var(--sy_nav_overlay_index_level_2_bg)}.index-level-2:focus,.index-level-2:hover{background-color:var(--sy_nav_hover_submenu_bg);color:var(--sy_nav_hover_submenu_text)}.index-button{display:none}.index-button:hover{background-color:var(--sy_sidemenu_hover)}.index-button:focus{outline:0}.index-overlay{display:none}.index-container{display:none}@media (min-width:767.98px){body.noscroll .index-button{right:22px}}@media (max-width:767.98px){.nav-tabs{display:none}.index-overlay{display:block;position:fixed;width:100%;height:100%;left:100%;top:0;bottom:0;right:0;background-color:var(--sy_level_1);z-index:1;opacity:0;transition:opacity .3s,left 1ms;-webkit-transition:opacity .3s,left 1ms}.index-overlay-open{opacity:1;left:0}.index-container{display:block;position:fixed;overflow-y:auto;opacity:0;width:100%;max-width:100%;left:100%;bottom:0;right:0;top:80px;transition:all .5s;-webkit-transition:all .5s;z-index:2}.index-card{width:95%;margin-left:auto;margin-right:auto;padding:2rem}.index-container-open{left:0!important;opacity:1!important}.index-button{display:flex;justify-content:center;align-items:center;position:fixed;color:var(--sy_font_color);bottom:10px;right:10px;width:40px;height:40px;background-color:var(--sy_level_3);padding:.2rem;border-radius:.25rem;border:1px solid rgba(0,0,0,.125);z-index:3;transition:background-color .3s}}.index-button-hidden{display:none}.index-icon{transition:.3s;width:100%;font-size:1.5rem;text-align:center}.index-icon-hidden{opacity:0;width:0}#sy-index-button-icon.index-icon-hidden~#sy-index-button-icon-close{transition:.3s;width:100%;text-align:center;opacity:1}#sy-index-button-icon:not(.index-icon-hidden)~#sy-index-button-icon-close{transition:.3s;width:0;opacity:0}.section-navigation a{color:var(--sy_nav_fg);padding:10px 1rem;background-color:var(--sy_nav_level_1_bg);border-radius:.25rem;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);transition:.2s}.section-navigation a:hover{background-color:var(--sy_nav_level_1_hover_bg);color:var(--sy_nav_level_1_hover_fg)}.section-navigation span{display:none}.section-navigation .prevsection i{margin-right:.5rem}.section-navigation .nextsection i{margin-left:.5rem}";

class Section {
  name;
  href;
  subs = [];

  constructor(name, value) {
    this.name = name;
    this.href = window.location.origin + value;
  }
}

var indexOpen = false;

function findSections() {
  const jumper = document.querySelector("select.jumpmenu");
  if (!jumper) {
    return null;
  }

  const sections = [];

  const options = jumper.querySelectorAll("option");

  for (let opt of options) {
    if (!opt.value) {
      continue;
    }

    let section = new Section(
      opt.innerHTML.replaceAll("&nbsp;", ""),
      opt.value
    );

    if (!opt.innerHTML.includes("&nbsp;")) {
      sections.push(section);
      continue;
    }

    sections[sections.length - 1].subs.push(section);
  }

  jumper.style.display = "none";
  return sections;
}

function initializeBottomNavigationButtons() {
  const prev = document.querySelector(".prevsection a");
  const next = document.querySelector(".nextsection a");

  if (prev) {
    const prevArrow = document.createElement("i");
    prevArrow.classList.add("fa", "fa-arrow-left");
    prev.insertBefore(prevArrow, prev.firstChild);
  }

  if (next) {
    const nextArrow = document.createElement("i");
    nextArrow.classList.add("fa", "fa-arrow-right");
    next.appendChild(nextArrow);
  }
}

function createDropdownMenu(sections) {
  const navs = document.querySelectorAll(".tabs-wrapper .nav-tabs .nav-item");
  const subNavs = document.querySelectorAll(
    ".onetopic-tab-body .nav-tabs .nav-item"
  );

  for (let i = 0; i < sections.length; i++) {
    if (sections[i].subs.length === 0) {
      continue;
    }

    let submenu = document.createElement("ul");
    submenu.classList.add("sub-menu");
    let mainActive = Boolean(navs[i].querySelector(".nav-link.active"));

    for (let j = 0; j < sections[i].subs.length; j++) {
      let sect = sections[i].subs[j];
      let item = document.createElement("li");
      let link = document.createElement("a");
      link.href = sect.href;
      link.innerHTML = sect.name;
      link.classList.toggle(
        "active",
        mainActive && subNavs[j + 1].querySelector(".nav-link.active")
      );
      item.appendChild(link);
      submenu.appendChild(item);
    }

    navs[i].appendChild(submenu);
  }
}

function toggleIndexOverlay() {
  const indexOverlay = document.getElementById("sy-index-overlay");
  const indexContainer = document.getElementById("sy-index-container");
  const sideBarButton = document.getElementById("sy-sidebar-button");
  const buttonIcon = document.getElementById("sy-index-button-icon");

  if (!indexOpen) {
    indexOverlay.classList.add("index-overlay-open");
    indexContainer.classList.add("index-container-open");
    document.body.classList.add("noscroll");
    sideBarButton.classList.add("sidemenu-button-hidden");
    buttonIcon.classList.add("index-icon-hidden");
  } else {
    indexOverlay.classList.remove("index-overlay-open");
    indexContainer.classList.remove("index-container-open");
    document.body.classList.remove("noscroll");
    sideBarButton.classList.remove("sidemenu-button-hidden");
    buttonIcon.classList.remove("index-icon-hidden");
  }

  indexOpen = !indexOpen;
}

function createOverlayIndex(sections) {
  const body = document.getElementById("page-course-view-onetopic");
  const overlay = document.createElement("div");
  overlay.classList.add("index-overlay");
  overlay.id = "sy-index-overlay";

  const indexContainer = document.createElement("div");
  indexContainer.classList.add("index-container");
  indexContainer.id = "sy-index-container";

  const index = document.createElement("div");
  index.classList.add("index-card");

  for (let sect of sections) {
    let mainSection = document.createElement("a");
    mainSection.href = sect.href;
    mainSection.innerHTML = sect.name;
    mainSection.classList.add("index-level-1");
    index.appendChild(mainSection);

    for (let subSect of sect.subs) {
      let subSection = document.createElement("a");
      subSection.href = subSect.href;
      subSection.innerHTML = subSect.name;
      subSection.classList.add("index-level-2");
      index.appendChild(subSection);
    }
  }

  indexContainer.appendChild(index);
  body.appendChild(overlay);
  body.appendChild(indexContainer);

  const indexButton = document.createElement("button");
  indexButton.classList.add("index-button");
  indexButton.id = "sy-index-button";

  const indexIcon = document.createElement("i");
  indexIcon.classList.add("index-icon", "fa", "fa-bookmark");
  indexIcon.id = "sy-index-button-icon";

  const indexCloseIcon = document.createElement("i");
  indexCloseIcon.classList.add("index-icon", "fa", "fa-arrow-right");
  indexCloseIcon.id = "sy-index-button-icon-close";

  indexButton.appendChild(indexIcon);
  indexButton.appendChild(indexCloseIcon);
  indexButton.onclick = toggleIndexOverlay;

  body.appendChild(indexButton);
}

function createIndexes() {
  const sections = findSections();
  if (!sections) {
    return;
  }

  createDropdownMenu(sections);
  createOverlayIndex(sections);
}

insertStyle(navigationRules);
window.addEventListener("DOMContentLoaded", function () {
  createIndexes();
  initializeBottomNavigationButtons();
});
