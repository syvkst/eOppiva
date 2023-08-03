const sidebarRules =
  "# inject:../../process/min-styles/sidebar.min.css -> <- end #";

const menuIconUrl =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/dist/img/menu-icon.png";
const menuIconLightUrl =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/dist/img/menu-icon-light.png";
const closeMenuIconUrl =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/dist/img/menu-close-icon.png";
const closeMenuIconLightUrl =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/dist/img/menu-close-icon-light.png";

function handleSidebar() {
  const leftColumn = document.getElementsByClassName("columnleft")[0];
  const mainRegion = document.getElementById("region-main-box");
  const overlay = document.getElementById("sy-overlay");
  const menuIcon = document.getElementById("sidebar-menu-icon");
  const closeMenuIcon = document.getElementById("sidebar-close-menu-icon");
  const sidebarOpen = localStorage.getItem("sySidebarOpen");
  const body = document.body;

  if (sidebarOpen === "closed") {
    mainRegion.classList.add("sy-main-region-sidebar-open");
    body.classList.add("noscroll");
    leftColumn.classList.add("sy-sidebar-open");
    overlay.classList.add("sy-overlay-open");
    menuIcon.classList.add("icon-hidden");
    closeMenuIcon.classList.remove("icon-hidden");
    localStorage.setItem("sySidebarOpen", "open");
  } else {
    overlay.classList.remove("sy-overlay-open");
    leftColumn.classList.remove("sy-sidebar-open");
    mainRegion.classList.remove("sy-main-region-sidebar-open");
    menuIcon.classList.remove("icon-hidden");
    closeMenuIcon.classList.add("icon-hidden");
    body.classList.remove("noscroll");
    localStorage.setItem("sySidebarOpen", "closed");
  }
}

function initialSidebarPosition() {
  const leftColumn = document.getElementsByClassName("columnleft")[0];
  const mainRegion = document.getElementById("region-main-box");
  const overlay = document.getElementById("sy-overlay");
  const menuIcon = document.getElementById("sidebar-menu-icon");
  const closeMenuIcon = document.getElementById("sidebar-close-menu-icon");
  const sidebarOpen = localStorage.getItem("sySidebarOpen");

  if (sidebarOpen === "open") {
    mainRegion.classList.add("sy-main-region-sidebar-open");
    leftColumn.classList.add("sy-sidebar-open");
    overlay.classList.add("sy-overlay-open");
    menuIcon.classList.add("icon-hidden");
    closeMenuIcon.classList.remove("icon-hidden");
    localStorage.setItem("sySidebarOpen", "open");
  } else {
    overlay.classList.remove("sy-overlay-open");
    leftColumn.classList.remove("sy-sidebar-open");
    mainRegion.classList.remove("sy-main-region-sidebar-open");
    menuIcon.classList.remove("icon-hidden");
    closeMenuIcon.classList.add("icon-hidden");
    localStorage.setItem("sySidebarOpen", "closed");
  }
}

function initializeSidebar() {
  if (document.getElementsByClassName("columnleft")[0]) {
    const body = document.getElementById("page-course-view-onetopic");

    const overlay = document.createElement("div");
    overlay.classList.add("sy-overlay");
    overlay.id = "sy-overlay";
    overlay.onclick = handleSidebar;

    body.appendChild(overlay);

    const sidebarBtn = document.createElement("button");
    sidebarBtn.classList.add("sidemenu-button");
    sidebarBtn.onclick = handleSidebar;

    const menuIcon = document.createElement("img");
    menuIcon.classList.add("sidemenu-icon", "themed");
    menuIcon.id = "sidebar-menu-icon";
    menuIcon.src = menuIconUrl;
    menuIcon.dataset.light = menuIconLightUrl;
    menuIcon.dataset.dark = menuIconUrl;

    const closeMenuIcon = document.createElement("img");
    closeMenuIcon.classList.add("sidemenu-icon", "icon-hidden", "themed");
    closeMenuIcon.id = "sidebar-close-menu-icon";
    closeMenuIcon.src = closeMenuIconUrl;
    closeMenuIcon.dataset.light = closeMenuIconLightUrl;
    closeMenuIcon.dataset.dark = closeMenuIconUrl;

    sidebarBtn.appendChild(menuIcon);
    sidebarBtn.appendChild(closeMenuIcon);
    body.appendChild(sidebarBtn);

    initialSidebarPosition();
  }
}

function addQuickButtons() {
  const settingsList = document.getElementById("collapse-editcoursesettings");

  if (settingsList) {
    const settingButton = document.createElement("a");
    settingButton.classList.add("btn", "btn-secondary");
    settingButton.href = `https://lms.eoppiva.fi/course/edit.php?id=${M.cfg.courseId}`;
    settingButton.innerHTML = "Kurssin asetukset";

    settingsList.appendChild(settingButton);
    settingsList.classList.add("show");
  }

  const participantsList = document.getElementById("collapse-participants");

  if (participantsList) {
    const partButton = document.createElement("a");
    partButton.classList.add("btn", "btn-secondary");
    partButton.href = `https://lms.eoppiva.fi/user/index.php?id=${M.cfg.courseId}`;
    partButton.innerHTML = "Osallistujat";

    participantsList.appendChild(partButton);
    participantsList.classList.add("show");
  }
}

insertStyle(sidebarRules);
initializeSidebar();
addQuickButtons();
