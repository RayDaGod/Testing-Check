"use strict";

const navbarLinkColor = function () {
  const navLinks = document.getElementsByClassName("nav");
  for (let i = 0; i < navLinks.length; i++) {
    if (
      window.scrollY > 0 ||
      (window.pageYOffset > 0 && navLinks[i].classList.contains("active"))
    ) {
      navLinks[i].classList.add("color");
      navLinks[i].classList.add("active-color");
      document.getElementById("header-nav").style.background = "white";
      document.getElementById("header-nav").style.boxShadow =
        "0 4px 2px -2px gray";
    } else {
      navLinks[i].classList.remove("color");
      navLinks[i].classList.remove("active-color");
      document.getElementById("header-nav").style.background = "none";
      document.getElementById("header-nav").style.boxShadow = "none";
    }
  }
};

let prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header-nav").style.top = "0";
    navbarLinkColor();
  } else {
    document.getElementById("header-nav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
