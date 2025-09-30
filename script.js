const star = document.getElementById("star");
const option = document.getElementById("option");
const uni = document.getElementById("uni");

let correct = 0;
let balloonLeft = 30;    
let balloonBottom = 40;  

function generateQuestion() {
  option.innerHTML = "";
  star.innerHTML = "";

  const numStars = Math.floor(Math.random() * 5) + 2;
  correct = numStars;

  for (let i = 0; i < numStars; i++) {
    const stars = document.createElement("img");
    stars.src = "images/star.png";
    stars.alt = "star";
    star.appendChild(stars);
  }

  const wrong = generateWrongAnswer(correct);
  const choices = shuffle([correct, wrong]);

  choices.forEach((num) => {
    const btn = document.createElement("button");
    btn.textContent = num;
    btn.onclick = () => checkAnswer(num);
    option.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === correct) {
    moveUnicorn();
    setTimeout(generateQuestion, 1200);
  }
}

function moveUnicorn() {
  balloonLeft += 80;     
  balloonBottom += 40;   

  uni.style.left = `${balloonLeft}px`;
  uni.style.bottom = `${balloonBottom}px`;

  const maxLeft = 910;   
  if (balloonLeft >= maxLeft) {
    setTimeout(showVictoryScreen, 1000);
  }
}

function showVictoryScreen() {
  const modal = document.getElementById('victoryModal');
  modal.style.display = 'flex';
  
}
document.getElementById('nextBtn').onclick = () => {
  document.getElementById('victoryModal').style.display = 'none';
  resetGame();
};
function resetGame() {
  balloonLeft = 30;
  balloonBottom = 40;
  uni.style.left = `${balloonLeft}px`;
  uni.style.bottom = `${balloonBottom}px`;
  generateQuestion();
}

function generateWrongAnswer(correct) {
  let wrong;
  do {
    wrong = Math.floor(Math.random() * 8) + 2;
  } while (wrong === correct);
  return wrong;
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

generateQuestion();
