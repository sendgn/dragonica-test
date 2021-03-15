"use strict";

const resultItems = document.querySelectorAll(".results__item");
const itemInfos = document.querySelectorAll(".item-info");

// pop up windows
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
