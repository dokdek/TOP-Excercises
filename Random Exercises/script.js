const container = document.querySelector('#container');
const contentDiv = document.querySelector(".content");

const paragraph = document.createElement('p');

paragraph.textContent = `Hey I\'m red!`;
paragraph.style.color = `red`;
contentDiv.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.textContent = `I'\m a blue h3`;
h3.style.color = 'blue';
contentDiv.appendChild(h3);

const coloredDiv = document.createElement('div');

coloredDiv.style.cssText = 'border-style: solid; border-color: black; background-color: pink;';

const heading1 = document.createElement('h1');
heading1.textContent = `I'\m in a div`;
const paragraph2 = document.createElement('p');
paragraph2.textContent = `Me too`;

coloredDiv.appendChild(heading1);
coloredDiv.appendChild(paragraph2);

container.appendChild(coloredDiv);