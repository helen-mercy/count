const  star=document.getElementById("star");
const option=document.getElementById("option");
const uni=document.getElementById("uni");
let correct=0;
let unihei=20;

 function  questionslist(){
    option.innerHTML="";
    star.innerHTML="";
    const numStar=Math.floor(Math.random()*4)+1;
    correct=numStar;
    for(let i=0;i<numStar;i++){
        const stars=document.createElement("img");
        stars.src="images/star.png";
        star.appendChild(stars);
    }
  const wrong = generateWrongAnswer(correct);
  const choices = shuffle([correct, wrong]);

  choices.forEach((num) => {
    const btn = document.createElement("button");
    btn.textContent = num;
    btn.onclick = () => checkAnswer(num);
    options.appendChild(btn);
  });
}
function checkAnswer(selected) {
  if (selected === correct) {
     moveuni();
    setTimeout(generateQuestion, 1500);
  } }
  function moveuni() {
  balloonHeight += 60;
  balloon.style.bottom = `${balloonHeight}px`;
}

generateQuestion();