


function Calculator(a, b) {

   this.read = function(a, b) {
       this.a = a;
       this.b = b;    
    };
    this.sum = function(a, b) {
        return this.a + this.b;
        
    };
    this.mul = function(a, b) {
        return this.a * this.b
    };
} 

let calculator = new Calculator();

calculator.read(5, 10)
calculator.sum()
calculator.mul()

console.log(calculator)
console.log(calculator.sum())
console.log(calculator.mul())    // Всё работает..... 




    // Object.assign(calculator, {
    //     x: a,                              Оказалось не нужным..
    //     y: b