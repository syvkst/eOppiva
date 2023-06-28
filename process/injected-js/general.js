const cssRules =
  "@import url(https://fonts.googleapis.com/css2?family=Bitter:wght@700;900&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Open+Sans&display=swap);:root{--sy_purple_200:#c299cd;--sy_purple_300:#a970b9;--sy_purple_400:#9651aa;--sy_purple_regular:#84329b;--sy_purple_600:#7c2d93;--sy_purple_700:#712689;--sy_purple_800:#671f7f;--sy_purple_900:#54136d;--sy_red_200:#e787b4;--sy_red_300:#dd5796;--sy_red_400:#d53380;--sy_red_regular:#ce0f69;--sy_red_600:#c90d61;--sy_red_700:#c20b56;--sy_red_800:#bc084c;--sy_red_900:#b0043b;--sy_blue_200:#b8e2f4;--sy_blue_300:#9cd6ef;--sy_blue_400:#86ceeb;--sy_blue_regular:#71c5e8;--sy_blue_600:#69bfe5;--sy_blue_700:#5eb8e2;--sy_blue_800:#54b0de;--sy_blue_900:#42a3d8;--sy_orange_200:#ffcf8d;--sy_orange_300:#ffbb5f;--sy_orange_400:#ffad3d;--sy_orange_regular:#ff9e1b;--sy_orange_600:#ff9618;--sy_orange_700:#ff8c14;--sy_orange_800:#ff8210;--sy_orange_900:#ff7008;--sy_grey_A_200:#96979a;--sy_grey_A_300:#6b6d72;--sy_grey_A_400:#4c4d53;--sy_grey_A_regular:#2c2e35;--sy_grey_A_600:#272930;--sy_grey_A_700:#212328;--sy_grey_A_800:#1b1d22;--sy_grey_A_900:#101216;--sy_light:#dee2e6;--sy_light_darker:rgba(222, 226, 230, 0.8);--sy_shadow_1:rgba(0, 0, 0, 0.2);--sy_shadow_2:rgba(0, 0, 0, 0.19);--sy_shadow_light:rgba(222, 226, 230, 0.1);--sy_aipa_blue:#19add8;--sy_aipa_purple:#9b7aba;--sy_aipa_green:#8dc63f;--sy_aipa_yellow:#dfd400;--sy_level_0:var(--sy_grey_A_900);--sy_level_1:var(--sy_grey_A_800);--sy_level_2:var(--sy_grey_A_700);--sy_level_3:var(--sy_grey_A_600);--sy_level_4:var(--sy_grey_A_regular);--sy_level_5:var(--sy_grey_A_400);--sy_level_6:var(--sy_grey_A_300);--sy_level_7:var(--sy_grey_A_200);--sy_level_1_hover:var(--sy_blue_900);--sy_level_2_hover:var(--sy_orange_regular);--sy_heading_font:'IBM Plex Sans',sans-serif;--sy_paragraph_font:'Open Sans',sans-serif;--sy_quote_font:'Open Sans',sans-serif;--sy_heading_weight:700;--sy_font_color:var(--sy_light);--sy_quote_color:var(--sy__light_darker)}@keyframes clickFadeOutIn{0%{opacity:1}50%{opacity:.5}100%{opacity:1}}body{margin-left:0;color:var(--sy_font_color);background-color:var(--sy_level_0)}p{color:var(--sy_font_color);font-family:var(--sy_paragraph_font)}a{color:var(--sy_font_color);font-family:var(--sy_paragraph_font);transition:.3s}a:hover{color:var(--sy_blue_regular);text-decoration:none}a:active{text-decoration:none;color:var(--sy_purple_900)}a:not([class]){color:var(--sy_red_regular);background-color:transparent;cursor:pointer;outline:0;width:fit-content;border:none;transition:.3s}a:not([class]):active,a:not([class]):hover{text-decoration:none;border:none;background-color:transparent;outline:0;color:var(--sy_font_color)}a:not([class]):focus{text-decoration:none;border:none;background-color:transparent;outline:0;color:var(--sy_font_color);box-shadow:none}h1,h2,h3,h4,h5,h6{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);margin-top:1rem;margin-bottom:1rem}hr{background-color:var(--sy_font_color)}blockquote{margin:1em 2rem 1em 2rem;padding:.5em 1em;color:var(--sy_font_color);background:linear-gradient(.25turn,var(--sy_level_1),var(--sy_level_3) 2%,var(--sy_level_3) 98%,var(--sy_level_1));font-family:var(--sy_heading_font);font-style:italic;font-weight:500;border-left:2px solid var(--sy_blue_regular);border-right:2px solid var(--sy_blue_regular);border-radius:5px;box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}#page{background-color:var(--sy_level_0)}#page-navbar{display:none}#page-header .card{background-color:transparent;border:none}#page-header .card .flex-wrap{display:none!important}#page-footer{display:none}.pagelayout-course #page-header h1{padding:1rem 1.5rem}.pagelayout-course #page-header h1,.pagelayout-incourse #page-header h1{background-color:var(--sy_grey_A_700);color:var(--sy_light);border-radius:5px;display:inline-block}.sub-page-header{background-color:var(--sy_level_1);color:var(--sy_font_color);padding:1rem 1.5rem;font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);font-size:1.5rem;text-align:center;border-radius:5px;margin-left:1rem;margin-right:1rem;display:inline-block}@media (max-width:767.98px){.sub-page-header{display:block}}.pagelayout-course .mb-3{border-radius:10px;margin-bottom:0}.mb-3,.my-3{margin-bottom:.6rem!important}#nav-notification-popover-container{display:none}[data-region=popover-region-messages]{display:none}nav ul li a[href='https://eoppiva.fi/ ']{display:none}nav ul li a[href='https://lms.eoppiva.fi/?redirect=0']{display:none}.avatars{display:none}@media (max-width:767.98px){.avatars{display:inline-block}}.navbar{background-color:var(--sy_level_1);box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2);padding:2.5rem 1rem}.nav-link:focus{box-shadow:none}.nav-link:focus,.nav-link:focus .tab_level_0,.nav-link:focus .tab_level_1{animation:clickFadeOutIn .5s linear 1 forwards}.navbar .navbar-nav .nav-link{color:var(--sy_font_color)!important;text-transform:uppercase;letter-spacing:.1rem;font-weight:600;transition:.3s;font-family:var(--sy_paragraph_font);padding:.5rem}.navbar .navbar-nav .nav-link:hover{color:var(--sy_blue_900)!important}.navbar .navbar-settings-icon .dropdown-toggle>.icon{color:var(--sy_font_color)}.columnright{display:none}#region-main,.card{background-color:var(--sy_level_1)}#region-main{padding-bottom:1rem}.p-b-2{display:none}.dropdown-menu{background-color:var(--sy_level_4);color:var(--sy_font_color)}.dropdown-item{color:var(--sy_font_color)}.dropdown-item:active,.dropdown-item:hover{background-color:var(--sy_blue_900)}.dropdown-item:focus,.dropdown-item:focus-within{background-color:var(--sy_blue_900)}a.dropdown-toggle:focus{box-shadow:none}.block .block-controls .dropdown-toggle{color:var(--sy_font_color)}.toc1,.toc2{color:var(--sy_font_color);transition:.3s}.toc1{font-size:1.3em}.toc2{font-size:1em}.toc1:hover{text-decoration:none;color:var(--sy_level_1_hover)}.toc2:hover{text-decoration:none;color:var(--sy_level_2_hover)}.toc1:active,.toc2:active{text-decoration:none;animation:clickFadeOutIn .5s linear 1 forwards}.nav-tabs{border-bottom:none;border-top:none;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:3px;border-radius:10px;margin-bottom:0}.nav-tabs .nav-link{border:none;transition:.3s}.tab_level_0,.tab_level_1{background-color:transparent;color:var(--sy_font_color);transition:.3s}@media (max-width:700px){.tab_level_0,.tab_level_1{padding:2rem;background-color:var(--sy_level_4);box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);border-radius:5px}}.nav-link:not(.active):hover .tab_level_0{color:var(--sy_level_1_hover)}.nav-link:not(.active):hover .tab_level_1{color:var(--sy_level_2_hover)}.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1{color:var(--sy_purple_300);background-color:transparent}@media (max-width:700px){.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1{background-color:var(--sy_purple_regular);color:var(--sy_font_color)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:focus .tab_level_0,.nav-tabs .nav-link:focus .tab_level_1{animation:none;opacity:.5}}.onetopic .nav,.onetopic-subtabs_body .nav{background-color:transparent}.format-onetopic a.nav-link .tab_content{border-top:0 solid transparent}@media (max-width:767.98px){.nav-tabs .nav-link{background-color:transparent}.nav-tabs .nav-link.active:not(:disabled):not(.disabled).active{color:transparent;background-color:transparent;border:0 solid transparent}}.mdl-bottom .mdl-left a,.mdl-bottom .mdl-right a{background-color:var(--sy_level_4);color:var(--sy_font_color);cursor:pointer;padding:.5rem;margin:.5rem 2rem;text-align:left;outline:0;width:fit-content;border:1px solid var(--sy_level_4);border-radius:1rem;transition:all .3s}.mdl-bottom .mdl-left a:active,.mdl-bottom .mdl-left a:hover,.mdl-bottom .mdl-right a:active,.mdl-bottom .mdl-right a:hover{border:1px solid var(--sy_level_4);background-color:transparent;outline:0;color:var(--sy_blue_regular)}.mdl-bottom .mdl-left a:focus,.mdl-bottom .mdl-right a:focus{border:1px solid var(--sy_level_4);outline:0}.course-content .single-section .section-navigation{padding-bottom:2em}#course_format_onetopic_config_movesection{margin-top:1rem;margin-left:2rem}.noscroll{overflow:auto}@media (max-width:1375px){.noscroll{overflow:hidden}}.h5p-placeholder{padding:10px;background-color:var(--sy_grey_A_700);box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}.dramatic-fade-in{animation-name:dramatic-fade-in;animation-duration:45;animation-delay:2s}@keyframes dramatic-fade-in{from{opacity:0}to{opacity:1}}button#mmhelp-btn{display:none}body.scrolled #goto-top-link{visibility:hidden}body::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:var(--sy_level_1)}body::-webkit-scrollbar{width:12px;background-color:var(--sy_level_1)}body::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:var(--sy_purple_regular)}.block a img{transition:all .3s ease}.block a img:hover{transform:scale(1.05)}";

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
