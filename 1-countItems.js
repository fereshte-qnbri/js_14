//Count the number of <li> in the countItems.html file and show the results in console.


const listItems = document.querySelectorAll('li');
const itemCount = listItems.length;

console.log(`Number of items in the list: ${itemCount}`);