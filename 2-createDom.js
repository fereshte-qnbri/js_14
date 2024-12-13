//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// 1
const firstParagraph = document.querySelector('p');

// 2
const secondParagraph = document.getElementById('second-paragraph');

// 3
const allParagraphs = document.querySelectorAll('p');

// 4
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
  });

// 5
allParagraphs[3].textContent ="new para"

// 6
allParagraphs[0].id = 'first-paragraph';
allParagraphs[1].className = 'second-paragraph';
allParagraphs[2].setAttribute('id', 'third-paragraph');
allParagraphs[3].setAttribute('class', 'fourth-paragraph');

// 7
allParagraphs.forEach((paragraph, index) => {
    if (index % 2 === 0) {
      paragraph.style.color = 'green';
    } else {
      paragraph.style.color = 'red';
    }
    paragraph.style.fontSize = '20px';
    paragraph.style.fontFamily = 'Arial';
    paragraph.style.border = '1px solid black';
    paragraph.style.padding = '10px';
  });
