const comparisonRules =
  ".comparison{position:relative;width:90%}.comparison-image{background-position:top left;background-repeat:no-repeat;background-size:auto 100%;left:0;position:absolute;top:0;height:100%;width:50%}.resizer{left:50%;position:absolute;top:0;height:100%;width:2px;background-color:#cbd5e0;cursor:ew-resize}";

function initializeComparison() {
  // Query the element
  const resizer = document.getElementById("dragMe");
  const leftSide = resizer.previousElementSibling;

  // The current position of mouse
  let x = 0;
  let y = 0;

  // The width of modified element
  let leftWidth = 0;

  const mouseUpHandler = function (e) {
    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);
  };

  // Handle the mousedown event
  // that's triggered when user drags the resizer
  const mouseDownHandler = function (e) {
    // Get the current mouse position
    x = e.clientX;
    y = e.clientY;
    leftWidth = leftSide.getBoundingClientRect().width;

    // Attach the listeners to `document`
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - x;
    const dy = e.clientY - y;

    let newLeftWidth =
      ((leftWidth + dx) * 100) /
      resizer.parentNode.getBoundingClientRect().width;
    newLeftWidth = Math.max(newLeftWidth, 0);
    newLeftWidth = Math.min(newLeftWidth, 100);

    // Set the width for modified and resizer elements
    leftSide.style.width = `${newLeftWidth}%`;
    resizer.style.left = `${newLeftWidth}%`;
  };

  // Attach the handler
  resizer.addEventListener("mousedown", mouseDownHandler);
}

insertStyle(comparisonRules);
initializeComparison();
