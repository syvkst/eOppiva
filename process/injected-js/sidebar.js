const sidebarRules =
  "#nav-drawer{display:none}#page-content.blocks-pre .region-main,.empty-region-side-post.used-region-side-pre #page-content .region-main{flex:1 1 100%;max-width:100%;padding-left:1rem;padding-right:1rem;transition:all .5s;-webkit-transition:all .5s}.sy-main-region-sidebar-open{margin-left:20%!important}@media (max-width:1375px){.sy-main-region-sidebar-open{margin-left:0!important}}.sy-overlay{position:fixed;width:100%;height:100%;left:-100%;top:0;right:0;bottom:0;background-color:var(--sy_level_1);z-index:1;transition:opacity .3s,left 1ms;-webkit-transition:opacity .3s,left 1ms;opacity:0}.sy-overlay-open{left:-100%;opacity:0}@media (max-width:1375px){.sy-overlay-open{left:0;opacity:1}}@media (max-width:700px){.sy-overlay-open{left:0;opacity:1;background-color:var(--sy_level_1)}}#page-content.blocks-pre .columnleft,.empty-region-side-post.used-region-side-pre #page-content .columnleft{position:absolute;flex:none;opacity:0;width:20%;max-width:20%;left:-20%;transition:all .5s;-webkit-transition:all .5s;z-index:2}@media (max-width:1375px){#page-content.blocks-pre .columnleft,.empty-region-side-post.used-region-side-pre #page-content .columnleft{position:fixed;overflow-y:scroll;flex:none;opacity:0;width:50%;max-width:50%;left:-50%;top:80px;bottom:0;right:0;transition:all .5s;-webkit-transition:all .5s}}@media (max-width:700px){#page-content.blocks-pre .columnleft,.empty-region-side-post.used-region-side-pre #page-content .columnleft{position:fixed;overflow-y:scroll;flex:none;opacity:0;width:100%;max-width:100%;left:-100%;top:80px;bottom:0;right:0;transition:all .5s;-webkit-transition:all .5s}}.sy-sidebar-open{left:0!important;opacity:1!important}.sidemenu-button{position:fixed;bottom:10px;left:10px;width:50px;height:50px;background-color:var(--sy_level_3);border:0 solid transparent;padding:.3rem;border-radius:.25rem;border:1px solid rgba(0,0,0,.125);z-index:3;transition:.3s}@media (max-width:700px){.sidemenu-button{padding:.2rem;width:40px;height:40px}}.sidemenu-button:hover{background-color:var(--sy_sidemenu_hover)}.sidemenu-button:focus{outline:0}.sidemenu-icon{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;transition:.5s}.icon-hidden{opacity:0}.block_mmquicklink ul.collapse{margin-bottom:5px}.block_mmquicklink ul.collapse a,.block_mmquicklink ul.collapse button{width:100%;padding:.5rem 0}";

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
