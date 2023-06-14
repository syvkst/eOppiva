var cssRules =
  '@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@900&family=Open+Sans&display=swap");:root{--sy_dark_purple:#333142;--sy_dark_1:#1e1e1e;--sy_dark_2:#252526;--sy_dark_3:#2d2d30;--sy_dark_4:#3e3e42;--sy_light:#dee2e6;--sy_aipa_blue:#19add8;--sy_aipa_purple:#9b7aba;--sy_aipa_green:#8dc63f;--sy_aipa_yellow:#dfd400;--sy_shadow_1:rgba(0,0,0,.2);--sy_shadow_2:rgba(0,0,0,.19)}body{margin-left:0;color:var(--sy_light)}p,a{color:var(--sy_light);font-family:"Open Sans",sans-serif}a{transition:.3s}a:hover{color:var(--sy_aipa_yellow)}a:active{text-decoration:none;color:var(--sy_dark_purple)}h1,h2,h3,h4,h5,h6{font-family:"Bitter",serif;font-weight:900;margin-top:1rem;margin-bottom:1rem}hr{background-color:var(--sy_light)}.nav-link:focus{box-shadow:none}.navbar{background-color:var(--sy_dark_1);box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2);padding:2.5rem 1rem;max-height:80}#page-navbar{display:none}#page-header .card{background-color:transparent;border:0 solid transparent}#page-header .card .flex-wrap{display:none!important}.pagelayout-course #page-header h1{padding:1rem 1.5rem}.navbar .site-logo{content:url("https://raw.githubusercontent.com/syvkst/eOppiva/main/brand_logo.png");transition:.3s}.navbar .site-logo:hover{opacity:.5}.navbar .navbar-nav .nav-link{color:var(--sy_light)!important;text-transform:uppercase;transition:.3s;font-family:"Open Sans",sans-serif;padding:.5rem}.navbar .navbar-nav .nav-link:hover{color:var(--sy_aipa_blue)!important}.navbar .navbar-settings-icon .dropdown-toggle>.icon{color:var(--sy_light)}.course-banner-image{position:relative;width:100%;height:20vw;min-height:350px;margin-bottom:-120px;margin-top:80px;background-color:transparent;background-position:top;flex:1 0 auto;display:flex;box-shadow:0 2px 4px 0 rgba(0,0,0,.1)}.pagelayout-course #page-header h1,.pagelayout-incourse #page-header h1{background-color:var(--sy_dark_3);color:var(--sy_light)}#nav-drawer{display:none}#page{background-color:var(--sy_dark_1)}#region-main,.card{background-color:var(--sy_dark_2)}.pagelayout-course .mb-3{border-radius:10px;margin-bottom:0}.mb-3,.my-3{margin-bottom:.6rem!important}.dropdown-menu{background-color:var(--sy_dark_4);color:var(--sy_light)}.dropdown-item{color:var(--sy_light)}.dropdown-item:hover,.dropdown-item:active{background-color:var(--sy_dark_purple)}.dropdown-item:focus,.dropdown-item:focus-within{background-color:transparent}.h5p-placeholder{padding:10px;background-color:var(--sy_dark_3);box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}.toc1,.toc2{color:var(--sy_light);transition:.3s}.toc1:hover{text-decoration:none;color:var(--sy_aipa_blue)}.toc2:hover{text-decoration:none;color:var(--sy_aipa_purple)}.toc1:active,.toc2:active{text-decoration:none}.block .block-controls .dropdown-toggle{color:var(--sy_light)}.p-b-2{display:none}.nav-tabs{border-bottom:0 solid var(--sy_light);border-top:0 solid var(--sy_light);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:3px;border-radius:10px;margin-bottom:0}.nav-tabs .nav-link{border:0 solid transparent;transition:.3s}.tab_level_0,.tab_level_1{background-color:transparent;color:var(--sy_light);transition:.3s}.nav-link:not(.active):hover .tab_level_0{color:var(--sy_aipa_blue)}.nav-link:not(.active):hover .tab_level_1{color:var(--sy_aipa_green)}.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1,.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1{color:var(--sy_aipa_purple);background-color:transparent}.onetopic .nav,.onetopic-subtabs_body .nav{background-color:transparent}.format-onetopic a.nav-link .tab_content{border-top:0 solid transparent}';

document.getElementById("page-course-view-onetopic").style.display = "none";

window.addEventListener("DOMContentLoaded", function () {
  document.getElementById("page-course-view-onetopic").style.display = "block";
});

var styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(cssRules));
document.getElementsByTagName("head")[0].appendChild(styleElement);

const brand = document.getElementsByClassName("navbar-brand")[0];
brand.innerHTML = "";
const brand_img = document.createElement("img");
brand_img.src =
  "https://raw.githubusercontent.com/syvkst/eOppiva/main/brand_logo.png";
brand.appendChild(brand_img);

const banner = document.createElement("div");
banner.classList.add("course-banner-image");
banner.style.backgroundImage =
  "url('https://lms.eoppiva.fi/pluginfile.php/168178/theme_maisteriboost/courseimg//0/banner.png')";
banner.style.backgroundRepeat = "no-repeat";
banner.style.backgroundSize = "cover";

const wrapper = document.getElementById("page-wrapper");
wrapper.insertBefore(banner, wrapper.firstChild);
