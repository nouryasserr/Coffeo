"use strict";

document.querySelector(".toogle").addEventListener("click", function () {
  const navList = document.getElementById("nav-list");
  const currentDisplay = window.getComputedStyle(navList).display;
  if (currentDisplay === "none") {
    navList.style.display = "flex";
  } else {
    navList.style.display = "none";
  }
});
