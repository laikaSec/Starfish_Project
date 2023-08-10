const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

let currentQuestionIndex = 0;

const questions = [ // Add more questions here
  {
    question: 'What is the KUDO flag in Starfish?',
    answers: [
      { text: 'Positive Feedback', correct: true },
      { text: 'Missing Assignment', correct: false },
      { text: 'Referral Needed', correct: false },
      { text: 'No Flag', correct: false }
    ]
  },
  
  {
    question: 'What is the TO_DO flag in Starfish',
    answers: [
      { text: 'No Flag', correct: false },
      { text: 'Referral Needed', correct: false },
      { text: 'Missing Assignment', correct: true },
      { text: 'Positive Feedback', correct: false }
    ]
  },

  {
    question: 'What is the REFERRAL flag in Starfish',
    answers: [
      { text: 'Missing Assignment', correct: false },
      { text: 'No Flag', correct: false },
      { text: 'Positive Feedback', correct: false },
      { text: 'Referral Needed', correct: true }
    ]
  },

  {
    question: 'What is the NULL flag in Starfish',
    answers: [
      { text: 'Referral Needed', correct: false }
      { text: 'Positive Feedback', correct: false }
      { text: 'Missing Assignment', correct: false }
      { text: 'No Flag', correct: true }
      ]
  }
];

startGame();

function startGame() {
  currentQuestionIndex = 0;
  showNextQuestion();
}

function showNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionContainer.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    button.addEventListener('click', () => selectAnswer(answer));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  if (answer.correct) {
    // Handle correct answer, such as updating the score
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showNextQuestion();
  } else {
    // Handle end of the game, such as showing a summary or final score
    alert('Game Over!'); // Example: Show a simple alert when the game ends
  }
}

