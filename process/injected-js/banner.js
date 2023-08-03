const bannerRules =
  ".course-banner-image-container{position:relative;width:100%;height:20vw;border-radius:0;margin-bottom:-120px;margin-top:51px;background-color:transparent;background-position:top;flex:1 1 auto;display:flex;box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}.course-banner-image{width:100%;border-radius:0}";

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
