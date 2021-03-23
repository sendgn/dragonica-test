"use strict";

// functions

// working with items info
const resultItems = document.querySelectorAll(".results__item");
const resultsTable = document.querySelector(".results__table");
const resultsHeading = document.querySelector(".results__heading");
const resultsNumberGroup = document.querySelector(
  ".results__page-number_group"
);
const itemInfos = document.querySelectorAll(".item-info");
// item-info on the page
const itemInfoPageContent = document.querySelector(".item-info-page__content");

resultsTable.style.display = "none";
resultsHeading.style.display = "none";
resultsNumberGroup.style.display = "none";

const get = location.search;
const currentItemNumber = Number.parseInt(get.slice(-1));
const currentItemInfo = resultItems[currentItemNumber].firstElementChild;

// make pop-up info visible
currentItemInfo.classList.add("item-info__on-page");

// right side of item-info page
const itemInfoRightSide = document.querySelector(".item-info-page__right-side");

// how-to-get block for currentItem
const howToGetCurrentItem = itemInfos[currentItemNumber].nextElementSibling;

// more-info
const moreInfo = resultItems[currentItemNumber].lastElementChild;

// add this item to a separate div as a second child
// first one is the div heading
itemInfoPageContent.prepend(currentItemInfo);
itemInfoRightSide.appendChild(howToGetCurrentItem);
itemInfoRightSide.appendChild(moreInfo);

console.log(moreInfo);

// TODO: reuse this code from script.js
// account menu
const account = document.querySelector(".profile__account");
const accountMenu = document.querySelector(".profile__account_menu");
let isAccountMenuVisible = false;

account.addEventListener("click", function (e) {
  e.preventDefault();

  if (!isAccountMenuVisible) {
    accountMenu.style.opacity = "1";
    accountMenu.style.visibility = "visible";
    isAccountMenuVisible = true;
  } else {
    accountMenu.style.opacity = "0";
    accountMenu.style.visibility = "hidden";
    isAccountMenuVisible = false;
  }
});

// language menu
const language = document.querySelector(".language");
const languageMenu = document.querySelector(".language__menu");
let isLanguageMenuVisible = false;

language.addEventListener("click", function (e) {
  e.preventDefault();

  if (!isLanguageMenuVisible) {
    languageMenu.style.opacity = "1";
    languageMenu.style.visibility = "visible";
    isLanguageMenuVisible = true;
  } else {
    languageMenu.style.opacity = "0";
    languageMenu.style.visibility = "hidden";
    isLanguageMenuVisible = false;
  }
});

document.onclick = function (e) {
  if (
    !e.target.classList.contains("profile__account_name") &&
    !e.target.classList.contains("profile__arrow-down_account")
  ) {
    accountMenu.style.opacity = "0";
    accountMenu.style.visibility = "hidden";
    isAccountMenuVisible = false;
  }

  if (
    !e.target.classList.contains("flag") &&
    !e.target.classList.contains("profile__arrow-down_language")
  ) {
    languageMenu.style.opacity = "0";
    languageMenu.style.visibility = "hidden";
    isLanguageMenuVisible = false;
  }
};
