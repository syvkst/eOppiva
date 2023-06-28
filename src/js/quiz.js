const quizRules = "# inject:../../process/min-styles/quiz.min.css -> <- end #";

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
