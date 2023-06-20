const banneriOsoite =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/banner.png";

const brandiLogoOsoite =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/brand_logo.png";

const faviconOsoite =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/favicon-16x16.png";

const menuPainikeOsoite =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/menu-icon.png";

const suljeMenuPainikeOsoite =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/menu-close-icon.png";

var cssRules =
  '@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@700;900&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Open+Sans&display=swap");:root{--sy_purple_200:#c299cd;--sy_purple_300:#a970b9;--sy_purple_400:#9651aa;--sy_purple_regular:#84329b;--sy_purple_600:#7c2d93;--sy_purple_700:#712689;--sy_purple_800:#671f7f;--sy_purple_900:#54136d;--sy_red_200:#e787b4;--sy_red_300:#dd5796;--sy_red_400:#d53380;--sy_red_regular:#ce0f69;--sy_red_600:#c90d61;--sy_red_700:#c20b56;--sy_red_800:#bc084c;--sy_red_900:#b0043b;--sy_blue_200:#b8e2f4;--sy_blue_300:#9cd6ef;--sy_blue_400:#86ceeb;--sy_blue_regular:#71c5e8;--sy_blue_600:#69bfe5;--sy_blue_700:#5eb8e2;--sy_blue_800:#54b0de;--sy_blue_900:#42a3d8;--sy_orange_200:#ffcf8d;--sy_orange_300:#ffbb5f;--sy_orange_400:#ffad3d;--sy_orange_regular:#ff9e1b;--sy_orange_600:#ff9618;--sy_orange_700:#ff8c14;--sy_orange_800:#ff8210;--sy_orange_900:#ff7008;--sy_grey_A_200:#96979a;--sy_grey_A_300:#6b6d72;--sy_grey_A_400:#4c4d53;--sy_grey_A_regular:#2c2e35;--sy_grey_A_600:#272930;--sy_grey_A_700:#212328;--sy_grey_A_800:#1b1d22;--sy_grey_A_900:#101216;--sy_light:#dee2e6;--sy_shadow_1:rgba(0,0,0,.2);--sy_shadow_2:rgba(0,0,0,.19);--sy_heading_font:"IBM Plex Sans",sans-serif;--sy_paragraph_font:"Open Sans",sans-serif;--sy_heading_weight:700;--sy_aipa_blue:#19add8;--sy_aipa_purple:#9b7aba;--sy_aipa_green:#8dc63f;--sy_aipa_yellow:#dfd400;--sy_dark_purple:#333142;--sy_dark_1:#1e1e1e;--sy_dark_2:#252526;--sy_dark_3:#2d2d30;--sy_dark_4:#3e3e42;--sy_light_grey:#576d87}body{margin-left:0;color:var(--sy_light);background-color:var(--sy_grey_A_900)}p{color:var(--sy_light);font-family:var(--sy_paragraph_font)}a{color:var(--sy_light);font-family:var(--sy_paragraph_font);transition:.3s}a:hover{color:var(--sy_blue_regular);text-decoration:none}a:active{text-decoration:none;color:var(--sy_purple_900)}a:not([class]){color:var(--sy_orange_regular);transition:.3s}a:not([class]):hover{text-decoration:none;color:var(--sy_blue_regular)}a:not([class]):focus{background-color:transparent;box-shadow:none;border:0 solid transparent;color:var(--sy_blue_regular);animation:clickFadeOutIn .5s linear 1 forwards}h1,h2,h3,h4,h5,h6{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);margin-top:1rem;margin-bottom:1rem}hr{background-color:var(--sy_light)}.nav-link:focus{box-shadow:none}.nav-link:focus,.nav-link:focus .tab_level_0,.nav-link:focus .tab_level_1{animation:clickFadeOutIn .5s linear 1 forwards}@keyframes clickFadeOutIn{0%{opacity:1}50%{opacity:.5}100%{opacity:1}}.navbar{background-color:var(--sy_grey_A_800);box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2);padding:2.5rem 1rem;max-height:80}#page-navbar{display:none}#page-header .card{background-color:transparent;border:0 solid transparent}#page-header .card .flex-wrap{display:none!important}#page-footer{display:none}.empty-region-side-post.used-region-side-pre #page-content .region-main,#page-content.blocks-pre .region-main{flex:1 1 100%;max-width:100%;padding-left:1rem;padding-right:1rem;transition:all .5s;-webkit-transition:all .5s}.sy-main-region-sidebar-open{margin-left:20%!important}@media (max-width:1375px){.sy-main-region-sidebar-open{margin-left:0!important}}.sy-overlay{position:fixed;width:100%;height:100%;left:-100%;top:0;right:0;bottom:0;background-color:var(--sy_grey_A_800);z-index:1;transition:opacity .3s,left 1ms;-webkit-transition:opacity .3s,left 1ms;opacity:0}.sy-overlay-open{left:-100%;opacity:0}@media (max-width:1375px){.sy-overlay-open{left:0;opacity:1}}@media (max-width:700px){.sy-overlay-open{left:0;opacity:1;background-color:var(--sy_grey_A_800)}}.empty-region-side-post.used-region-side-pre #page-content .columnleft,#page-content.blocks-pre .columnleft{position:absolute;flex:none;opacity:0;width:20%;max-width:20%;left:-20%;transition:all .5s;-webkit-transition:all .5s;z-index:2}@media (max-width:1375px){.empty-region-side-post.used-region-side-pre #page-content .columnleft,#page-content.blocks-pre .columnleft{position:fixed;overflow-y:scroll;flex:none;opacity:0;width:50%;max-width:50%;left:-50%;top:80px;bottom:0;right:0;transition:all .5s;-webkit-transition:all .5s}}@media (max-width:700px){.empty-region-side-post.used-region-side-pre #page-content .columnleft,#page-content.blocks-pre .columnleft{position:fixed;overflow-y:scroll;flex:none;opacity:0;width:100%;max-width:100%;left:-100%;top:80px;bottom:0;right:0;transition:all .5s;-webkit-transition:all .5s}}.noscroll{overflow:auto}@media (max-width:1375px){.noscroll{overflow:hidden}}.sy-sidebar-open{left:0!important;opacity:1!important}.columnright{display:none}.sidemenu-button{position:fixed;bottom:10px;left:10px;width:50px;height:50px;background-color:var(--sy_grey_A_600);border:0 solid transparent;padding:.3rem;border-radius:.25rem;border:1px solid rgba(0,0,0,.125);z-index:3;transition:.3s}@media (max-width:700px){.sidemenu-button{padding:.2rem;width:40px;height:40px}}.sidemenu-button:hover{background-color:var(--sy_grey_A_400)}.sidemenu-button:focus{outline:none}.sidemenu-icon{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;transition:.5s}.icon-hidden{opacity:0}.pagelayout-course #page-header h1{padding:1rem 1.5rem}.navbar .site-logo{content:url("https://raw.githubusercontent.com/syvkst/eOppiva/main/brand_logo.png");transition:.3s}.navbar .site-logo:hover{opacity:.5}.navbar-brand{transition:.3s;display:inline!important}.navbar-brand:hover{opacity:.6}.navbar-brand:focus{outline:none;background-color:transparent;box-shadow:none;-webkit-box-shadow:none}.navbar .navbar-nav .nav-link{color:var(--sy_light)!important;text-transform:uppercase;letter-spacing:.1rem;font-weight:600;transition:.3s;font-family:var(--sy_paragraph_font);padding:.5rem}.navbar .navbar-nav .nav-link:hover{color:var(--sy_aipa_blue)!important}.navbar .navbar-settings-icon .dropdown-toggle>.icon{color:var(--sy_light)}#nav-notification-popover-container{display:none}[data-region="popover-region-messages"]{display:none}nav ul li a[href="https://eoppiva.fi/ "]{display:none}nav ul li a[href="https://lms.eoppiva.fi/?redirect=0"]{display:none}.avatars{display:none}.course-banner-image-container{position:relative;width:100%;height:20vw;margin-bottom:-120px;margin-top:80px;background-color:transparent;background-position:top;flex:1 1 auto;display:flex;box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}.course-banner-image{width:100%}.pagelayout-course #page-header h1,.pagelayout-incourse #page-header h1{background-color:var(--sy_grey_A_700);color:var(--sy_light);border-radius:5px;display:inline-block}.sub-page-header{background-color:var(--sy_grey_A_800);color:var(--sy_light);padding:1rem 1.5rem;font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);font-size:1.5rem;text-align:center;border-radius:5px;margin-left:1rem;margin-right:1rem;display:inline-block}#nav-drawer{display:none}#page{background-color:var(--sy_grey_A_900)}#region-main,.card{background-color:var(--sy_grey_A_800)}.pagelayout-course .mb-3{border-radius:10px;margin-bottom:0}.mb-3,.my-3{margin-bottom:.6rem!important}.dropdown-menu{background-color:var(--sy_grey_A_regular);color:var(--sy_light)}.dropdown-item{color:var(--sy_light)}.dropdown-item:hover,.dropdown-item:active{background-color:var(--sy_blue_900)}.dropdown-item:focus,.dropdown-item:focus-within{background-color:var(--sy_blue_900)}a.dropdown-toggle:focus{box-shadow:none}.h5p-placeholder{padding:10px;background-color:var(--sy_grey_A_700);box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}.toc1,.toc2{color:var(--sy_light);transition:.3s}.toc1{font-size:1.3em}.toc2{font-size:1em}.toc1:hover{text-decoration:none;color:var(--sy_aipa_blue)}.toc2:hover{text-decoration:none;color:var(--sy_aipa_purple)}.toc1:active,.toc2:active{text-decoration:none;animation:clickFadeOutIn .5s linear 1 forwards}.block .block-controls .dropdown-toggle{color:var(--sy_light)}.p-b-2{display:none}.nav-tabs{border-bottom:0 solid var(--sy_light);border-top:0 solid var(--sy_light);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:3px;border-radius:10px;margin-bottom:0}.nav-tabs .nav-link{border:0 solid transparent;transition:.3s}.tab_level_0,.tab_level_1{background-color:transparent;color:var(--sy_light);transition:.3s}@media (max-width:700px){.tab_level_0,.tab_level_1{padding:2rem;background-color:var(--sy_grey_A_regular);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);border-radius:5px}}.nav-link:not(.active):hover .tab_level_0{color:var(--sy_aipa_blue)}.nav-link:not(.active):hover .tab_level_1{color:var(--sy_aipa_green)}.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1,.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1{color:var(--sy_purple_300);background-color:transparent}@media (max-width:700px){.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1,.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1{background-color:var(--sy_purple_regular);color:var(--sy_light)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:focus .tab_level_0,.nav-tabs .nav-link:focus .tab_level_1{animation:none;opacity:.5}}.onetopic .nav,.onetopic-subtabs_body .nav{background-color:transparent}.format-onetopic a.nav-link .tab_content{border-top:0 solid transparent}@media (max-width:767.98px){.nav-tabs .nav-link{background-color:transparent}.nav-tabs .nav-link.active:not(:disabled):not(.disabled).active{color:transparent;background-color:transparent;border:0 solid transparent}.sub-page-header{display:block}.avatars{display:inline-block}}';

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

function createStyle() {
  const styleElement = document.createElement("style");
  styleElement.appendChild(document.createTextNode(cssRules));
  document.getElementsByTagName("head")[0].appendChild(styleElement);
}

function createBrand(logoUrl) {
  const brand = document.getElementsByClassName("navbar-brand")[0];
  brand.innerHTML = "";

  const brand_img = document.createElement("img");
  brand_img.src = logoUrl;

  brand.appendChild(brand_img);
}

function createBanner(bannerUrl) {
  const banner = document.createElement("div");
  banner.classList.add("course-banner-image-container");

  const banner_image = document.createElement("img");
  banner_image.src = bannerUrl;
  banner_image.classList.add("course-banner-image");

  banner.appendChild(banner_image);

  const wrapper = document.getElementById("page-wrapper");
  wrapper.insertBefore(banner, wrapper.firstChild);
}

function changeFavicon(faviconUrl) {
  const link = document.querySelector("link[rel~='icon']");
  link.href = faviconUrl;
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

function initializeSidebar(menuIconUrl, closeMenuIconUrl) {
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
    menuIcon.classList.add("sidemenu-icon");
    menuIcon.id = "sidebar-menu-icon";
    menuIcon.src = menuIconUrl;

    const closeMenuIcon = document.createElement("img");
    closeMenuIcon.classList.add("sidemenu-icon", "icon-hidden");
    closeMenuIcon.id = "sidebar-close-menu-icon";
    closeMenuIcon.src = closeMenuIconUrl;

    sidebarBtn.appendChild(menuIcon);
    sidebarBtn.appendChild(closeMenuIcon);
    body.appendChild(sidebarBtn);

    initialSidebarPosition();
  }
}

document.getElementById("page-course-view-onetopic").style.display = "none";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("page-course-view-onetopic").style.display = "block";
});

createStyle();
createBrand(brandiLogoOsoite);
createBanner(banneriOsoite);
changeFavicon(faviconOsoite);
createCourseSubheader();
initializeSidebar(menuPainikeOsoite, suljeMenuPainikeOsoite);
