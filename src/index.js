"use strict";

const menuContainer = document.querySelector("#menu-container");
const burgerButton  = document.querySelector("#menu-burger");
const closeButton = document.querySelector("#menu-close");
const menuCard = document.querySelector("#menu-card")

burgerButton.addEventListener("click", changeImageOne);

function changeImageOne() {
    menuContainer.style.backgroundColor = "#0AC18A";
    burgerButton.style.display = "none";
    closeButton.style.display = "flex";
    menuCard.style.display = "flex";
};

closeButton.addEventListener("click", changeImageTwo);

function changeImageTwo() {
    menuContainer.style.backgroundColor = "#101213";
    burgerButton.style.display = "flex";
    closeButton.style.display = "none";
    menuCard.style.display = "none";
};
