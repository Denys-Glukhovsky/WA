class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name) {
                                            //Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new Rabbit
      super(name)                          // Как рекомендовано браузером, возвращаем классу Rabbit св-во name родительского класса Animal с пом. метода  super        
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");

  console.log(rabbit.name)    // Белый кролик. Работает..
  
    
