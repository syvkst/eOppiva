const brandRules =
  "# inject:../../process/min-styles/brand.min.css -> <- end #";

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
