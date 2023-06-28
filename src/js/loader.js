const loaderRules =
  "# inject:../../process/min-styles/loader.min.css -> <- end #";

function initializeLoader() {
  const loading = document.createElement("div");
  loading.classList.add("wave-box");
  loading.id = "sy-loading";
  for (i = 0; i < 10; i++) {
    const wave = document.createElement("div");
    wave.classList.add("wave");
    loading.appendChild(wave);
  }

  document.body.appendChild(loading);

  document.addEventListener("click", (e) => {
    const origin = e.target.closest(
      ".nav-link, .toc1, .toc2, .section-navigation"
    );

    if (origin) {
      document.getElementById("sy-loading").classList.add("sy-loading-open");
    }
  });
}

insertStyle(loaderRules);
initializeLoader();
