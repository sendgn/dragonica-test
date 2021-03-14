"use strict";

const resultItems = document.querySelectorAll(".results__item");
const itemInfos = document.querySelectorAll(".item-info");

for (let i = 0; i < resultItems.length; i++) {
  resultItems[i].id = `r${i}`;

  document.querySelector(`#r${i}`).addEventListener("mouseenter", function () {
    if (i > resultItems.length - 3) {
      itemInfos[i].style.top = "-500px";
    } else if (i > 3) {
      itemInfos[i].style.top = "-300px";
    } else {
      itemInfos[i].style.top = "-10px";
    }

    itemInfos[i].style.opacity = "1";
    itemInfos[i].style.visibility = "visible";
  });

  document.querySelector(`#r${i}`).addEventListener("mouseleave", function () {
    itemInfos[i].style.opacity = "0";
    itemInfos[i].style.visibility = "hidden";
  });
}
