// This is the world best Idea.

const allGoals = document.querySelectorAll(".gola-likh");
const progressBar = document.getElementById("bar");
const progressLabel = document.getElementById("prog-label");
const dateChip = document.querySelector(".date-chip");
const inputfields = document.querySelectorAll(".task-input");

// LocalStorage Data
const puragoals =
  JSON.parse(localStorage.getItem("puragoals")) || {};

allGoals.forEach((goal) => {

  const input = goal.querySelector(".task-input");
  const gola = goal.querySelector(".gola");

  // Load Saved Data
  if (puragoals[input.id]) {

    input.value = puragoals[input.id].name;

    if (puragoals[input.id].completed) {
      gola.classList.add("completed");
      input.classList.add("struck");
    }

  }
  // Gola Click
  gola.addEventListener("click", () => {

    if (input.value === "") {
      alert("You have to fill the input first");
      return;
    }

    gola.classList.toggle("completed");
    input.classList.toggle("struck");

    // Progress Bar
    const completedGoals =
      document.querySelectorAll(".completed").length;

    progressLabel.innerText =
      `${completedGoals} / 3`;

    progressBar.style.width =
      `${(completedGoals / 3) * 100}%`;


    // yha se save data refresh hone ke badd bhii ye save krna hai ye yha se start hota hai.
     
    // Save Gola State
    puragoals[input.id] = {
      name: input.value,
      completed: gola.classList.contains("completed"),
    };

    localStorage.setItem(
      "puragoals",
      JSON.stringify(puragoals)
    );

  });

  // Save Input Data
  input.addEventListener("input", () => {
    
    puragoals[input.id] = {
      name: input.value,
      completed: gola.classList.contains("completed"),
    };

    localStorage.setItem(
      "puragoals",
      JSON.stringify(puragoals)
    );

  });

});

// Initial Progress Bar Load
const completedGoals =
  document.querySelectorAll(".completed").length;

progressLabel.innerText =
  `${completedGoals} / 3`;

progressBar.style.width =
  `${(completedGoals / 3) * 100}%`;


// Applying the exact date.

const today = new Date();

const dayNumber = today.getDay();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
dateChip.innerText = days[dayNumber];


