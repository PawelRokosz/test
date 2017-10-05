let div1 = document.createElement('div');
let div2 = document.createElement('div');
let text1 = document.createTextNode('Top');
let text2 = document.createTextNode('Bottom');

div1.style.width = '100px';
div1.style.height = '100px';
div1.style.background = 'red';
div1.style.marginRight = '10px';

div2.style.width = '100px';
div2.style.height = '100px';
div2.style.background = 'green';

div1.appendChild(text1);
div2.appendChild(text2);

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.padding = '0';

document.body.appendChild(div1);
document.body.appendChild(div2);

showTopBar = () => {
  console.log('top');
}

showBottomBar = () => {
  console.log('bottom');
}

div1.addEventListener('click', showTopBar);
div2.addEventListener('click', showBottomBar);
