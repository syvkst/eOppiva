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

document.getElementById("page-course-view-onetopic").style.display = "none";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("page-course-view-onetopic").style.display = "block";
});

createStyle();
createCourseSubheader();
