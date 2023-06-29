const comparisonRules =
  ".comparison{position:relative;width:90%;height:500px;border-radius:10px;box-shadow:0 4px 8px 0 var(--sy_shadow_1),0 6px 20px 0 var(--sy_shadow_2)}.comparison-container{position:absolute;width:100%;overflow:hidden}.comparison-container img,.comparison-object{display:block}.comparison-slider{position:absolute;z-index:9;cursor:ew-resize;width:40px;height:40px;background-color:var(--sy_red_regular);opacity:.7;border-radius:50%}";

function compare(obj) {
  const width = obj.offsetWidth;
  const height = obj.offsetHeight;

  obj.style.width = width / 2 + "px";

  const slider = document.createElement("div");
  slider.classList.add("comparison-slider");

  obj.parentElement.insertBefore(slider, obj);
  slider.style.top = height / 2 - slider.offsetHeight / 2 + "px";
  slider.style.left = width / 2 - slider.offsetWidth / 2 + "px";

  slider.addEventListener("mousedown", slideActivate);
  slider.addEventListener("touchstart", slideActivate);
  window.addEventListener("mouseup", slideDeactivate);
  window.addEventListener("touchend", slideDeactivate);

  function slideActivate(e) {
    e.preventDefault();
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
  }

  function slideDeactivate() {
    slider.removeEventListener("mousedown", slideActivate);
    slider.removeEventListener("touchstart", slideActivate);
    window.removeEventListener("mouseup", slideDeactivate);
    window.removeEventListener("touchend", slideDeactivate);
  }

  function slideMove(e) {
    e = e.changedTouches ? e.changedTouches[0] : e;

    const rectangle = obj.getBoundingClientRect();

    let position = e.pageX - rectangle.left;
    position = position - window.scrollX;

    if (position < 0) position = 0;
    if (position > width) position = width;

    obj.style.width = position + "px";
    slider.style.left = obj.offsetWidth - slider.offsetWidth / 2 + "px";
  }
}

function initializeComparisons() {
  const overlays = document.getElementsByClassName("comparison-overlay");
  for (let overlay of overlays) {
    compare(overlay);
  }
}

insertStyle(comparisonRules);
initializeComparisons();
