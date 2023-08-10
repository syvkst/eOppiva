const navigationRules =
  "# inject:../../process/min-styles/navigation.min.css -> <- end #";

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
