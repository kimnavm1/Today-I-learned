const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

/*
let votesInteresting = 23;
let vostesMindlowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + vostesMindlowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
*/
function calFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Impossible year";
}
const age1 = calFactAge(2015);
console.log(age1);
console.log(calFactAge(2020));
console.log(calFactAge(1990));
console.log(calFactAge(2037));
let votesInteresting = 20;
let vostesMindlowing = 0;

if (votesInteresting === vostesMindlowing) {
  alert("This fact is equally and intering and mindblowing");
} else if (votesInteresting > vostesMindlowing) {
  console.log("Intersting fact!");
} else if (votesInteresting < vostesMindlowing) {
  console.log("Mindblowing fact!!");
}

//falsy values: 0, "", null, undefined
//TRUTH VALUEl: everyting else.....
if (vostesMindlowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so special....");
}
