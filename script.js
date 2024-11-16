let a = 10;

//Объект -набор свойств
//Объект ОБЪЯВЛЯЕТ С ПОМОЩЬЮ ФИГУРНЫХ СКОБОК
let obj = {};
/*Объект-это специальный тип данныхбпозволяющий хранить в переменной сразу несколько значений.
Хранятся эти значения в свойствах объекта.
*/
let user = {
    name: "Alex",
    lastName: "lvanov",
    age: 30
}

//Обрфщение к свойствам объкта
//1
console.log(user.name);
//2
console.log(user['name']);

let userName = 'name';
console.log(user[userName]);
//Изменение
user.age = 35;
console.log(user);

user.work = "programmer"
console.log(user.work);

//ОБЪЕКТ АВТОМОБИЛЬ
let car = {
    mark: "Toeota",
    model: "Camry",

    accelerate: function () {
        return "Автомобиль едет";
    },
    brake() {
        return "Автомобиль стоит"
    }
    //Это одно итоже^accelerate

}
color: "red"

//Метод- функция внутри объекта
console.log(car.accelerate());
console.log(car);

delete car.color;
console.log(car);


let car2 = {
    mark: "Toeota",
    model: "Camry",

    accelerate: function () {
        return "Автомобиль едет";
    },
    brake() {
        return "Автомобиль стоит"
    }
    //Это одно итоже^accelerate

}
color: "red"
//Метод- функция внутри объекта
console.log(car2.accelerate());
console.log(car2);

delete car2.color;
console.log(car2);

console.log(car == car2);
let car2 = car;
