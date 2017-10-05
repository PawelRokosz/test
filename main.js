const container = document.createElement('div');
const div1 = document.createElement('div');
const text1 = document.createTextNode('Show Bar');

class Modal {
  constructor() {

    let defaults = {
      message: 'message',
      close: function(){alert('pushed x')},
      clickOk: function(){alert('pushed ok')},
      position: 'top'
    }

    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    function extendDefaults(source, properties) {
      var property;
      for (property in properties) {
        if (properties.hasOwnProperty(property)) {
          source[property] = properties[property];
        }
      }
      return source;
    }

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

    this.content.innerHTML = this.options.message;
  }

  open () {
    if (this.options.position === 'top') {
      this.modalContainer.style.position = 'relative';
      this.modalContainer.style.top = 0;
      this.modalContainer.style.transition = 'height 0.5s ease';
    } else {
      this.modalContainer.style.position = 'absolute';
      this.modalContainer.style.bottom = 0;
    }
    this.modalContainer.classList.add('open');
  }

  close () {
    this.options.close();
  }
}

let m = new Modal({
  message: 'asd',
  position: 'top'
});

showBar = () => {
  m.open();
}

container.classList.add('container');
div1.classList.add('div1');
div1.appendChild(text1);
container.appendChild(div1);
document.body.appendChild(container);

div1.addEventListener('click', showBar);
