const container = document.createElement('div');
const div1 = document.createElement('div');
const text1 = document.createTextNode('Show Bar');

showBar = () => {
  myBar.open();
}

container.classList.add('container');
div1.classList.add('div1');
div1.appendChild(text1);
container.appendChild(div1);
document.body.appendChild(container);

div1.addEventListener('click', showBar);
