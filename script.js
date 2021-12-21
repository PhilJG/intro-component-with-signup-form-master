"use strict";

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const btn = document.querySelector(".subscribe");

const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

const allInputs = [fname, lname, email, password];

let inputValue = "";

allInputs.forEach(
  btn.addEventListener("click", function validation(i) {
    inputValue = email.value;

    if (inputValue.match(pattern)) {
      // form.classList.add("valid");
      // form.classList.remove("invalid");

      i.style.border = "2px solid green";
    } else {
      // form.classList.remove("valid");
      // form.classList.add("invalid");

      i.style.border = "2px solid red";
    }
  })
);
