const cssRules =
  "# inject:../../process/min-styles/general.min.css -> <- end #";

function createStyle() {
  const styleElement = document.createElement("style");
  styleElement.id = "sy-styles";
  styleElement.appendChild(document.createTextNode(cssRules));
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

function insertStyle(rules) {
  const styleEl = document.getElementById("sy-styles");
  styleEl.appendChild(document.createTextNode(rules));
}

function createCourseSubheader() {
  const header = document.getElementById("page-header");
  const phh = header.querySelector(".page-header-headings");

  const activeMain = document.querySelector(
    ".tabs-wrapper .nav-tabs .nav-item .nav-link.active"
  );
  const activeSub = document.querySelector(
    ".onetopic-tab-body .nav-tabs .nav-item:not(.tab_initial) .nav-link.active"
  );

  if (activeMain) {
    const mainTitle = document.createElement("h2");
    mainTitle.innerHTML = activeMain.title;
    mainTitle.classList.add("sub-page-header-main");
    phh.appendChild(mainTitle);
  }

  if (activeSub) {
    const separator = document.createElement("i");
    separator.classList.add(
      "fa",
      "fa-arrow-right",
      "sub-page-header-separator"
    );
    phh.appendChild(separator);

    const subTitle = document.createElement("h3");
    subTitle.innerHTML = activeSub.title;
    subTitle.classList.add("sub-page-header-sub");
    phh.appendChild(subTitle);
  }
}

function findThemeSetting(localStorageTheme, systemSettingDark) {
  if (localStorageTheme) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

function updateThemeImages(theme) {
  const themeImages = document.querySelectorAll("img.themed");
  for (let img of themeImages) {
    if (theme === "dark") {
      img.src = img.dataset.dark ? img.dataset.dark : img.src;
      continue;
    }

    img.src = img.dataset.light ? img.dataset.light : img.src;
  }
}

function updateTheme(theme) {
  localStorage.setItem("sytheme", theme);
  document.querySelector("html").setAttribute("data-sytheme", theme);
  updateThemeImages(theme);
}

function initializeTheme() {
  const localStorageTheme = localStorage.getItem("sytheme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  const currentThemeSetting = findThemeSetting(
    localStorageTheme,
    systemSettingDark
  );
  updateTheme(currentThemeSetting);

  const themeInput = document.querySelector(".theme-toggle label input");
  if (!themeInput) {
    return;
  }

  themeInput.checked = currentThemeSetting === "dark" ? false : true;

  themeInput.addEventListener("change", function () {
    let theme = this.checked ? "light" : "dark";
    updateTheme(theme);
  });
}

function hideEmptyDescription() {
  const desc = document.querySelector('.my-3[data-for="sectioninfo"]');
  if (!desc) return;

  if (!desc.querySelector(".summarytext")) {
    desc.style.display = "none";
    return;
  }

  const children = desc.querySelector(".no-overflow").children;

  if (
    children.length > 1 ||
    children[0].nodeName.toLowerCase() !== "p" ||
    children[0].innerText.trim()
  ) {
    return;
  }

  desc.style.display = "none";
}

document.getElementById("page-course-view-onetopic").style.display = "none";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("page-course-view-onetopic").style.display = "block";
  const localStorageTheme = localStorage.getItem("sytheme");
  updateThemeImages(localStorageTheme);
  hideEmptyDescription();
});

createStyle();
initializeTheme();
createCourseSubheader();
