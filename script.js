let a = 10;
let b = 5;

let sum = a + b;
let difference = a - b;

console.log(sum);
console.log(difference);

// ====== Урок: операторы и условия ====== //
let title = "";
if(title === ""){
    console.log("Название задачи не указано");
} else{
    console.log("Задача:", title );
}

let tasks = 5;
if(tasks === 0){
    console.log("Список пуст");
} else if(tasks <= 3){
    console.log("Немного задач")
} else{
    console.log("Многозадач")
}