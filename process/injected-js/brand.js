const brandRules =
  ".navbar .site-logo{content:url(https://raw.githubusercontent.com/syvkst/eOppiva/main/brand_logo.png);transition:.3s}.navbar .site-logo:hover{opacity:.5}.navbar-brand{transition:.3s;display:inline!important}.navbar-brand:hover{opacity:.6}.navbar-brand:focus{outline:0;background-color:transparent;box-shadow:none;-webkit-box-shadow:none}";

function initializeBrand(logoUrl, logoLightUrl, faviconUrl) {
  const brand = document.getElementsByClassName("navbar-brand")[0];
  brand.innerHTML = "";

  const brandImg = document.createElement("img");
  brandImg.classList.add("themed");
  brandImg.src = logoUrl;
  brandImg.dataset.light = logoLightUrl;
  brandImg.dataset.dark = logoUrl;

  brand.appendChild(brandImg);

  const link = document.querySelector("link[rel~='icon']");
  link.href = faviconUrl;
}

insertStyle(brandRules);
initializeBrand(logo, logoVaalea, favicon);
