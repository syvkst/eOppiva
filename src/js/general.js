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
  const syNimi = document.getElementById("sy-nimi");

  if (syNimi) {
    const header = document.getElementById("page-header");
    const phh = header.querySelector(".page-header-headings");

    const sytxt = document.createElement("p");
    sytxt.innerHTML = syNimi.innerText;
    sytxt.classList.add("sub-page-header");

    phh.appendChild(sytxt);
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

document.getElementById("page-course-view-onetopic").style.display = "none";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("page-course-view-onetopic").style.display = "block";
  const localStorageTheme = localStorage.getItem("sytheme");
  updateThemeImages(localStorageTheme);
});

createStyle();
initializeTheme();
createCourseSubheader();
