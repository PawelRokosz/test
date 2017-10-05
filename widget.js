class Bar {
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

    this.content = document.createElement('div');
    this.modalContainer.appendChild(this.content);
    this.content.innerHTML = this.options.message;

    const okButton = document.createElement('button');
    okButton.classList.add('ok-button');
    this.modalContainer.appendChild(okButton);
    const okText = document.createTextNode('Get widgets');
    okButton.appendChild(okText);

    okButton.addEventListener('click', this.ok.bind(this));

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-button');
    this.modalContainer.appendChild(closeButton);
    const closeText = document.createTextNode('x');
    closeButton.appendChild(closeText);

    closeButton.addEventListener('click', this.close.bind(this));
  }

  open() {
    if (this.options.position === 'top') {
      this.modalContainer.style.position = 'relative';
      this.modalContainer.style.top = 0;
    } else {
      this.modalContainer.style.position = 'absolute';
      this.modalContainer.style.bottom = 0;
    }
    this.modalContainer.classList.add('open');
  }

  close() {
    this.options.close();
  }

  ok() {
    this.options.clickOk();
  }
}
