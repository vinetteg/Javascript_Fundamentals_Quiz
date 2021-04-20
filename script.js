var startBtn = document.querySelector("#StartBtn");

//timer
var timeleft = 60;
function timer() {
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
}

//questions and functions to display questions
var questions = [
  {
    question: "What is Javascript?",
    choices: [
      "A programming language",
      "A bible scripture",
      "A type of film script",
    ],
    answer: "A programming language",
  },
  {
    question: "What does an array store?",
    choices: ["Light from the sun", "Values", "A string"],
    answer: "Values",
  },
  {
    question: "console.log() will _____ defined variables.",
    choices: ["Open", "Create", "Print"],
    answer: "Print",
  },
];

var questionIndex = 0;
var score = 0;
var ulCreate = document.createElement("ul");
var questionsDiv = document.querySelector("#container");

function render(questionIndex) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].question;
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

  function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
      var create = document.createElement("div");
      create.setAttribute("id", "create");

      if (element.textContent == questions[questionIndex].answer) {
        score++;
        create.textContent = "Correct! " + questions[questionIndex].answer;
        questionIndex++;
        render(questionIndex);
      } else {
        timeleft = timeleft - 10;
        create.textContent = "Wrong! Please choose a different answer.";
        questionIndex++;
        render(questionIndex);
      }
    }
  }
}

//save input area

var saveBtn = document.querySelector("#save");
var userInitialsSpan = document.querySelector("#initials");

renderLastScore();

function renderLastScore() {
  var initials = localStorage.getItem("initials");
  userInitialsSpan.textContent = initials;
}



//event listeners

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  renderLastScore()


  localStorage.setItem("initials", initials)


startBtn.addEventListener("click", function () {
  timer();
  render(questionIndex)}

};