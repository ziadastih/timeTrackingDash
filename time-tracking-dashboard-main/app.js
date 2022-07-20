const data = [
  {
    title: "Work",

    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",

    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const daily = document.getElementById("daily");
const monthly = document.getElementById("monthly");
const weekly = document.getElementById("weekly");
const mainWork = document.querySelector(".main-worked");
const mainPlay = document.querySelector(".main-played");
const mainStudy = document.querySelector(".main-studied");
const mainExercise = document.querySelector(".main-exercised");
const mainSocial = document.querySelector(".main-social");
const mainCare = document.querySelector(".main-care");
const lastWork = document.querySelector(".last-worked");
const lastPlay = document.querySelector(".last-played");
const lastStudy = document.querySelector(".last-studied");
const lastExercise = document.querySelector(".last-exercised");
const lastSocial = document.querySelector(".last-social");
const lastCare = document.querySelector(".last-care");

window.addEventListener("DOMContentLoaded", function () {
  monthly.classList.add("selected");
  mainWork.textContent = `${data[0].timeframes.monthly.current}hrs`;
  mainPlay.textContent = `${data[1].timeframes.monthly.current}hrs`;
  mainStudy.textContent = `${data[2].timeframes.monthly.current}hrs`;
  mainExercise.textContent = `${data[3].timeframes.monthly.current}hrs`;
  mainSocial.textContent = `${data[4].timeframes.monthly.current}hrs`;
  mainCare.textContent = `${data[5].timeframes.monthly.current}hrs`;

  // ===========last data=====================
  lastWork.textContent = `Last month - ${data[0].timeframes.monthly.previous}hrs`;
  lastPlay.textContent = `Last month - ${data[1].timeframes.monthly.previous}hrs`;
  lastStudy.textContent = `Last month - ${data[2].timeframes.monthly.previous}hrs`;
  lastExercise.textContent = `Last month - ${data[3].timeframes.monthly.previous}hrs`;
  lastSocial.textContent = `Last month - ${data[4].timeframes.monthly.previous}hrs`;
  lastCare.textContent = `Last month - ${data[5].timeframes.monthly.previous}hrs`;
});

monthly.addEventListener("click", function () {
  monthly.classList.add("selected");
  daily.classList.remove("selected");
  weekly.classList.remove("selected");
  mainWork.textContent = `${data[0].timeframes.monthly.current}hrs`;
  mainPlay.textContent = `${data[1].timeframes.monthly.current}hrs`;
  mainStudy.textContent = `${data[2].timeframes.monthly.current}hrs`;
  mainExercise.textContent = `${data[3].timeframes.monthly.current}hrs`;
  mainSocial.textContent = `${data[4].timeframes.monthly.current}hrs`;
  mainCare.textContent = `${data[5].timeframes.monthly.current}hrs`;

  // ===========last data=====================
  lastWork.textContent = `Last month - ${data[0].timeframes.monthly.previous}hrs`;
  lastPlay.textContent = `Last month - ${data[1].timeframes.monthly.previous}hrs`;
  lastStudy.textContent = `Last month - ${data[2].timeframes.monthly.previous}hrs`;
  lastExercise.textContent = `Last month - ${data[3].timeframes.monthly.previous}hrs`;
  lastSocial.textContent = `Last month - ${data[4].timeframes.monthly.previous}hrs`;
  lastCare.textContent = `Last month - ${data[5].timeframes.monthly.previous}hrs`;
});

daily.addEventListener("click", function () {
  monthly.classList.remove("selected");
  daily.classList.add("selected");
  weekly.classList.remove("selected");
  mainWork.textContent = `${data[0].timeframes.daily.current}hrs`;
  mainPlay.textContent = `${data[1].timeframes.daily.current}hrs`;
  mainStudy.textContent = `${data[2].timeframes.daily.current}hrs`;
  mainExercise.textContent = `${data[3].timeframes.daily.current}hrs`;
  mainSocial.textContent = `${data[4].timeframes.daily.current}hrs`;
  mainCare.textContent = `${data[5].timeframes.daily.current}hrs`;

  // ===========last data=====================
  lastWork.textContent = `Last day - ${data[0].timeframes.daily.previous}hrs`;
  lastPlay.textContent = `Last day - ${data[1].timeframes.daily.previous}hrs`;
  lastStudy.textContent = `Last day - ${data[2].timeframes.daily.previous}hrs`;
  lastExercise.textContent = `Last day - ${data[3].timeframes.daily.previous}hrs`;
  lastSocial.textContent = `Last day - ${data[4].timeframes.daily.previous}hrs`;
  lastCare.textContent = `Last day - ${data[5].timeframes.daily.previous}hrs`;
});
weekly.addEventListener("click", function () {
  monthly.classList.remove("selected");
  daily.classList.remove("selected");
  weekly.classList.add("selected");
  mainWork.textContent = `${data[0].timeframes.weekly.current}hrs`;
  mainPlay.textContent = `${data[1].timeframes.weekly.current}hrs`;
  mainStudy.textContent = `${data[2].timeframes.weekly.current}hrs`;
  mainExercise.textContent = `${data[3].timeframes.weekly.current}hrs`;
  mainSocial.textContent = `${data[4].timeframes.weekly.current}hrs`;
  mainCare.textContent = `${data[5].timeframes.weekly.current}hrs`;

  // ===========last data=====================
  lastWork.textContent = `Last week - ${data[0].timeframes.weekly.previous}hrs`;
  lastPlay.textContent = `Last week - ${data[1].timeframes.weekly.previous}hrs`;
  lastStudy.textContent = `Last week - ${data[2].timeframes.weekly.previous}hrs`;
  lastExercise.textContent = `Last week - ${data[3].timeframes.weekly.previous}hrs`;
  lastSocial.textContent = `Last week - ${data[4].timeframes.weekly.previous}hrs`;
  lastCare.textContent = `Last week - ${data[5].timeframes.weekly.previous}hrs`;
});
