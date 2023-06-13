var cssRules =
  "body{margin-left:0;background-color:#dee2e6}.navbar{background-color:#333142}.navbar #course-icon{display:block}.navbar .navbar-nav .nav-link{color:#dee2e6!important}.navbar .navbar-nav .nav-link:hover{color:#19add8!important}#nav-drawer{display:none}#page{background-color:#1e1e1e}#region-main,.card{background-color:#252526}.pagelayout-course .mb-3{border-radius:10px;margin-bottom:0}.mb-3,.my-3{margin-bottom:.6rem!important}.h5p-placeholder{padding:10px;background-color:#333142;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}a,p{color:#dee2e6}hr{background-color:#dee2e6}.block .block-controls .dropdown-toggle{color:#dee2e6}.p-b-2{display:none}.nav-tabs{border-bottom:0 solid #dee2e6;border-top:0 solid #dee2e6;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);padding-left:10px;padding-right:10px;padding-top:5px;padding-bottom:3px;border-radius:10px;margin-bottom:0}.nav-tabs .nav-link{border:0 solid transparent;transition:.3s}.tab_level_0,.tab_level_1{background-color:transparent;color:#dee2e6;transition:.3s}.nav-link:not(.active):hover .tab_level_0{color:#19add8}.nav-link:not(.active):hover .tab_level_1{color:#8dc63f}.nav-tabs .nav-item.show .nav-link .tab_level_0,.nav-tabs .nav-item.show .nav-link .tab_level_1,.nav-tabs .nav-link.active,.nav-tabs .nav-link.active .tab_level_0,.nav-tabs .nav-link.active .tab_level_1{color:#9b7aba;background-color:transparent}.onetopic .nav,.onetopic-subtabs_body .nav{background-color:transparent}.format-onetopic a.nav-link .tab_content{border-top:0 solid transparent}";

var styleElement = document.createElement("style");
styleElement.appendChild(document.createTextNode(cssRules));
document.getElementsByTagName("head")[0].appendChild(styleElement);