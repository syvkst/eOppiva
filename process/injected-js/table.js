const tableRules =
  "table{width:90%;margin:auto;text-align:left;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}td,th{padding:15px}th{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);border-bottom:2px solid var(--sy_font_color);width:33%}tr{transition:all .3s}tr:nth-child(even){background-color:var(--sy_tablerow_even_bg)}tr:hover{background-color:var(--sy_element_hover)}.tr-header{font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight)}.td-check{font-family:var(--sy_heading_font);color:var(--sy_table_checkmark_color);transition:all .3s}tr:hover td .td-check{color:var(--sy_grey_A_900);font-weight:var(--sy_heading_weight)}";

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
