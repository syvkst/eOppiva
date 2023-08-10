const cssRules =
  "@import url(https://fonts.googleapis.com/css2?family=Bitter:wght@700;900&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&family=Open+Sans&display=swap);:root{--sy_purple_200:#c299cd;--sy_purple_300:#a970b9;--sy_purple_400:#9651aa;--sy_purple_regular:#84329b;--sy_purple_600:#7c2d93;--sy_purple_700:#712689;--sy_purple_800:#671f7f;--sy_purple_900:#54136d;--sy_red_200:#e787b4;--sy_red_300:#dd5796;--sy_red_400:#d53380;--sy_red_regular:#ce0f69;--sy_red_600:#c90d61;--sy_red_700:#c20b56;--sy_red_800:#bc084c;--sy_red_900:#b0043b;--sy_red_hover:rgba(206, 15, 105, 0.5);--sy_blue_200:#b8e2f4;--sy_blue_300:#9cd6ef;--sy_blue_400:#86ceeb;--sy_blue_regular:#71c5e8;--sy_blue_600:#69bfe5;--sy_blue_700:#5eb8e2;--sy_blue_800:#54b0de;--sy_blue_900:#42a3d8;--sy_orange_200:#ffcf8d;--sy_orange_300:#ffbb5f;--sy_orange_400:#ffad3d;--sy_orange_regular:#ff9e1b;--sy_orange_600:#ff9618;--sy_orange_700:#ff8c14;--sy_orange_800:#ff8210;--sy_orange_900:#ff7008;--sy_grey_A_200:#96979a;--sy_grey_A_300:#6b6d72;--sy_grey_A_400:#4c4d53;--sy_grey_A_regular:#2c2e35;--sy_grey_A_600:#272930;--sy_grey_A_700:#212328;--sy_grey_A_800:#1b1d22;--sy_grey_A_900:#101216;--sy_shadow_light:rgba(222, 226, 230, 0.1);--sy_aipa_blue:#19add8;--sy_aipa_purple:#9b7aba;--sy_aipa_green:#8dc63f;--sy_aipa_yellow:#dfd400;--sy_level_1_hover:var(--sy_blue_900);--sy_level_2_hover:var(--sy_orange_regular);--sy_heading_font:'IBM Plex Sans',sans-serif;--sy_paragraph_font:'Open Sans',sans-serif;--sy_quote_font:'Open Sans',sans-serif;--sy_heading_weight:700;--sy_hover_shadow_1:rgba(0, 0, 0, 0.19);--sy_hover_shadow_2:rgba(0, 0, 0, 0.23);--sy_hover_shadow_1_x:0px;--sy_hover_shadow_1_y:10px;--sy_hover_shadow_1_blur:20px;--sy_hover_shadow_1_spread:0px;--sy_hover_shadow_1_color:var(--sy_hover_shadow_1);--sy_hover_shadow_2_x:0px;--sy_hover_shadow_2_y:6px;--sy_hover_shadow_2_blur:6px;--sy_hover_shadow_2_spread:0px;--sy_hover_shadow_2_color:var(--sy_hover_shadow_2)}[data-sytheme=dark]{--sy_light:#dee2e6;--sy_light_darker:#c8cbcf;--sy_font_color:var(--sy_light);--sy_quote_color:var(--sy_light_darker);--sy_level_0:var(--sy_grey_A_900);--sy_level_1:var(--sy_grey_A_800);--sy_level_2:var(--sy_grey_A_700);--sy_level_3:var(--sy_grey_A_600);--sy_level_4:var(--sy_grey_A_regular);--sy_level_5:var(--sy_grey_A_400);--sy_level_6:var(--sy_grey_A_300);--sy_level_7:var(--sy_grey_A_200);--sy_shadow_1:rgba(0, 0, 0, 0.16);--sy_shadow_2:rgba(0, 0, 0, 0.23);--sy_shadow_1_x:0px;--sy_shadow_1_y:3px;--sy_shadow_1_blur:6px;--sy_shadow_1_spread:0px;--sy_shadow_1_color:var(--sy_shadow_1);--sy_shadow_2_x:0px;--sy_shadow_2_y:3px;--sy_shadow_2_blur:6px;--sy_shadow_2_spread:0px;--sy_shadow_2_color:var(--sy_shadow_2);--sy_sidemenu_hover:var(--sy_level_5);--sy_page_header_bg:var(--sy_level_2);--sy_page_header_fg:var(--sy_font_color);--sy_page_subheader_bg:var(--sy_level_1);--sy_page_subheader_fg:var(--sy_font_color);--sy_element_hover:var(--sy_red_regular);--sy_element_hover_text:var(--sy_font_color);--sy_tablerow_even_bg:var(--sy_level_2);--sy_table_checkmark_color:#8dc63f;--sy_nav_tabs_bg:var(--sy_level_1);--sy_nav_selected:var(--sy_purple_300);--sy_nav_selected_bg:var(--sy_level_3);--sy_nav_hover_level_0:var(--sy_blue_regular);--sy_nav_hover_level_1:var(--sy_orange_300);--sy_nav_overlay_index_level_1_bg:var(--sy_level_3);--sy_nav_overlay_index_level_2_bg:var(--sy_level_2);--sy_nav_overlay_index_text:var(--sy_font_color)}[data-sytheme=light]{--sy_light:#fff;--sy_light_darker:#c8cbcf;--sy_font_color:var(--sy_grey_A_800);--sy_quote_color:var(--sy_grey_A_700);--sy_level_0:var(--sy_light);--sy_level_1:var(--sy_light);--sy_level_2:var(--sy_light);--sy_level_3:var(--sy_light);--sy_level_4:var(--sy_light);--sy_level_5:var(--sy_light);--sy_level_6:var(--sy_light);--sy_level_7:var(--sy_light);--sy_shadow_1:rgba(0, 0, 0, 0.12);--sy_shadow_2:rgba(0, 0, 0, 0.24);--sy_shadow_1_x:0px;--sy_shadow_1_y:1px;--sy_shadow_1_blur:3px;--sy_shadow_1_spread:0px;--sy_shadow_1_color:var(--sy_shadow_1);--sy_shadow_2_x:0px;--sy_shadow_2_y:1px;--sy_shadow_2_blur:2px;--sy_shadow_2_spread:0px;--sy_shadow_2_color:var(--sy_shadow_2);--sy_sidemenu_hover:var(--sy_light_darker);--sy_page_header_bg:var(--sy_grey_A_regular);--sy_page_header_fg:var(--sy_light);--sy_page_subheader_bg:var(--sy_grey_A_600);--sy_page_subheader_fg:var(--sy_light);--sy_element_hover:var(--sy_purple_regular);--sy_element_hover_text:var(--sy_light);--sy_tablerow_even_bg:var(--sy_light_darker);--sy_table_checkmark_color:#308044;--sy_nav_tabs_bg:transparent;--sy_nav_selected:var(--sy_purple_regular);--sy_nav_selected_bg:var(--sy_grey_A_600);--sy_nav_hover_level_0:var(--sy_blue_900);--sy_nav_hover_level_1:var(--sy_orange_900);--sy_nav_overlay_index_level_1_bg:var(--sy_purple_regular);--sy_nav_overlay_index_level_2_bg:var(--sy_purple_700);--sy_nav_overlay_index_text:var(--sy_light)}@keyframes clickFadeOutIn{0%{opacity:1}50%{opacity:.5}100%{opacity:1}}body{margin-left:0;color:var(--sy_font_color);background-color:var(--sy_level_0)}p{color:var(--sy_font_color);font-family:var(--sy_paragraph_font)}a{color:var(--sy_font_color);font-family:var(--sy_paragraph_font);transition:.3s}a:hover{color:var(--sy_blue_regular);text-decoration:none}a:active{text-decoration:none;color:var(--sy_purple_900)}a:not([class]){color:var(--sy_red_regular);background-color:transparent;cursor:pointer;outline:0;width:fit-content;border:none;transition:.3s}a:not([class]):active,a:not([class]):hover{text-decoration:none;border:none;background-color:transparent;outline:0;color:var(--sy_font_color)}a:not([class]):focus{text-decoration:none;border:none;background-color:transparent;outline:0;color:var(--sy_font_color);box-shadow:none}h1,h2,h3,h4,h5,h6{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);margin-top:1rem;margin-bottom:1rem}hr{background-color:var(--sy_font_color)}blockquote{margin:1em 2rem 1em 2rem;padding:.5em 1em;color:var(--sy_font_color);background:linear-gradient(.25turn,var(--sy_level_1),var(--sy_level_3) 2%,var(--sy_level_3) 98%,var(--sy_level_1));font-family:var(--sy_heading_font);font-style:italic;font-weight:500;border-left:2px solid var(--sy_blue_regular);border-right:2px solid var(--sy_blue_regular);border-radius:5px;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}img{border-radius:10px;overflow:hidden}iframe{margin-bottom:-5px;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}#region-main img.img-responsive,#region-main img:not([class]){width:98%!important;margin-left:auto;margin-right:auto;display:block;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);background-color:var(--sy_level_2)}@media (min-width:767.98px){#region-main img.img-responsive,#region-main img:not([class]){max-width:90%}}.mediaplugin{border-radius:10px;overflow:hidden}#region-main .mediaplugin{max-width:90%;margin-left:auto;margin-right:auto;margin-bottom:1rem;border-radius:10px;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);background-color:var(--sy_level_2)}#region-main .h5p-placeholder{max-width:90%;margin-left:auto;margin-right:auto;margin-bottom:1rem}#page{background-color:var(--sy_level_0)}#page-navbar{display:none}#page-header .card{background-color:transparent;border:none}#page-footer{display:none}.btn-icon{color:var(--sy_font_color)}.page-header-headings{display:flex;flex-wrap:wrap;align-items:center;margin-top:1rem;margin-bottom:1rem}@media (min-width:767.98px){.page-header-headings{margin-top:.5rem}}.pagelayout-course #page-header h1{padding:1rem 1.5rem}.pagelayout-course #page-header h1,.pagelayout-incourse #page-header h1{background-color:var(--sy_page_header_bg);color:var(--sy_page_header_fg);border-radius:5px;width:100%;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;text-align:center;display:block;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}@media (min-width:767.98px){.pagelayout-course #page-header h1,.pagelayout-incourse #page-header h1{margin-left:10px;margin-right:2rem;width:fit-content}}.sub-page-header-main{flex:1 0 fit-content;background-color:var(--sy_page_subheader_bg);color:var(--sy_page_subheader_fg);padding:1rem 1.5rem;text-align:center;border-radius:5px;margin-top:.5rem;margin-bottom:0;display:inline-block;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}@media (min-width:767.98px){.sub-page-header-main{width:fit-content;display:inline-block;margin-top:0}}.sub-page-header-separator{justify-self:center;color:var(--sy_font_color);padding:1rem 0;font-size:1.5rem;text-align:center;margin-left:1rem;margin-right:1rem;display:inline-block;margin-top:.5rem;margin-bottom:0}.sub-page-header-sub{justify-self:center;background-color:var(--sy_page_subheader_bg);color:var(--sy_page_subheader_fg);padding:.8rem 1.25rem;font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);text-align:center;border-radius:5px;margin-top:.5rem;margin-bottom:0;display:block;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}@media (min-width:767.98px){.sub-page-header-separator{margin-top:0}.sub-page-header-sub{margin-top:0}}.pagelayout-course .mb-3{border-radius:10px;margin-bottom:0}.mb-3,.my-3{margin-bottom:.6rem!important}.navbar.navbar.fixed-top .divider{background-color:var(--sy_font_color)}.divider.border-left{border-left:1 px solid var(--sy_font_color)!important}#nav-notification-popover-container{display:none}[data-region=popover-region-messages]{display:none}nav ul li a[href='https://eoppiva.fi/ ']{display:none}nav ul li a[href='https://lms.eoppiva.fi/?redirect=0']{display:none}.avatars{display:none}@media (max-width:767.98px){.avatars{display:inline-block}}.navbar.fixed-top{background-color:var(--sy_level_1);box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);border-bottom:none}.nav-link:focus{box-shadow:none}.nav-link:focus,.nav-link:focus .tab_level_0,.nav-link:focus .tab_level_1{animation:clickFadeOutIn .5s linear 1 forwards}.navbar .navbar-nav .nav-link{color:var(--sy_font_color)!important;text-transform:uppercase;letter-spacing:.1rem;font-weight:600;transition:.3s;font-family:var(--sy_paragraph_font);padding:.5rem}.navbar .navbar-nav .nav-link:hover{color:var(--sy_blue_900)!important}.navbar .navbar-settings-icon .dropdown-toggle>.icon{color:var(--sy_font_color)}.activity-add{background-color:var(--sy_level_3);border-color:transparent;transition:.3s;justify-content:center;color:var(--sy_font_color)}.activity-add:hover{background-color:var(--sy_level_4);color:var(--sy_red_regular)}.activity-add:focus{box-shadow:none}.activity-add .pluscontainer{border:none}.activity-add-text:hover{text-decoration:none!important}.activity-add-text:focus{text-decoration:none!important}.btn.btn-icon{transition:.3s}.btn.btn-icon:focus,.btn.btn-icon:hover{background-color:var(--sy_blue_regular)}.modal-content{background-color:var(--sy_level_1)}.modal-header .close{color:var(--sy_font_color);text-shadow:none;opacity:1;transition:.3s}.modal-header .close:hover{color:var(--sy_blue_regular)}.modal-header .close:focus{box-shadow:none}.chooser-container .tab-content{background-color:transparent!important;border:none!important}.optionscontainer .option{background-color:var(--sy_level_2)!important}.modchoosercontainer .optionscontainer .option .optioninfo a{color:var(--sy_font_color)}.searchresultitemscontainer-wrapper{border:none!important;background-color:transparent!important}.searchresultitemscontainer .option{background-color:var(--sy_level_2)!important}.modchoosercontainer .searchresultitemscontainer .option .optioninfo a{color:var(--sy_font_color)}.searchbar .form-control{transition:.3s;background-color:var(--sy_level_0)}.searchbar .form-control:focus{background-color:var(--sy_level_1);color:var(--sy_font_color);border:none;box-shadow:0 0 0 .1rem var(--sy_purple_regular)}.columnright{display:none}#page-content .card{box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}#region-main,.card{background-color:var(--sy_level_1)}#region-main{padding-bottom:1rem}.region-main-content{box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);border-radius:10px!important}.p-b-2{display:none}#action-menu-toggle-7{color:var(--sy_font_color);transition:.3s}#action-menu-toggle-7:hover{background-color:var(--sy_level_5)}.dropdown-menu{background-color:var(--sy_level_4);color:var(--sy_font_color)}.dropdown-item{color:var(--sy_font_color)}.dropdown-item:active,.dropdown-item:hover{background-color:var(--sy_blue_900)}.dropdown-item:focus,.dropdown-item:focus-within{background-color:var(--sy_blue_900)}a.dropdown-toggle:focus{box-shadow:none}.block .block-controls .dropdown-toggle{color:var(--sy_font_color)}.toc1,.toc2{color:var(--sy_font_color);transition:.3s}.toc1{font-size:1.3em}.toc2{font-size:1em}.toc1:hover{text-decoration:none;color:var(--sy_level_1_hover)}.toc2:hover{text-decoration:none;color:var(--sy_level_2_hover)}.toc1:active,.toc2:active{text-decoration:none;animation:clickFadeOutIn .5s linear 1 forwards}@media (max-width:700px){.tab_level_0,.tab_level_1{padding:.1rem;background-color:var(--sy_level_4);box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color);border-radius:5px;margin:5px}.nav-pills,.nav-tabs:not(.more-nav){border:none;background:0 0}.nav-pills .nav-link,.nav-tabs:not(.more-nav) .nav-link{background:0 0}.nav-tabs:not(.more-nav) .nav-link.active:not(:disabled):not(.disabled).active{background-color:transparent;border-color:transparent;color:var(--sy_nav_selected)}}@media (max-width:700px){.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1{background-color:var(--sy_nav_selected);color:var(--sy_font_color)}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:focus .tab_level_0,.nav-tabs .nav-link:focus .tab_level_1{animation:none;opacity:.5}}@media (max-width:767.98px){.nav-tabs .nav-link{background-color:transparent}.nav-tabs .nav-link.active:not(:disabled):not(.disabled).active{color:transparent;background-color:transparent;border:0 solid transparent}}.mdl-bottom .mdl-left a,.mdl-bottom .mdl-right a{background-color:var(--sy_level_4);color:var(--sy_font_color);cursor:pointer;padding:.5rem;margin:.5rem 2rem;text-align:left;outline:0;width:fit-content;border:1px solid var(--sy_level_4);border-radius:1rem;transition:all .3s}.mdl-bottom .mdl-left a:active,.mdl-bottom .mdl-left a:hover,.mdl-bottom .mdl-right a:active,.mdl-bottom .mdl-right a:hover{border:1px solid var(--sy_level_4);background-color:transparent;outline:0;color:var(--sy_blue_regular)}.mdl-bottom .mdl-left a:focus,.mdl-bottom .mdl-right a:focus{border:1px solid var(--sy_level_4);outline:0}.course-content .single-section .section-navigation{padding-bottom:2em}#course_format_onetopic_config_movesection{margin-top:1rem;margin-left:2rem}.noscroll{overflow:auto}@media (max-width:1375px){.noscroll{overflow:hidden}}.h5p-placeholder{background-color:var(--sy_level_2);border-radius:10px;overflow:hidden;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}.dramatic-fade-in{animation-name:dramatic-fade-in;animation-duration:45;animation-delay:2s}@keyframes dramatic-fade-in{from{opacity:0}to{opacity:1}}button#mmhelp-btn{display:none}body.scrolled #goto-top-link{visibility:hidden}@media (min-width:767.98px){::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:var(--sy_level_1)}::-webkit-scrollbar{width:12px;background-color:var(--sy_level_1)}::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:var(--sy_blue_regular)}}body::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:var(--sy_level_1)}body::-webkit-scrollbar{width:12px;background-color:var(--sy_level_1)}body::-webkit-scrollbar-thumb{border-radius:5px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:var(--sy_purple_regular)}.block a img{transition:all .3s ease}.block a img:hover{transform:scale(1.05)}.theme-container{height:50px;width:100px;margin-left:0;margin-right:auto}.theme-toggle{position:relative;width:100px}.theme-toggle label{position:absolute;width:100%;height:50px;background-color:var(--sy_grey_A_600);border-radius:25px;cursor:pointer}.theme-toggle label input{position:absolute;display:none}.slider{position:absolute;width:100%;height:100%;border-radius:25px;transition:.3s;background-color:var(--sy_grey_A_600)}input:checked~.slider{background-color:var(--sy_light_darker)}.slider::before{content:'';position:absolute;top:6px;left:8px;width:37px;height:37px;border-radius:50%;box-shadow:inset 14px -2px 0 0 var(--sy_light_darker);background-color:var(--sy_grey_A_600);transition:.3s}input:checked~.slider::before{transform:translateX(48px);background-color:var(--sy_grey_A_600);box-shadow:none}";

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
