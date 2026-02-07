// ==================== ПРАКТИЧЕСКАЯ РАБОТА ====================

// 1. Объявление числовых переменных
let a = 15;
let b = 4;

// 2. Арифметические операции
let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;

// 3. Объявление строковых переменных
let firstName = "Дмитрий";
let lastName = "Корягин";

// 4. Объединение строк
let fullName = firstName + " " + lastName;

// 5. Вывод результатов в консоль
console.log("=== Результаты арифметических операций ===");
console.log("a =", a, "b =", b);
console.log("Сумма:", sum);
console.log("Разность:", difference);
console.log("Произведение:", product);
console.log("Частное:", quotient);
console.log("Имя:", firstName);
console.log("Фамилия:", lastName);
console.log("Полное имя:", fullName);

// ==================== УСЛОВИЯ ====================

// 6. Проверка переменной title
let title = "";

if (title === "") {
    console.log("Название задачи не указано");
} else {
    console.log("Задача:", title);
}

// 7. Проверка переменной tasks
let tasks = 2;

if (tasks === 0) {
    console.log("Список пуст");
} else if (tasks >= 1 && tasks <= 3) {
    console.log("Немного задач");
} else {
    console.log("Много задач");
}

// 8. Проверка переменной isCompleted
let isCompleted = false;

if (isCompleted) {
    console.log("Задача выполнена");
} else {
    console.log("Задача ещё в работе");
}

// 9. Проверка переменной urgent
let urgent = true;

if (tasks > 0 && urgent) {
    console.log("Есть срочные задачи");
} else if (tasks > 0 && !urgent) {
    console.log("Задачи есть, но они не срочные");
} else {
    console.log("Все задачи завершены");
}

// 10. Проверка ролей
let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
    console.log("Доступ разрешён");
} else {
    console.log("Доступ запрещён");
}



// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ ====================

console.log("\n=== СКИДКА В МАГАЗИНЕ ===");

let amount = 3500; // Меняйте это значение для тестирования

console.log("Сумма покупки:", amount, "рублей");

if (amount === 0) {
    console.log("Корзина пуста");
} else if (amount < 1000) {
    console.log("Скидка не применяется");
} else if (amount >= 1000 && amount < 5000) {
    console.log("Скидка 5%");
} else if (amount >= 5000) {
    console.log("Скидка 10%");
}

// Примеры для тестирования разных сценариев:
console.log("\n=== ТЕСТИРОВАНИЕ РАЗНЫХ СУММ ===");

let testAmounts = [0, 500, 1000, 2500, 5000, 7500];

for (let testAmount of testAmounts) {
    console.log("\nСумма:", testAmount, "рублей");
    
    if (testAmount === 0) {
        console.log("Корзина пуста");
    } else if (testAmount < 1000) {
        console.log("Скидка не применяется");
    } else if (testAmount >= 1000 && testAmount < 5000) {
        console.log("Скидка 5%");
    } else if (testAmount >= 5000) {
        console.log("Скидка 10%");
    }
}