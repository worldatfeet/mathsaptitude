let currentQuestion = 0;
let score = 0;
let quizCompleted = false;

const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["A. 4", "B. 5", "C. 6"],
    correctAnswer: 0
  },
  {
    question: "What is 3 x 7?",
    answers: ["A. 10", "B. 21", "C. 15"],
    correctAnswer: 1,
  },
  {
    question: "What is 8 - 3?",
    answers: ["A. 2", "B. 5", "C. 6"],
    correctAnswer: 1,
  },
  {
    question: "What is 5 + 5?",
    answers: ["A. 10", "B. 15", "C. 20"],
    correctAnswer: 0,
  },
  {
    question: "What is 10 / 2?",
    answers: ["A. 2", "B. 5", "C. 10"],
    correctAnswer: 1,
  },
  {
    question: "What is 3 + 3?",
    answers: ["A. 6", "B. 7", "C. 8"],
    correctAnswer: 0,
  },
  {
    question: "What is 4 x 4?",
    answers: ["A. 12", "B. 16", "C. 20"],
    correctAnswer: 1,
  },
  {
    question: "What is 12 / 4?",
    answers: ["A. 2", "B. 3", "C. 4"],
    correctAnswer: 1,
  },
  {
    question: "What is 7 - 2?",
    answers: ["A. 3", "B. 4", "C. 5"],
    correctAnswer: 2,
  },
  {
    question: "What is 6 x 2?",
    answers: ["A. 10", "B. 12", "C. 14"],
    correctAnswer: 1,
  }
];

function displayQuestion() {
  const questionElement = document.getElementById('question');
  const answersList = document.getElementById('answers');
  const nextButton = document.getElementById('next-button');

  if (quizCompleted) {
    questionElement.textContent = "Quiz Completed!";
    answersList.innerHTML = `Your score is: ${score}`;
    nextButton.textContent = 'Next'; 
    nextButton.style.display = 'block';
    nextButton.addEventListener('click', () => {
      window.location.href = 'https://www.flipkart.com/';
    });
  } else if (currentQuestion < questions.length) {
    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
    answersList.innerHTML = '';

    questions[currentQuestion].answers.forEach((answer, index) => {
      const listItem = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = answer;
      button.addEventListener('click', () => checkAnswer(index));
      listItem.appendChild(button);
      answersList.appendChild(listItem);
    });

    nextButton.style.display = 'none';
  } else {
    // Handle quiz completion
  }
}

function checkAnswer(userAnswer) {
  if (userAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    quizCompleted = true;
  }

  displayQuestion();
}

function nextQuestion() {
  currentQuestion = 0;
  quizCompleted = false;
  score = 0;
  displayQuestion();
}

displayQuestion();