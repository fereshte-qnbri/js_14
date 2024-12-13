/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/


const colors = ['red', 'aqua', 'orange', 'purple', 'lightgreen'];

const text = prompt("Enter a text: ");
let coloredText = "";

for (let i = 0; i < text.length; i++) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  coloredText += `<span style="color: ${randomColor}">${text[i]}</span>`;
}

const wordElement = document.getElementById('word');
wordElement.innerHTML = coloredText;