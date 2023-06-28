const brandRules =
  ".navbar .site-logo{content:url(https://raw.githubusercontent.com/syvkst/eOppiva/main/brand_logo.png);transition:.3s}.navbar .site-logo:hover{opacity:.5}.navbar-brand{transition:.3s;display:inline!important}.navbar-brand:hover{opacity:.6}.navbar-brand:focus{outline:0;background-color:transparent;box-shadow:none;-webkit-box-shadow:none}";

function initializeBrand(logoUrl, faviconUrl) {
  const brand = document.getElementsByClassName("navbar-brand")[0];
  brand.innerHTML = "";

  const brand_img = document.createElement("img");
  brand_img.src = logoUrl;

  brand.appendChild(brand_img);

  const link = document.querySelector("link[rel~='icon']");
  link.href = faviconUrl;
}

insertStyle(brandRules);
initializeBrand(logo, favicon);
