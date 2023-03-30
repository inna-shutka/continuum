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


const slideOne = document.getElementById("slide1");
const slideTwo = document.getElementById("slide2");
const slideThree = document.getElementById("slide3");
const slideFour = document.getElementById("slide4");
const slideFive = document.getElementById("slide5");
const slideSix = document.getElementById("slide6");
const dotsContainer = document.querySelector(".course__slider");

document.getElementById("dot1").addEventListener("click", () => {
    slideOne.style.display = "flex";
    slideTwo.style.display = "none";
    slideThree.style.display = "none";
    slideFour.style.display = "none";
    slideFive.style.display = "none";
    slideSix.style.display = "none";
    dotsContainer.className = "course__slider first-current";
});

document.getElementById("dot2").addEventListener("click", () => {
    slideOne.style.display = "none";
    slideTwo.style.display = "flex";
    slideThree.style.display = "none";
    slideFour.style.display = "none";
    slideFive.style.display = "none";
    slideSix.style.display = "none";
    dotsContainer.className = "course__slider second-current";
});

document.getElementById("dot3").addEventListener("click", () => {
    slideOne.style.display = "none";
    slideTwo.style.display = "none";
    slideThree.style.display = "flex";
    slideFour.style.display = "none";
    slideFive.style.display = "none";
    slideSix.style.display = "none";
    dotsContainer.className = "course__slider third-current";
});

document.getElementById("dot4").addEventListener("click", () => {
    slideOne.style.display = "none";
    slideTwo.style.display = "none";
    slideThree.style.display = "none";
    slideFour.style.display = "flex";
    slideFive.style.display = "none";
    slideSix.style.display = "none";
    dotsContainer.className = "course__slider fourth-current";
});

document.getElementById("dot5").addEventListener("click", () => {
    slideOne.style.display = "none";
    slideTwo.style.display = "none";
    slideThree.style.display = "none";
    slideFour.style.display = "none";
    slideFive.style.display = "flex";
    slideSix.style.display = "none";
    dotsContainer.className = "course__slider fifth-current";
});

document.getElementById("dot6").addEventListener("click", () => {
    slideOne.style.display = "none";
    slideTwo.style.display = "none";
    slideThree.style.display = "none";
    slideFour.style.display = "none";
    slideFive.style.display = "none";
    slideSix.style.display = "flex";
    dotsContainer.className = "course__slider sixth-current";
});
