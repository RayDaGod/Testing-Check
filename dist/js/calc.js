"use strict";

const results = document.getElementById("results");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

const age = document.getElementById("age");

const excercise = document.getElementById("excercise");

const poundsToKilos = bodyweight.value * 0.4536;
const kilosToPounds = bodyweight.value * 2.2;

const squatMax = document.getElementById("squat-max");
const benchMax = document.getElementById("bench-max");
const deadliftMax = document.getElementById("deadlift-max");
const squaRating = document.getElementById("squat-rating");
const benchRating = document.getElementById("bench-rating");
const deadliftRating = document.getElementById("deadlift-rating");

const squatCompare = document.querySelectorAll(".squat-compare");
const benchCompare = document.querySelectorAll(".bench-compare");
const deadliftCompare = document.querySelectorAll(".deadlift-compare");
const standardsH1 = document.getElementById("standards-h1");

const squatMale = {
  newbie: [45, 135],
  beginner: 1.25,
  intermediate: [1.25, 1.75],
  advanced: [1.75, 2.5],
  elite: [2.5, 3],
  freak: [3, 7],
};
const benchMale = {
  newbie: [45, 95],
  beginner: 1,
  intermediate: [1, 1.5],
  advanced: [1.5, 2],
  elite: [2, 2.5],
  freak: [2.5, 5],
};
const deadliftMale = {
  newbie: [135, 225],
  beginner: 1.5,
  intermediate: [1.5, 2.25],
  advanced: [2.25, 3],
  elite: [3, 3.5],
  freak: [3.5, 7],
};

const squatFem = {
  newbie: [45, 95],
  beginner: [0.5, 1],
  intermediate: [1, 1.5],
  advanced: [1.5, 1.75],
  elite: [1.75, 2.25],
  freak: [2.25, 5],
};
const benchFem = {
  newbie: [0, 45],
  beginner: 0.5,
  intermediate: [0.5, 0.75],
  advanced: [0.75, 1],
  elite: [1, 1.25],
  freak: [1.25, 5],
};
const deadliftFem = {
  newbie: [45, 135],
  beginner: [0.5, 1],
  intermediate: [1, 1.5],
  advanced: [1.5, 2],
  elite: [2, 2.5],
  freak: [2.5, 5],
};

const init = () => {
  excercise.value = "b";
  lift.value = "";
  reps.value = "";
};

const metrics = function () {
  const lbs = document.getElementById("lbs");
  const kg = document.getElementById("kg");

  if (lbs.checked) {
    squatMale.newbie = [45, 135];
    benchMale.newbie = [45, 95];
    deadliftMale.newbie = [135, 225];
    squatFem.newbie = [45, 95];
    benchFem.newbie = [5, 45];
    deadliftFem.newbie = [45, 135];
    return "lbs";
  } else squatMale.newbie = [20, 61];
  benchMale.newbie = [20, 43];
  deadliftMale.newbie = [61, 102];
  squatFem.newbie = [20, 43];
  benchFem.newbie = [2, 20];
  deadliftFem.newbie = [20, 43];
  return "kg";
};

const oneRepPr = function (lift, reps) {
  return Math.trunc(lift * (1 + 0.0333 * reps));
};

const resultMetrics = function () {
  if (lbs.checked) {
    squatCompare[0].textContent = "45 - 135 lbs";
    benchCompare[0].textContent = "45 - 95 lbs";
    deadliftCompare[0].textContent = "135 - 225 lbs";
  } else {
    squatCompare[0].textContent = "20 - 61 kg";
    benchCompare[0].textContent = "20 - 43 kg";
    deadliftCompare[0].textContent = "61 - 102 kg";
  }
};

const resultMetricsF = function () {
  if (lbs.checked) {
    squatCompare[0].textContent = "45 - 95 lbs";
    benchCompare[0].textContent = "5 - 45 lbs";
    deadliftCompare[0].textContent = "45 - 135 lbs";
  } else {
    squatCompare[0].textContent = "20 - 43 kg";
    benchCompare[0].textContent = "2 - 20 kg";
    deadliftCompare[0].textContent = "20 - 43 kg";
  }
};

const calculateResults = function () {
  const bodyweight = document.getElementById("bodyweight").value;
  const gender = document.getElementById("gender").value;

  const allLifts = {
    squatLift: parseInt(document.getElementById("squat-lift").value),
    squatRep: parseInt(document.getElementById("squat-reps").value),
    benchLift: parseInt(document.getElementById("bench-lift").value),
    benchRep: parseInt(document.getElementById("bench-reps").value),
    deadliftLift: parseInt(document.getElementById("deadlift-lift").value),
    deadliftRep: parseInt(document.getElementById("deadlift-reps").value),
  };

  /*
  const lifts = [];
  const reps = [];
  const len = Object.keys(allLifts).length;
  const keys = Object.keys(allLifts);

  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      reps.push(keys[i]);
    } else {
      lifts.push(keys[i]);
    }
  }
  */

  const totalMaxFunc = function () {
    const totalMaxValue = document.getElementById("total-max");
    const totalMax =
      oneRepPr(allLifts.squatLift, allLifts.squatRep) +
      oneRepPr(allLifts.benchLift, allLifts.benchRep) +
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep);

    totalMaxValue.value = `${totalMax} ${metrics()}`;
  };

  const squatTable = function () {
    squatCompare[1].textContent = `${Math.trunc(
      squatMale.newbie[1]
    )} - ${Math.trunc(bodyweight * squatMale.beginner)} ${metrics()}`;
    squatCompare[2].textContent = `${Math.trunc(
      bodyweight * squatMale.intermediate[0]
    )} - ${Math.trunc(bodyweight * squatMale.intermediate[1])} ${metrics()}`;
    squatCompare[3].textContent = `${Math.trunc(
      bodyweight * squatMale.advanced[0]
    )} - ${Math.trunc(bodyweight * squatMale.advanced[1])} ${metrics()}`;
    squatCompare[4].textContent = `${Math.trunc(
      bodyweight * squatMale.elite[0]
    )} - ${Math.trunc(bodyweight * squatMale.elite[1])} ${metrics()}`;
    squatCompare[5].textContent = `${Math.trunc(
      bodyweight * squatMale.freak[0]
    )} - ${Math.trunc(bodyweight * squatMale.freak[1])} ${metrics()}`;
  };
  const squatTableF = function () {
    squatCompare[1].textContent = `${Math.trunc(
      squatFem.newbie[1]
    )} - ${Math.trunc(bodyweight * squatFem.beginner[1])} ${metrics()}`;
    squatCompare[2].textContent = `${Math.trunc(
      bodyweight * squatFem.intermediate[0]
    )} - ${Math.trunc(bodyweight * squatFem.intermediate[1])} ${metrics()}`;
    squatCompare[3].textContent = `${Math.trunc(
      bodyweight * squatFem.advanced[0]
    )} - ${Math.trunc(bodyweight * squatFem.advanced[1])} ${metrics()}`;
    squatCompare[4].textContent = `${Math.trunc(
      bodyweight * squatFem.elite[0]
    )} - ${Math.trunc(bodyweight * squatFem.elite[1])} ${metrics()}`;
    squatCompare[5].textContent = `${Math.trunc(
      bodyweight * squatFem.freak[0]
    )} - ${Math.trunc(bodyweight * squatFem.freak[1])} ${metrics()}`;
  };
  const benchTable = function () {
    benchCompare[1].textContent = `${Math.trunc(
      benchMale.newbie[1]
    )} - ${Math.trunc(bodyweight * benchMale.beginner)} ${metrics()}`;
    benchCompare[2].textContent = `${Math.trunc(
      bodyweight * benchMale.intermediate[0]
    )} - ${Math.trunc(bodyweight * benchMale.intermediate[1])} ${metrics()}`;
    benchCompare[3].textContent = `${Math.trunc(
      bodyweight * benchMale.advanced[0]
    )} - ${Math.trunc(bodyweight * benchMale.advanced[1])} ${metrics()}`;
    benchCompare[4].textContent = `${Math.trunc(
      bodyweight * benchMale.elite[0]
    )} - ${Math.trunc(bodyweight * benchMale.elite[1])} ${metrics()}`;
    benchCompare[5].textContent = `${Math.trunc(
      bodyweight * benchMale.freak[0]
    )} - ${Math.trunc(bodyweight * benchMale.freak[1])} ${metrics()}`;
  };
  const benchTableF = function () {
    benchCompare[1].textContent = `${Math.trunc(
      benchFem.newbie[1]
    )} - ${Math.trunc(bodyweight * benchFem.beginner)} ${metrics()}`;
    benchCompare[2].textContent = `${Math.trunc(
      bodyweight * benchFem.intermediate[0]
    )} - ${Math.trunc(bodyweight * benchFem.intermediate[1])} ${metrics()}`;
    benchCompare[3].textContent = `${Math.trunc(
      bodyweight * benchFem.advanced[0]
    )} - ${Math.trunc(bodyweight * benchFem.advanced[1])} ${metrics()}`;
    benchCompare[4].textContent = `${Math.trunc(
      bodyweight * benchFem.elite[0]
    )} - ${Math.trunc(bodyweight * benchFem.elite[1])} ${metrics()}`;
    benchCompare[5].textContent = `${Math.trunc(
      bodyweight * benchFem.freak[0]
    )} - ${Math.trunc(bodyweight * benchFem.freak[1])} ${metrics()}`;
  };
  const deadliftTable = function () {
    deadliftCompare[1].textContent = `${Math.trunc(
      deadliftMale.newbie[1]
    )} - ${Math.trunc(bodyweight * deadliftMale.beginner)} ${metrics()}`;
    deadliftCompare[2].textContent = `${Math.trunc(
      bodyweight * deadliftMale.intermediate[0]
    )} - ${Math.trunc(bodyweight * deadliftMale.intermediate[1])} ${metrics()}`;
    deadliftCompare[3].textContent = `${Math.trunc(
      bodyweight * deadliftMale.advanced[0]
    )} - ${Math.trunc(bodyweight * deadliftMale.advanced[1])} ${metrics()}`;
    deadliftCompare[4].textContent = `${Math.trunc(
      bodyweight * deadliftMale.elite[0]
    )} - ${Math.trunc(bodyweight * deadliftMale.elite[1])} ${metrics()}`;
    deadliftCompare[5].textContent = `${Math.trunc(
      bodyweight * deadliftMale.freak[0]
    )} - ${Math.trunc(bodyweight * deadliftMale.freak[1])} ${metrics()}`;
  };
  const deadliftTableF = function () {
    deadliftCompare[1].textContent = `${Math.trunc(
      deadliftFem.newbie[1]
    )} - ${Math.trunc(bodyweight * deadliftFem.beginner[1])} ${metrics()}`;
    deadliftCompare[2].textContent = `${Math.trunc(
      bodyweight * deadliftFem.intermediate[0]
    )} - ${Math.trunc(bodyweight * deadliftFem.intermediate[1])} ${metrics()}`;
    deadliftCompare[3].textContent = `${Math.trunc(
      bodyweight * deadliftFem.advanced[0]
    )} - ${Math.trunc(bodyweight * deadliftFem.advanced[1])} ${metrics()}`;
    deadliftCompare[4].textContent = `${Math.trunc(
      bodyweight * deadliftFem.elite[0]
    )} - ${Math.trunc(bodyweight * deadliftFem.elite[1])} ${metrics()}`;
    deadliftCompare[5].textContent = `${Math.trunc(
      bodyweight * deadliftFem.freak[0]
    )} - ${Math.trunc(bodyweight * deadliftFem.freak[1])} ${metrics()}`;
  };

  const squatRatingM = function () {
    if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <= squatMale.newbie[0]
    ) {
      squaRating.value = "Keep Working";
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >= squatMale.newbie[0] &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <= squatMale.newbie[1]
    ) {
      squaRating.value = "Newbie";
      squatCompare[0].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
      squatMale.beginner * bodyweight
    ) {
      squaRating.value = "Beginner";
      squatCompare[1].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatMale.intermediate[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatMale.intermediate[1] * bodyweight
    ) {
      squaRating.value = "Intermediate";
      squatCompare[2].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatMale.advanced[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatMale.advanced[1] * bodyweight
    ) {
      squaRating.value = "Advanced";
      squatCompare[3].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatMale.elite[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatMale.elite[1] * bodyweight
    ) {
      squaRating.value = "Elite";
      squatCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatMale.freak[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatMale.freak[1] * bodyweight
    ) {
      squaRating.value = "World Class";
      squatCompare[5].classList.add("table-primary");
    } else {
      squaRating.value = "Invalid";
    }
  };
  const benchRatingM = function () {
    if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <= benchMale.newbie[0]
    ) {
      benchRating.value = "Keep Working";
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >= benchMale.newbie[0] &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <= benchMale.newbie[1]
    ) {
      benchRating.value = "Newbie";
      benchCompare[0].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
      benchMale.beginner * bodyweight
    ) {
      benchRating.value = "Beginner";
      benchCompare[1].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchMale.intermediate[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchMale.intermediate[1] * bodyweight
    ) {
      benchRating.value = "Intermediate";
      benchCompare[2].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchMale.advanced[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchMale.advanced[1] * bodyweight
    ) {
      benchRating.value = "Advanced";
      benchCompare[3].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchMale.elite[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchMale.elite[1] * bodyweight
    ) {
      benchRating.value = "Elite";
      benchCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchMale.freak[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchMale.freak[1] * bodyweight
    ) {
      benchRating.value = "World Class";
      benchCompare[5].classList.add("table-primary");
    } else {
      benchRating.value = "Invalid";
    }
  };
  const deadliftRatingM = function () {
    if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
      deadliftMale.newbie[0]
    ) {
      deadliftRating.value = "Keep Working";
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftMale.newbie[0] &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftMale.newbie[1]
    ) {
      deadliftRating.value = "Newbie";
      deadliftCompare[0].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
      deadliftMale.beginner * bodyweight
    ) {
      deadliftRating.value = "Beginner";
      deadliftCompare[1].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftMale.intermediate[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftMale.intermediate[1] * bodyweight
    ) {
      deadliftRating.value = "Intermediate";
      deadliftCompare[2].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftMale.advanced[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftMale.advanced[1] * bodyweight
    ) {
      deadliftRating.value = "Advanced";
      deadliftCompare[3].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftMale.elite[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftMale.elite[1] * bodyweight
    ) {
      deadliftRating.value = "Elite";
      deadliftCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftMale.freak[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftMale.freak[1] * bodyweight
    ) {
      deadliftRating.value = "World Class";
      deadliftCompare[5].classList.add("table-primary");
    } else {
      deadliftRating.value = "Invalid";
    }
  };

  const squatRatingF = function () {
    if (oneRepPr(allLifts.squatLift, allLifts.squatRep) <= squatFem.newbie[0]) {
      squaRating.value = "Keep Working";
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >= squatFem.newbie[0] &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <= squatFem.newbie[1]
    ) {
      squaRating.value = "Newbie";
      squatCompare[0].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatFem.beginner[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatFem.beginner[1] * bodyweight
    ) {
      squaRating.value = "Beginner";
      squatCompare[1].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatFem.intermediate[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatFem.intermediate[1] * bodyweight
    ) {
      squaRating.value = "Intermediate";
      squatCompare[2].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatFem.advanced[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatFem.advanced[1] * bodyweight
    ) {
      squaRating.value = "Advanced";
      squatCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatFem.elite[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatFem.elite[1] * bodyweight
    ) {
      squaRating.value = "Elite";
      squatCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.squatLift, allLifts.squatRep) >=
        squatFem.freak[0] * bodyweight &&
      oneRepPr(allLifts.squatLift, allLifts.squatRep) <=
        squatFem.freak[1] * bodyweight
    ) {
      squaRating.value = "World Class";
      squatCompare[5].classList.add("table-primary");
    } else {
      squaRating.value = "Invalid";
    }
  };

  const benchRatingF = function () {
    if (oneRepPr(allLifts.benchLift, allLifts.benchRep) <= benchFem.newbie[0]) {
      benchRating.value = "Keep Working";
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >= benchFem.newbie[0] &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <= benchFem.newbie[1]
    ) {
      benchRating.value = "Newbie";
      benchCompare[0].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
      benchFem.beginner * bodyweight
    ) {
      benchRating.value = "Beginner";
      benchCompare[1].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchFem.intermediate[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchFem.intermediate[1] * bodyweight
    ) {
      benchRating.value = "Intermediate";
      benchCompare[2].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchFem.advanced[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchFem.advanced[1] * bodyweight
    ) {
      benchRating.value = "Advanced";
      benchCompare[3].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchFem.elite[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchFem.elite[1] * bodyweight
    ) {
      benchRating.value = "Elite";
      benchCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.benchLift, allLifts.benchRep) >=
        benchFem.freak[0] * bodyweight &&
      oneRepPr(allLifts.benchLift, allLifts.benchRep) <=
        benchFem.freak[1] * bodyweight
    ) {
      benchRating.value = "World Class";
      benchCompare[5].classList.add("table-primary");
    } else {
      benchRating.value = "Invalid";
    }
  };
  const deadliftRatingF = function () {
    if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
      deadliftFem.newbie[0]
    ) {
      deadliftRating.value = "Keep Working";
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftFem.newbie[0] &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftFem.newbie[1]
    ) {
      deadliftRating.value = "Newbie";
      deadliftCompare[0].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
      deadliftFem.beginner * bodyweight
    ) {
      deadliftRating.value = "Beginner";
      deadliftCompare[1].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftFem.intermediate[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftFem.intermediate[1] * bodyweight
    ) {
      deadliftRating.value = "Intermediate";
      deadliftCompare[2].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftFem.advanced[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftFem.advanced[1] * bodyweight
    ) {
      deadliftRating.value = "Advanced";
      deadliftCompare[3].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftFem.elite[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftFem.elite[1] * bodyweight
    ) {
      deadliftRating.value = "Elite";
      deadliftCompare[4].classList.add("table-primary");
    } else if (
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) >=
        deadliftFem.freak[0] * bodyweight &&
      oneRepPr(allLifts.deadliftLift, allLifts.deadliftRep) <=
        deadliftFem.freak[1] * bodyweight
    ) {
      deadliftRating.value = "World Class";
      deadliftCompare[5].classList.add("table-primary");
    } else {
      deadliftRating.value = "Invalid";
    }
  };

  if (gender === "m") {
    squatMax.value = `${oneRepPr(
      allLifts.squatLift,
      allLifts.squatRep
    )} ${metrics()}`;
    benchMax.value = `${oneRepPr(
      allLifts.benchLift,
      allLifts.benchRep
    )} ${metrics()}`;
    deadliftMax.value = `${oneRepPr(
      allLifts.deadliftLift,
      allLifts.deadliftRep
    )} ${metrics()}`;
    squatRatingM();
    benchRatingM();
    deadliftRatingM();
    totalMaxFunc();
    squatTable();
    benchTable();
    deadliftTable();
    resultMetrics();
    standardsH1.textContent = `Strength Standards for ${bodyweight} ${metrics()} Male`;
  } else {
    squatMax.value = `${oneRepPr(
      allLifts.squatLift,
      allLifts.squatRep
    )} ${metrics()}`;
    benchMax.value = `${oneRepPr(
      allLifts.benchLift,
      allLifts.benchRep
    )} ${metrics()}`;
    deadliftMax.value = `${oneRepPr(
      allLifts.deadliftLift,
      allLifts.deadliftRep
    )} ${metrics()}`;
    squatRatingF();
    benchRatingF();
    deadliftRatingF();
    totalMaxFunc();
    squatTableF();
    benchTableF();
    deadliftTableF();
    resultMetricsF();
    standardsH1.textContent = `Strength Standards for ${bodyweight} ${metrics()} Female`;
  }
};

submit.addEventListener("click", function () {
  calculateResults();
  submit.classList.add("hidden");
  results.classList.remove("hidden");
});

reset.addEventListener("click", function () {
  results.classList.add("hidden");
  submit.classList.remove("hidden");
  for (let i = 0; i < squatCompare.length; i++) {
    squatCompare[i].classList.remove("table-primary");
  }
  for (let i = 0; i < benchCompare.length; i++) {
    benchCompare[i].classList.remove("table-primary");
  }
  for (let i = 0; i < deadliftCompare.length; i++) {
    deadliftCompare[i].classList.remove("table-primary");
  }
});
