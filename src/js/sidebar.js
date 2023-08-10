const sidebarRules =
  "# inject:../../process/min-styles/sidebar.min.css -> <- end #";

function handleSidebar() {
  const leftColumn = document.getElementsByClassName("columnleft")[0];
  const mainRegion = document.getElementById("region-main-box");
  const overlay = document.getElementById("sy-overlay");
  const menuIcon = document.getElementById("sidebar-menu-icon");
  const closeMenuIcon = document.getElementById("sidebar-close-menu-icon");
  const sidebarOpen = localStorage.getItem("sySidebarOpen");
  const body = document.body;
  const indexButton = document.getElementById("sy-index-button");

  if (sidebarOpen === "closed") {
    mainRegion.classList.add("sy-main-region-sidebar-open");
    body.classList.add("noscroll");
    leftColumn.classList.add("sy-sidebar-open");
    overlay.classList.add("sy-overlay-open");
    menuIcon.classList.add("icon-hidden");
    closeMenuIcon.classList.remove("icon-hidden");
    localStorage.setItem("sySidebarOpen", "open");
    indexButton.classList.add("index-button-hidden");
  } else {
    overlay.classList.remove("sy-overlay-open");
    leftColumn.classList.remove("sy-sidebar-open");
    mainRegion.classList.remove("sy-main-region-sidebar-open");
    menuIcon.classList.remove("icon-hidden");
    closeMenuIcon.classList.add("icon-hidden");
    body.classList.remove("noscroll");
    localStorage.setItem("sySidebarOpen", "closed");
    indexButton.classList.remove("index-button-hidden");
  }
}

function initialSidebarPosition() {
  const leftColumn = document.getElementsByClassName("columnleft")[0];
  const mainRegion = document.getElementById("region-main-box");
  const overlay = document.getElementById("sy-overlay");
  const menuIcon = document.getElementById("sidebar-menu-icon");
  const sidebarOpen = localStorage.getItem("sySidebarOpen");

  if (sidebarOpen === "open") {
    mainRegion.classList.add("sy-main-region-sidebar-open");
    leftColumn.classList.add("sy-sidebar-open");
    overlay.classList.add("sy-overlay-open");
    menuIcon.classList.add("icon-hidden");
    localStorage.setItem("sySidebarOpen", "open");
  } else {
    overlay.classList.remove("sy-overlay-open");
    leftColumn.classList.remove("sy-sidebar-open");
    mainRegion.classList.remove("sy-main-region-sidebar-open");
    menuIcon.classList.remove("icon-hidden");
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
    sidebarBtn.id = "sy-sidebar-button";

    const menuIcon = document.createElement("i");
    menuIcon.classList.add("sidemenu-icon", "fa", "fa-bars");
    menuIcon.id = "sidebar-menu-icon";

    const closeMenuIcon = document.createElement("i");
    closeMenuIcon.classList.add("sidemenu-icon", "fa", "fa-arrow-left");
    closeMenuIcon.id = "sidebar-close-menu-icon";

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
