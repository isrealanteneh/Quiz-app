const quizData = [
  {
    question: "what is my real name",
    a: "mike",
    b: "jhon",
    c: "isreal",
    d: "melkamu",
    answer: "c",
  },
  {
    question: "what is my pro",
    a: "medcine",
    b: "soft Ware",
    c: "COTM",
    d: "IT",
    answer: "d",
  },
  {
    question: "where did i learn collage",
    a: "debre markos",
    b: "Addis Abeba",
    c: "hawassa",
    d: "bahr dar",
    answer: "a",
  },
  {
    question: "what is my hobbie",
    a: "CODDING",
    b: "eating",
    c: "movie",
    d: "animi",
    answer: "a",
  },
];
const question = document.getElementById("question");
const choice_a = document.getElementById("choice_a");
const choice_b = document.getElementById("choice_b");
const choice_c = document.getElementById("choice_c");
const choice_d = document.getElementById("choice_d");
const subBtn = document.getElementById("submit");
const userInput = document.querySelectorAll("input[type=radio");
const quizBOx = document.querySelector(".quizCont");
let currentQuiz = 0;
let answer;
loadQuiz();
function loadQuiz() {
  question.innerText = quizData[currentQuiz].question;
  choice_a.innerText = quizData[currentQuiz].a;
  choice_b.innerText = quizData[currentQuiz].b;
  choice_c.innerText = quizData[currentQuiz].c;
  choice_d.innerText = quizData[currentQuiz].d;
}
subBtn.addEventListener("click", counter);

function checkResult() {}
userInput.forEach((inp) => {
  inp.addEventListener("change", (e) => {
    if (e.target.id == quizData[currentQuiz].answer) {
      answer = true;
      if (answer) {
        subBtn.addEventListener("click", () => {
          alert("yeah you got it!");
        });
      }
    } else {
      answer = false;
      if (answer) {
        subBtn.addEventListener("click", () => {
          alert("Oops you missed");
        });
      }
    }
  });
});

function counter() {
  if (currentQuiz < quizData.length - 1) {
    currentQuiz++;
    loadQuiz();
  } else {
    alert("you finshed the questions");
  }
}

function display() {
  let disp = document.createElement("div");
  disp.style.width = 300 + "px";
  disp.style.height = 100 + "px";
  disp.style.backgroundColor = "#fff";
  disp.style.position = "absolute";
  quizBOx.appendChild(disp);
}
// display();
