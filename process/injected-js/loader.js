const loaderRules =
  "@keyframes wave{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}.wave-box{position:fixed;width:100%;height:100%;left:-100%;top:0;right:0;bottom:0;background-color:var(--sy_level_1);z-index:10;transition:opacity .3s,left 1ms;-webkit-transition:opacity .3s,left 1ms;opacity:0;display:flex;justify-content:center;align-items:center}.wave{width:5px;height:100px;background:linear-gradient(45deg,var(--sy_purple_800),var(--sy_font_color));margin:10px;animation:wave 1s linear infinite;border-radius:20px}.wave:nth-child(2){animation-delay:.1s}.wave:nth-child(3){animation-delay:.2s}.wave:nth-child(4){animation-delay:.3s}.wave:nth-child(5){animation-delay:.4s}.wave:nth-child(6){animation-delay:.5s}.wave:nth-child(7){animation-delay:.6s}.wave:nth-child(8){animation-delay:.7s}.wave:nth-child(9){animation-delay:.8s}.wave:nth-child(10){animation-delay:.9s}.sy-loading-open{left:0;opacity:1}";

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
      ".nav-link:not(.dropdown-toggle):not(.chooser-container *):not(.active), .toc1, .toc2, .section-navigation:not(.dropdown-toggle)"
    );

    if (origin) {
      document.getElementById("sy-loading").classList.add("sy-loading-open");
    }
  });
}

insertStyle(loaderRules);
initializeLoader();
