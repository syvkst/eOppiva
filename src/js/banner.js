const bannerRules =
  "# inject:../../process/min-styles/banner.min.css -> <- end #";

function initializeBanner(bannerUrl) {
  const banner = document.createElement("div");
  banner.classList.add("course-banner-image-container");

  const banner_image = document.createElement("img");
  banner_image.src = bannerUrl;
  banner_image.classList.add("course-banner-image");

  banner.appendChild(banner_image);

  const wrapper = document.getElementById("page-wrapper");
  wrapper.insertBefore(banner, wrapper.firstChild);
}

insertStyle(bannerRules);
initializeBanner(banneri);
