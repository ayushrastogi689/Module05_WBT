let firstPara = document.querySelector(".first_para");

function stylePara(size, color, family) {
  firstPara.style.fontSize = size + "px";
  firstPara.style.fontFamily = family;
  firstPara.style.color = color;
}

function changeStyle() {
  stylePara(30, "green", "algerian");
}
