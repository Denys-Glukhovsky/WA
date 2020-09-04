// Да, возможно. Две ф-ции могут вернуть один и тот же объект, если обе эти ф-ции, одновременно, имеют к нему доступ.

let obj = {};

function A() { 
    return obj; 
}
function B() { 
    return obj; 
}

let a = new A;
let b = new B;

alert(a == b); // Выводит - true
     
    
