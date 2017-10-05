const container = document.createElement('div');
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const text1 = document.createTextNode('Top');
const text2 = document.createTextNode('Bottom');

class Modal {
  constructor() {
    this.modalContainer = document.createElement('div');
    this.modalContainer.classList.add('modal');
    document.body.appendChild(this.modalContainer);

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    this.modalContainer.appendChild(closeButton);
    const closeText = document.createTextNode('x');
    closeButton.appendChild(closeText);

    closeButton.addEventListener('click', this.close.bind(this));

    this.content = document.createElement('div');
    this.modalContainer.appendChild(this.content);
  }

  set html (value) {
    this.content.innerHTML = value;
  }

  open () {
    this.modalContainer.classList.add('open');
  }

  close () {
    this.modalContainer.classList.remove('open');
  }
}

let m = new Modal();

showTopBar = () => {
  console.log('top');
  m.html = `msg here - Top bar`;
  m.open();
}

showBottomBar = () => {
  console.log('bottom');
  m.html = `msg here - Bottom bar`;
  m.open();
}

container.classList.add('container');

div1.classList.add('div1');
div2.classList.add('div2');

div1.appendChild(text1);
div2.appendChild(text2);

container.appendChild(div1);
container.appendChild(div2);

document.body.appendChild(container);

div1.addEventListener('click', showTopBar);
div2.addEventListener('click', showBottomBar);
