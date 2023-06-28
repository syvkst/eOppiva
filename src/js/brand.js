const brandRules =
  "# inject:../../process/min-styles/brand.min.css -> <- end #";

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
