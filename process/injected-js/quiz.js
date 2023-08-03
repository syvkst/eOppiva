const quizRules = ".quiz{display:flex;flex-wrap:wrap;align-items:center;justify-items:left;width:90%;margin:1rem 5%;opacity:1;transition:background-color .5s,opacity .5s}.end-message{display:none}.quiz-change{opacity:0;left:-100%}.question{display:none}.question-title{flex:1 0 50%;font-size:1.2rem;font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);color:var(--sy_font_color);margin-bottom:1rem;padding-top:.6rem;padding-bottom:.6rem}.next-question{flex-basis:auto;height:fit-content;background-color:var(--sy_level_4);display:none;color:var(--sy_font_color);cursor:pointer;padding:.5rem;text-align:left;outline:0;width:fit-content;border:1px solid var(--sy_level_4);border-radius:1rem;transition:all .3s;margin-bottom:1rem}.next-question:active,.next-question:hover{border:1px solid var(--sy_level_4);background-color:transparent;outline:0;color:var(--sy_blue_regular)}.next-question:focus{border:1px solid var(--sy_level_4);outline:0}.next-question-show{display:block}.answers{flex-basis:100%}.option-display{background-color:var(--sy_level_4);color:var(--sy_font_color);cursor:pointer;padding:1rem;text-align:left;margin:.2rem 0;border:none;outline:0;border-radius:1rem;width:100%;transition:all .3s;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}.option-display:active,.option-display:hover{border:none;outline:0;background-color:var(--sy_red_regular)}.option-display:focus{border:none;outline:0}.option-correct{background-color:var(--sy_aipa_green);color:var(--sy_level_0);transform:scale(1.02)}.option-correct:hover{color:var(--sy_level_0);background-color:var(--sy_aipa_green)}.option-false{opacity:.5;transform:scale(.98)}.option-false:hover{background-color:var(--sy_level_4)}.title-results{color:var(--sy_blue_regular);font-size:1.4rem;margin-bottom:.5rem;padding:0}.answers-results{font-size:1.2rem;font-family:var(--sy_heading_font);font-weight:var(--sy_heading_weight);color:var(--sy_font_color)}.quiz-results{background-color:var(--sy_level_3);padding:2rem;border-radius:1rem;box-shadow:var(--sy_shadow_1_x) var(--sy_shadow_1_y) var(--sy_shadow_1_blur) var(--sy_shadow_1_spread) var(--sy_shadow_1_color),var(--sy_shadow_2_x) var(--sy_shadow_2_y) var(--sy_shadow_2_blur) var(--sy_shadow_2_spread) var(--sy_shadow_2_color)}";

class Answer {
  constructor(text, isCorrect) {
    this.text = text;
    this.isCorrect = isCorrect;
  }
}

class Question {
  title;
  answers = [];
}

class Quiz {
  id;
  currentQuestion = 0;
  score = 0;
  questions = [];

  constructor(id) {
    this.id = id;
  }
}

function endQuiz(quiz) {
  const element = document.getElementById(quiz.id);
  const title = element.querySelector(".question-title");
  const ansContainer = element.querySelector(".answers");
  const endMessage = element.querySelectorAll(".end-message");

  ansContainer.classList.add("answers-results");
  title.classList.add("title-results");
  element.classList.add("quiz-results");

  title.innerHTML = "TULOKSET";
  ansContainer.innerHTML = `Sait ${quiz.score}/${quiz.questions.length} pistettä.`;

  if (!endMessage || endMessage.length === 0) {
    return;
  }

  let pointMessage = "";

  if (endMessage.length === 1) {
    pointMessage = endMessage[0].innerHTML;
  } else {
    let points = 0;
    for (i = 0; i < endMessage.length; i++) {
      if ("points" in endMessage[i].dataset) {
        const msgPoint = parseInt(endMessage[i].dataset.points);
        if (msgPoint <= quiz.score && msgPoint >= points) {
          points = msgPoint;
          pointMessage = endMessage[i].innerHTML;
        }
      }
    }
  }

  if (pointMessage) {
    ansContainer.innerHTML = ansContainer.innerHTML + " " + pointMessage;
  }
}

function evaluateAnswer(quiz) {
  const element = document.getElementById(quiz.id);
  const answers = element.querySelector(".answers");

  for (const answer of answers.children) {
    if (answer.classList.contains("correct")) {
      answer.classList.add("option-correct");
    } else {
      answer.classList.add("option-false");
    }
  }

  element
    .querySelector(".next-question")
    .classList.toggle("next-question-show");
}

function displayQuestion(quiz) {
  const element = document.getElementById(quiz.id);
  const title = element.querySelector(".question-title");
  const ansContainer = element.querySelector(".answers");

  title.innerHTML = "";
  ansContainer.innerHTML = "";

  if (quiz.currentQuestion >= quiz.questions.length) {
    endQuiz(quiz);
    return;
  }

  const question = quiz.questions[quiz.currentQuestion];
  title.innerHTML = question.title;

  for (i = 0; i < question.answers.length; i++) {
    const answerButton = document.createElement("button");
    answerButton.classList.add("option-display");
    if (question.answers[i].isCorrect) {
      answerButton.classList.add("correct");
    }
    answerButton.innerHTML = question.answers[i].text;
    answerButton.onclick = function (e) {
      if (e.target.classList.contains("correct")) {
        quiz.score += 1;
      }
      evaluateAnswer(quiz);
    };

    ansContainer.appendChild(answerButton);
  }
}

function initializeQuizzes() {
  const quizzes = document.getElementsByClassName("quiz");
  for (i = 0; i < quizzes.length; i++) {
    const id = quizzes[i].id;
    if (!id) {
      continue;
    }

    const quiz = new Quiz(id);

    const questionContainer = document.createElement("p");
    questionContainer.classList.add("question-title");
    quizzes[i].appendChild(questionContainer);

    const transitionEnd = function () {
      const current = document.getElementById(quiz.id);
      displayQuestion(quiz);
      current.removeEventListener("transitionend", transitionEnd);
      current.classList.toggle("quiz-change");
      current
        .querySelector(".next-question")
        .classList.toggle("next-question-show");
    };

    const nextButton = document.createElement("button");
    nextButton.classList.add("next-question");
    nextButton.innerHTML = "Seuraava";
    nextButton.onclick = function () {
      quiz.currentQuestion += 1;
      const current = document.getElementById(quiz.id);
      current.addEventListener("transitionend", transitionEnd);
      current.classList.toggle("quiz-change");
    };
    quizzes[i].appendChild(nextButton);

    const answerContainer = document.createElement("div");
    answerContainer.classList.add("answers");
    quizzes[i].appendChild(answerContainer);

    const questions = quizzes[i].querySelectorAll(".question");
    for (j = 0; j < questions.length; j++) {
      const title = questions[j].querySelector(".title").innerText;
      const options = questions[j].querySelectorAll(".option");

      const question = new Question();
      question.title = title;

      for (k = 0; k < options.length; k++) {
        const answer = new Answer(
          options[k].innerHTML,
          options[k].classList.contains("correct")
        );
        question.answers.push(answer);
      }

      quiz.questions.push(question);
    }

    displayQuestion(quiz);
  }
}

insertStyle(quizRules);
initializeQuizzes();
