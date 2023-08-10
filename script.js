const questionContainer = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
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
      { text: 'Referral Needed', correct: false },
      { text: 'Positive Feedback', correct: false },
      { text: 'Missing Assignment', correct: false },
      { text: 'No Flag', correct: true }
    ]
  }
];

startGame();

function startGame() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.addEventListener('click', nextQuestion);
  nextButton.style.display = 'none';
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
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(answer) {
  const correct = answer.correct;
  if (correct) score++;
  document.querySelectorAll('.btn').forEach(button => {
    if (button.textContent === answer.text) {
      button.classList.add(correct ? 'correct' : 'wrong');
    }
    button.disabled = true;
  });
  nextButton.style.display = 'block'; // Show the Next button
}

function nextQuestion() {
  console.log('nextQuestion function called'); // Debug log
  currentQuestionIndex++;
  nextButton.style.display = 'none'; // Hide the Next button
  if (currentQuestionIndex < questions.length) {
    console.log('Showing next question'); // Debug log
    showNextQuestion();
  } else {
    alert('Game Over! Your score: ' + score + '/' + questions.length);
  }
}
