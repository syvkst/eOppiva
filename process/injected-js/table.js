const tableRules =
  "table{width:90%;margin:auto;text-align:left;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}td,th{padding:15px}th{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);border-bottom:2px solid var(--sy_font_color);width:33%}tr{transition:all .3s}tr:nth-child(even){background-color:var(--sy_level_2)}tr:hover{background-color:var(--sy_red_regular)}.tr-header{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight)}.td-check{font-family:var(--sy_heading_font);color:var(--sy_aipa_green);transition:all .3s}tr:hover td .td-check{color:var(--sy_grey_A_900);font-weight:var(--sy_heading_weight)}";

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
