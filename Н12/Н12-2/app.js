let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    };
    
    const figures = Object.values(salaries) //  Создаём новый массив включающий все значения из объекта salaries. Значения получаем с пом.метода Object.values()
    
    const sum = figures.reduce((x, y) => x + y);   // Суммируем все значения из массива figures с пом.метода reduce()

    console.log(sum);    // Проверяем правильность решения(just in case). Значение sum = 390 ч.т.д.  #eassssy

    

    const sum2 = Object.values(salaries).reduce((x, y) => x + y);  // Так, тоже работает, но читается хуже
    console.log(sum2);