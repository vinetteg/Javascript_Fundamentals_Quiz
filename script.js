var startBtn = document.querySelector(".countdown");

//timer
var timeleft = 60;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML =
      timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);

//questions and functions to display questions
var questions = [
  {
    title: "What is Javascript?",
    choices: [
      "A programming language",
      "A bible scripture",
      "A type of film script",
    ],
    answer: "A programming language",
  },
  {
    title: "What does an array store?",
    choices: ["Light from the sun", "Values", "A string"],
    answer: "Values",
  },
  {
    title: "console.log() will _____ defined variables.",
    choices: ["Open", "Create", "Print"],
    answer: "Print",
  },
];

var questionIndex = 0;

function render(questionIndex) {
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
  console.log(render);

  //event listeners
  startBtn.addEventListener("click", function () {
    countdown();
  });
}
