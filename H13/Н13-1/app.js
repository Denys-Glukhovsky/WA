let hamster = {
    stomach: [],
    eat(food) {
        this.stomach.push(food);
    }
    };
    let speedyGonzales = {
        stomach: [],    
    __proto__: hamster
    
    };
    let lazyBastard = {
        stomach: [],
    __proto__: hamster
    };
    // Этот хомяк нашёл еду
    speedyGonzales.eat("apple");
    
    console.log(speedyGonzales.stomach ); // apple
    // У этого хомяка тоже есть еда. Почему? Исправьте
    console.log(lazyBastard.stomach ); // apple
    
// Оба хомяка наедались одновременно, т.к. при вызове ф-ции eat(), он добавляла 
// "apple" в массив stomach: [] прототипа hamster, а уже от него, массив stomach: []
// наследовался обоими хомяками. 
// Для востоновления классовой справедливости, нужно присвоить каждому хомяку свой желудок,
// ну или хотя бы быстрому.. Тогда, при вызове ф-ции eat(), она будет находить массив stomach 
// у каждого конкретного хомяка, а не у их общего прототипа, и добавлять "apple" в заслужевающий 
// того массив stomach
