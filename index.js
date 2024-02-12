"use strict";

// Declaring the variables

const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const overlay = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnCloseModal2 = document.querySelector(".close-modal2");
const btnCloseModal3 = document.querySelector(".close-modal3");
const btnsOpenModal1 = document.querySelector(".show-modal1");
const btnsOpenModal2 = document.querySelector(".show-modal2");
const btnsOpenModal3 = document.querySelector(".show-modal3");

// declaring the functions

const closeModal = function () {
  modal1.classList.add("hidden");
  modal2.classList.add("hidden");
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal1.addEventListener("click", function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnsOpenModal2.addEventListener("click", function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnsOpenModal3.addEventListener("click", function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnCloseModal1.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal);
btnCloseModal3.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal();
  } else if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal();
  } else if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal();
  }
});
