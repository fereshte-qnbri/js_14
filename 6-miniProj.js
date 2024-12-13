//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red


const year = document.querySelector('h1 > span');
const challenges = document.querySelectorAll('li');



function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



setInterval(() => {
  year.style.color = getRandomColor();
}, 1000);



challenges.forEach((challenge, index) => {
  if (index < 2) {
    challenge.style.backgroundColor = 'green';
  } else if (index === 2) {
    challenge.style.backgroundColor = 'yellow';
  } else {
    challenge.style.backgroundColor = 'red';
  }
});