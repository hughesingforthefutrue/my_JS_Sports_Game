const shot1 = document.querySelector("#teamone-numshots");
const shot2 = document.querySelector("#teamtwo-numshots");
const goals1 = document.querySelector("#teamone-numgoals");

const goals2 = document.querySelector("#teamtwo-numgoals");
const shoot1 = document.querySelector("#teamone-shoot-button");

const reset = document.querySelector("#reset-button");

const numresets = document.querySelector("#num-resets");

let count = 0;
let num = 8;

function playSound() {
  document.getElementById("play").play();
}

reset.addEventListener("click", function () {
  goals1.innerHTML = 0;
  goals2.innerHTML = 0;
  shot1.innerHTML = 0;
  shot2.innerHTML = 0;
  count = Number(numresets.innerHTML) + 1;
  numresets.innerHTML = count;
  console.log("reset button clicked");
  if (goals1 >= goals2) {
    alert("Team-Biid-Wins");
  } else {
    alert("Team-Simmons-Wins");
  }
});

shoot1.addEventListener("click", function () {
  let num = Math.floor(Math.random() * 8);
  count = Number(shot1.innerHTML) + 1;
  console.log("shoot button clicked");
  shot1.innerHTML = count;
  if (num >= 4) {
    count = Number(goals1.innerHTML) + 1;
    goals1.innerHTML = count;
  }
});

const shoot2 = document.querySelector("#teamtwo-shoot-button");
shoot2.addEventListener("click", function () {
  let num = Math.floor(Math.random() * 8);
  count = Number(shot2.innerHTML) + 1;
  console.log("shoot button clicked");
  shot2.innerHTML = count;

  console.log(num);
  if (num >= 4) {
    count = Number(goals2.innerHTML) + 1;
    goals2.innerHTML = count;
  }
});
