"use strict";

// Programs
const programUl = document.getElementById("prg").getElementsByTagName("li");
let programText = document.getElementById("heading-program");
const programCards = document.querySelectorAll(".program-cards");
const intermediate = document.querySelectorAll(".intermediate");
const advanced = document.querySelectorAll(".advanced");
const bodybuilding = document.querySelectorAll(".bodybuilding");
const powerbuidling = document.querySelectorAll(".powerbuilding");
const powerlifting = document.querySelectorAll(".powerlifting");

const allProgram = document.getElementsByTagName("button");
const table1 = document.getElementById("table1");
const overlay = document.getElementById("overlay");

for (let i = 0; i < programUl.length; i++) {
  if (programUl[i].classList.contains("selected")) {
    programUl[i].classList.add("bold");
  }
}

programUl[0].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (programCards[i].classList.contains("all")) {
      programCards[i].classList.remove("hidden");
    }
  programUl[0].classList.add("bold");
  programUl[1].classList.remove("bold");
  programUl[2].classList.remove("bold");
  programUl[3].classList.remove("bold");
  programUl[4].classList.remove("bold");
  programUl[5].classList.remove("bold");
  programUl[6].classList.remove("bold");
  programText.textContent = "All Programs";
});

programUl[1].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (!programCards[i].classList.contains("beginner")) {
      const beginner = document.querySelectorAll(".beginner");
      for (let i = 0; i < beginner.length; i++) {
        beginner[i].classList.remove("hidden");
      }
      programCards[i].classList.add("hidden");
    }
  programUl[0].classList.remove("bold");
  programUl[1].classList.add("bold");
  programUl[2].classList.remove("bold");
  programUl[3].classList.remove("bold");
  programUl[4].classList.remove("bold");
  programUl[5].classList.remove("bold");
  programUl[6].classList.remove("bold");
  programText.textContent = "Beginner";
});

programUl[2].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (!programCards[i].classList.contains("intermediate")) {
      const intermediate = document.querySelectorAll(".intermediate");
      for (let i = 0; i < intermediate.length; i++) {
        intermediate[i].classList.remove("hidden");
      }
      programCards[i].classList.add("hidden");
    }
  programUl[0].classList.remove("bold");
  programUl[1].classList.remove("bold");
  programUl[2].classList.add("bold");
  programUl[3].classList.remove("bold");
  programUl[4].classList.remove("bold");
  programUl[5].classList.remove("bold");
  programUl[6].classList.remove("bold");
  programText.textContent = "Intermediate";
});
programUl[3].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (!programCards[i].classList.contains("advanced")) {
      const advanced = document.querySelectorAll(".advanced");
      for (let i = 0; i < advanced.length; i++) {
        advanced[i].classList.remove("hidden");
      }
      programCards[i].classList.add("hidden");
    }
  programUl[0].classList.remove("bold");
  programUl[1].classList.remove("bold");
  programUl[2].classList.remove("bold");
  programUl[3].classList.add("bold");
  programUl[4].classList.remove("bold");
  programUl[5].classList.remove("bold");
  programUl[6].classList.remove("bold");
  programText.textContent = "Advanced";
});
programUl[4].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (!programCards[i].classList.contains("bodybuilding")) {
      const bodybuilding = document.querySelectorAll(".bodybuilding");
      for (let i = 0; i < bodybuilding.length; i++) {
        bodybuilding[i].classList.remove("hidden");
      }
      programCards[i].classList.add("hidden");
    }
  programUl[0].classList.remove("bold");
  programUl[1].classList.remove("bold");
  programUl[2].classList.remove("bold");
  programUl[3].classList.remove("bold");
  programUl[4].classList.add("bold");
  programUl[5].classList.remove("bold");
  programUl[6].classList.remove("bold");
  programText.textContent = "Bodybuilding";
});
programUl[5].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (!programCards[i].classList.contains("powerbuilding")) {
      const powerbuilding = document.querySelectorAll(".powerbuilding");
      for (let i = 0; i < powerbuilding.length; i++) {
        powerbuilding[i].classList.remove("hidden");
      }
      programCards[i].classList.add("hidden");
    }
  programUl[0].classList.remove("bold");
  programUl[1].classList.remove("bold");
  programUl[2].classList.remove("bold");
  programUl[3].classList.remove("bold");
  programUl[4].classList.remove("bold");
  programUl[5].classList.add("bold");
  programUl[6].classList.remove("bold");
  programText.textContent = "Powerbuilding";
});
programUl[6].addEventListener("click", function () {
  for (let i = 0; i < programCards.length; i++)
    if (!programCards[i].classList.contains("powerlifting")) {
      const powerlifting = document.querySelectorAll(".powerlifting");
      for (let i = 0; i < powerlifting.length; i++) {
        powerlifting[i].classList.remove("hidden");
      }
      programCards[i].classList.add("hidden");
    }
  programUl[0].classList.remove("bold");
  programUl[1].classList.remove("bold");
  programUl[2].classList.remove("bold");
  programUl[3].classList.remove("bold");
  programUl[4].classList.remove("bold");
  programUl[5].classList.remove("bold");
  programUl[6].classList.add("bold");
  programText.textContent = "Powerlifting";
});

const tables = document.getElementById("table-programs");

const program = (number) => {
  fetch(`./programs/program${number}.html`)
    .then((res) => {
      if (res.ok) {
        return res.text();
      }
    })
    .then((htmlSnippet) => {
      tables.innerHTML = htmlSnippet;
    });
};

document.addEventListener("click", function (e) {
  const target = e.target.closest(".close-table");

  if (target) {
    tables.innerHTML = close;
    overlay.classList.add("hidden");
  }
});

for (let i = 0; i < allProgram.length; i++) {
  allProgram[i].addEventListener("click", function () {
    overlay.classList.remove("hidden");
  });
}

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  tables.innerHTML = close;
});

/*
program1.addEventListener("click", function () {
  table1.show();
  overlay.classList.remove("hidden");
});

closeTable.addEventListener("click", function () {
  table1.close();
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  table1.close();
  overlay.classList.add("hidden");
});
*/

/*
function loadHtml(id, filename) {
  let xhttp;
  let element = document.getElementById(id);
  let file = filename;

  if (file) {
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          element.innerHTML = this.responseText;
        }
        if (this.status == 404) {
          element.innerHTML = "<h1>Page Not Found.</h1>";
        }
      }
    };
    xhttp.open("GET", `programs/${file}`, true);
    xhttp.send();
    return;
  }
}
*/
