"use strict";

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".subscribe");

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const namePattern = /([A-Z])\w+/g;
const passPattern = /^[a-zA-Z0-9]*$/gm;

const allInputs = [fname, lname, email, password];
console.log(allInputs);

let inputValue = "";

btn.addEventListener("click", function (e) {
  e.preventDefault();
  allInputs.forEach(function (i) {
    const value = i.value;
    const siblings = i.nextElementSibling;
    if (i === email) {
      if (value.match(emailPattern)) {
        i.style.border = "2px solid green";
      } else {
        i.style.border = "2px solid red";
        siblings.classList.remove("hidden");
      }
    } else if (i === fname || i == lname) {
      if (value.match(namePattern)) {
        i.style.border = "2px solid green";
      } else {
        i.style.border = "2px solid red";
        siblings.classList.remove("hidden");
      }
    } else if (i === password) {
      if (value.match(passPattern)) {
        i.style.border = "2px solid green";
      } else {
        i.style.border = "2px solid red";
        siblings.classList.remove("hidden");
      }
    }
  });
});
