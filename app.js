"use strict";

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document.body.classList.toggle("dark-theme");

  const className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }

  console.log("current class name: " + className);
});

fetch("/api/data")
  .then((response) => response.json())
  .then((data) => {
    // Process the response data and update your front-end UI
  })
  .catch((error) => {
    console.error("Error:", error);
  });
