const tableRules =
  "# inject:../../process/min-styles/table.min.css -> <- end #";

function intializeTables() {
  const cells = document.querySelectorAll("td");

  for (let cell of cells) {
    if (cell.innerHTML.toLowerCase() !== "x") {
      continue;
    }

    cell.innerHTML = "";

    let span = document.createElement("span");
    span.classList.add("td-check");
    span.innerHTML = "&#10004;";
    cell.appendChild(span);
  }
}

insertStyle(tableRules);
intializeTables();
