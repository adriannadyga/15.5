'use strict'

//funkcja konstruująca button, z parametrem text dla konstruktora
function Button(text) {
  this.text = text || 'Hello'; //przy braku podania argumentu domyślną wartością jest Hello
}

//metoda obsługująca tworzenie przycisku będąca prototypem
Button.prototype = {
  create: function() { //metoda tworząca przycisk na stronie
    var self = this;
    this.element = document.createElement('button');
    this.element.innerText = this.text;
    this.element.addEventListener('click', function() { //metoda wyświetlająca text po kliknięciu
      alert(self.text); //użycie self (sytuacja kiedy funkcja jest parametrem innej funkcji)
    })
    document.body.appendChild(this.element); //umieszczenie elementu w drzewie DOM
  }
}

var btn1 = new Button('Hello'); //wywołanie metody
//var btn2 = new Button('cześć');

btn1.create();
//btn2.create();