const scoreFormEl = document.getElementById("scoreForm");
const weightFormEl = document.getElementById("weightForm");
const scoreEl = document.getElementById("score");
const totalWeightEl = document.getElementById("totalWeight");
const scoreCalculateEl = document.getElementById("scoreCalculate");

let animationWeight;
let soundWeight;
let storyWeight;
let characterWeight;
let valueWeight;
let enjoymentWeight;

scoreFormEl.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(scoreFormEl);
  const animation = formData.get("animation");
  const sound = formData.get("sound");
  const story = formData.get("story");
  const character = formData.get("character");
  const value = formData.get("value");
  const enjoyment = formData.get("enjoyment");

  const total =
    animation * animationWeight +
    sound * soundWeight +
    story * storyWeight +
    character * characterWeight +
    value * valueWeight +
    enjoyment * enjoymentWeight;

  const score = total / 100;
  scoreEl.value = score;
};

weightFormEl.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(weightFormEl);
  animationWeight = Number(formData.get("animationWeight"));
  soundWeight = Number(formData.get("soundWeight"));
  storyWeight = Number(formData.get("storyWeight"));
  characterWeight = Number(formData.get("characterWeight"));
  valueWeight = Number(formData.get("valueWeight"));
  enjoymentWeight = Number(formData.get("enjoymentWeight"));

  const total =
    animationWeight +
    soundWeight +
    storyWeight +
    characterWeight +
    valueWeight +
    enjoymentWeight;

  if (total === 100) {
    scoreCalculateEl.removeAttribute("disabled");
  } else {
    scoreCalculateEl.setAttribute("disabled", true);
    window.alert("Total weight should be 100.");
  }

  totalWeightEl.value = total;
};
