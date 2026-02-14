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

// 7. Проверка переменной iff
let iff = 2;

if (iff === 0) {
    console.log("Список пуст");
} else if (iff >= 1 && iff <= 3) {
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

if (iff > 0 && urgent) {
    console.log("Есть срочные задачи");
} else if (iff > 0 && !urgent) {
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


let cities = ["Москва", "Париж", "Питер", "Токио"];
cities[2] = "Лондон";
console.log(cities)

let task = {
    id: 1,
    title: "Купить молоко",
    status: "активна"
};
console.log(task.id);;
console.log(task.title);
console.log(task.status);

let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Сделать уроки", status: "активна"},
];
console.log(tasks[0].title);
console.log(tasks[1].status);

tasks[0].status = "выполнена";
console.log(tasks[0]);

task.push({id: 4, title: "Прогулка", status: "активна"});
console.log(tasks);

let user = {
    name: "Анна",
    tasks: tasks
};
console.log(user.name);
console.log(user.tasks.length);


// ==================== ПРАКТИЧЕСКАЯ РАБОТА ====================
console.log("=== ПРАКТИЧЕСКАЯ РАБОТА ===");

// 1. Функция sum(a, b) - возвращает сумму двух чисел
function sum(a, b) {
    return a + b;
}

console.log("\n1. Функция sum(a, b):");
console.log("sum(5, 3) =", sum(5, 3));
console.log("sum(10, -2) =", sum(10, -2));
console.log("sum(0, 7) =", sum(0, 7));

// 2. Функция max(a, b) - возвращает большее из двух чисел
function max(a, b) {
    return a > b ? a : b;
}

console.log("\n2. Функция max(a, b):");
console.log("max(5, 3) =", max(5, 3));
console.log("max(-5, -3) =", max(-5, -3));
console.log("max(10, 10) =", max(10, 10));

// 3. Функция printTask(title, status) - форматированная строка
function printTask(title, status) {
    return `Задача: ${title} | Статус: ${status}`;
}

console.log("\n3. Функция printTask(title, status):");
console.log(printTask("Купить продукты", "в процессе"));
console.log(printTask("Сделать домашку", "не начата"));
console.log(printTask("Позвонить маме", "выполнена"));

// 4. Функция isTaskDone(status) - проверка статуса
function isTaskDone(status) {
    return status.toLowerCase() === "выполнена";
}

console.log("\n4. Функция isTaskDone(status):");
console.log("isTaskDone('выполнена') =", isTaskDone("выполнена"));
console.log("isTaskDone('ВЫПОЛНЕНА') =", isTaskDone("ВЫПОЛНЕНА"));
console.log("isTaskDone('в процессе') =", isTaskDone("в процессе"));

// 5. Функция greetUser(name) - приветствие
function greetUser(name) {
    return `Добро пожаловать, ${name}!`;
}

console.log("\n5. Функция greetUser(name):");
console.log(greetUser("Анна"));
console.log(greetUser("Иван Петров"));
console.log(greetUser("Команда разработки"));

// 6. Функция taskSummary(total, done) - сводка задач
function taskSummary(total, done) {
    const active = total - done;
    return `Всего: ${total} | Выполнено: ${done} | Активных: ${active}`;
}

console.log("\n6. Функция taskSummary(total, done):");
console.log(taskSummary(10, 4));-
console.log(taskSummary(5, 5));
console.log(taskSummary(3, 0));

// 7. Массив из 5 чисел
console.log("\n7. Массив из 5 чисел:");
const numbers = [10, 20, 30, 40, 50];
console.log("Массив numbers:", numbers);
console.log("Первый элемент:", numbers[0]);
console.log("Последний элемент:", numbers[numbers.length - 1]);

// 8. Массив из 4 строк (города)
console.log("\n8. Массив из 4 строк (города):");
const cities = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"];
console.log("Исходный массив:", cities);
cities[2] = "Новосибирск"; 
console.log("После изменения:", cities);

// 9. Объект task
console.log("\n9. Объект task:");
const task3 = {
    id: 1,
    title: "Изучить JavaScript",
    status: "в процессе"
};
console.log("Объект task:", task);
console.log("task.id =", task.id);
console.log("task.title =", task.title);
console.log("task.status =", task.status);

// 10. Массив tasks из объектов-задач
console.log("\n10. Массив tasks из объектов-задач:");
const tasks = [
    {
        id: 1,
        title: "Сделать домашнюю работу",
        status: "в процессе"
    },
    {
        id: 2,
        title: "Купить продукты",
        status: "не начата"
    },
    {
        id: 3,
        title: "Позвонить другу",
        status: "выполнена"
    }
];
console.log("Массив tasks:", tasks);
console.log("Название первой задачи:", tasks[0].title);
console.log("Статус второй задачи:", tasks[1].status);

// 11. Изменение статуса первой задачи
console.log("\n11. Изменение статуса первой задачи:");
console.log("До изменения:", tasks[0].status);
tasks[0].status = "выполнена";
console.log("После изменения:", tasks[0].status);

// 12. Добавление новой задачи в конец массива
console.log("\n12. Добавление новой задачи:");
const newTask = {
    id: 4,
    title: "Записаться на курсы",
    status: "не начата"
};
tasks.push(newTask);
console.log("Массив после добавления (длина):", tasks.length);
console.log("Новая задача:", tasks[tasks.length - 1]);

// 13. Объект user
console.log("\n13. Объект user:");
const user2 = {
    name: "Алексей",
    tasks: tasks 
};
console.log("Объект user:", user2);
console.log("Имя пользователя:", user.name);
console.log("Количество задач у пользователя:", user.tasks.length);

// 14. Демонстрация всех функций вместе
console.log("\n=== ИТОГОВАЯ ДЕМОНСТРАЦИЯ ===");
console.log(greetUser(user2.name));
console.log(printTask("Повторить практическую работу", "выполнена"));
console.log("Сумма 2 и 3:", sum(2, 3));
console.log("Максимум из 7 и 12:", max(7, 12));
console.log("Первая задача выполнена?", isTaskDone(tasks[0].status));
console.log(taskSummary(tasks.length, 2)); 

console.log("\n=== КОНЕЦ ПРАКТИЧЕСКОЙ РАБОТЫ ===");



// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ ====================

// Функция для поиска задачи по названию
function findTaskByTitle(tasks, title) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.toLowerCase() === title.toLowerCase()) {
            return tasks[i];
        }
    }
    return "Задача не найдена";
}

// Альтернативный вариант с методом find()
function findTaskByTitleAlt(tasks, title) {
    const foundTask = tasks.find(task => 
        task.title.toLowerCase() === title.toLowerCase()
    );
    return foundTask ? foundTask : "Задача не найдена";
}

// Еще один вариант с методом findIndex()
function findTaskByTitleIndex(tasks, title) {
    const index = tasks.findIndex(task => 
        task.title.toLowerCase() === title.toLowerCase()
    );
    return index !== -1 ? tasks[index] : "Задача не найдена";
}

// Тестирование функции
console.log("\n=== ПОИСК ЗАДАЧ ПО НАЗВАНИЮ ===");

// Тест 1: Поиск существующей задачи
console.log("\n1. Поиск существующей задачи:");
const searchResult1 = findTaskByTitle(tasks, "Купить продукты");
console.log("Поиск: 'Купить продукты'");
console.log("Результат:", searchResult1);

// Тест 2: Поиск другой существующей задачи
console.log("\n2. Поиск другой существующей задачи:");
const searchResult2 = findTaskByTitle(tasks, "позвонить другу");
console.log("Поиск: 'позвонить другу' (в нижнем регистре)");
console.log("Результат:", searchResult2);

// Тест 3: Поиск несуществующей задачи
console.log("\n3. Поиск несуществующей задачи:");
const searchResult3 = findTaskByTitle(tasks, "Несуществующая задача");
console.log("Поиск: 'Несуществующая задача'");
console.log("Результат:", searchResult3);

// Тест 4: Поиск с частичным совпадением 
console.log("\n4. Поиск с частичным совпадением:");
const searchResult4 = findTaskByTitle(tasks, "домашнюю");
console.log("Поиск: 'домашнюю' (часть названия)");
console.log("Результат:", searchResult4);

// Тест 5: Тестирование альтернативных функций
console.log("\n5. Тестирование альтернативных функций:");
console.log("findTaskByTitleAlt(tasks, 'Купить продукты'):", 
    findTaskByTitleAlt(tasks, 'Купить продукты'));
console.log("findTaskByTitleIndex(tasks, 'Несуществующая'):", 
    findTaskByTitleIndex(tasks, 'Несуществующая'));

console.log("\n6. Частичный поиск задач:");
console.log("Поиск по 'дел':", findTaskByPartialTitle(tasks, 'дел'));
console.log("Поиск по 'курс':", findTaskByPartialTitle(tasks, 'курс'));
console.log("Поиск по 'xyz':", findTaskByPartialTitle(tasks, 'xyz'));

// Создадим демонстрационный интерфейс поиска
console.log("\n=== ДЕМОНСТРАЦИЯ ПОИСКА ===");
function demonstrateSearch(searchQueries) {
    console.log("Все задачи в системе:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.title} [${task.status}]`);
    });
    
    console.log("\nРезультаты поиска:");
    searchQueries.forEach(query => {
        const result = findTaskByTitle(tasks, query);
        console.log(`\nПоиск: "${query}"`);
        if (typeof result === 'string') {
            console.log(`➡ ${result}`);
        } else {
            console.log(`➡ Найдено: "${result.title}" (ID: ${result.id}, статус: ${result.status})`);
        }
    });
}

demonstrateSearch(["Купить продукты", "Позвонить другу", "Сделать проект", "Записаться на курсы"]);


function filterByStatus(tasks, status){
    return tasks.filter(function (task){
        return task.status === status;
});
}

let task1 = [
    { id: 1, title: "Купить молоко", status: "активна"},
    { id: 1, title: "Позвонить врачу", status: "выполнена"},
    { id: 1, title: "Сделать уроки", status: "активна" }
];
console.log(filterByStatus(task1, "активно"));

function sortByTitleAsc(task){
    tasks.sort(function (a, b){
        if(a.title > b.title) return 1;
         if(a.title > b.title) return -1;
        return 0;
    });
    return tasks;
}

let tasks2 = [
    { id: 1, title: "Купить молоко", status: "активна"},
    { id: 1, title: "Позвонить врачу", status: "активна"},
    { id: 1, title: "Сделать уроки", status: "активна" }
];

console.log(sortByTitleAsc(tasks2));

function searchByTitle(task, query){
    const q = query.toLowerCase();
    return task.filter(function (task){
        return task.title.toLowerCase().indexOf(q) !== -1;
    });
    
}

let tasks4 = [
    { id: 1, title: "Купить молоко", status: "активна"},
    { id: 1, title: "Позвонить врачу", status: "активна"},
    { id: 1, title: "Сделать уроки", status: "активна" }
];

console.log(searchByTitle(tasks4, "куп"));

function removeTaskById(tasks, id){
	returntask.filter(function (task){
        return task.id !== id
    })
}

let tasks5 = [
    { id: 1, title: "Купить молоко", status: "активна"},
    { id: 1, title: "Позвонить врачу", status: "активна"},
    { id: 1, title: "Сделать уроки", status: "активна" }
];

console.log(removeTaskById(tasks5, 2));

function toggleTaskStatus (tasks, id) {
    return tasks.map(function (task) {
        if(task.id){
            const newStatus = task.status === "выполнена" ? "активна" : "выполнена";

            return{
                id: task.id,
                title: task.title,
                status: newStatus,
            };
        }
    return task;
    });
}
let tasks6= [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "выполнена" }
];
console.log(toggleTaskStatus (tasks5, 1));



let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Сходить в спортзал", status: "выполнена"},
    {id: 3, title: "Позвонить другу", status: "активна"},
    {id: 4, title: "Прочитать книгу", status: "выполнена"},
    {id: 5, title: "Сделать проект", status: "активна"}
];

for(let i = 0; i < tasks.length; i++){
    console.log(tasks[i].id + ":", tasks[i].title);
}

let i = 0;
let total = 0;
let done = 0;
let active = 0;

while(i < tasks.length) {
    total++;
    if(tasks[i].status === "выполнена") {
        done++;
    }else{
        active++;
    }
    i++;
}
console.log("Bcero:", total, "| Выполнено:", done, "| Активных:", active);

for(let task of tasks){
    if(task.status === "активна") {
        console.log("Активная задача:", task.title);
    }
}

task.forEaech(task =>{
    console.log("#" + task.id + " " + task.title + " (" + task.status + ")");
});



let searchTitle = "Купить молоко";
let found = null;
for(let task of tasks){
    if(task.title === searchTitle) {
        found = task;
        break;
    }
}
if(found) {
    console.log("Найдена задача", found);
}else{
    console.log("Задача не найдена");
}

let activeTasks = [];
for(let task of tasks){
    if(task.STATUS === "активна") {
        activeTasks.push(task);
    }
}
console.log("Активные задачи:", activeTasks);





// ==================== ПРАКТИЧЕСКАЯ РАБОТА: МАССИВЫ И ЦИКЛЫ ====================
console.log("=== ПРАКТИЧЕСКАЯ РАБОТА: МАССИВЫ И ЦИКЛЫ ===");

// 1. Создать массив tasks из 5 объектов с полями id, title, status
const tasks = [
    { id: 1, title: "Изучить JavaScript", status: "выполнена" },
    { id: 2, title: "Купить продукты", status: "активна" },
    { id: 3, title: "Сделать зарядку", status: "активна" },
    { id: 4, title: "Позвонить родителям", status: "выполнена" },
    { id: 5, title: "Почитать книгу", status: "активна" }
];

console.log("\n1. Исходный массив задач:");
console.log(tasks);

// 2. Перебрать массив с помощью цикла for, вывести id и название каждой задачи
console.log("\n2. Перебор с помощью цикла for:");
for (let i = 0; i < tasks.length; i++) {
    console.log(`ID: ${tasks[i].id}, Название: ${tasks[i].title}`);
}

// 3. Повторить вывод с использованием цикла for...of
console.log("\n3. Перебор с помощью цикла for...of:");
for (let task of tasks) {
    console.log(`ID: ${task.id}, Название: ${task.title}`);
}

// 4. Подсчитать общее количество задач, а также количество активных и выполненных (цикл while)
console.log("\n4. Подсчет задач с помощью цикла while:");
let total1 = 0;
let active1 = 0;
let completed = 0;
let index = 0;

while (index < tasks.length) {
    total1++;
    if (tasks[index].status === "активна") {
        active1++;
    } else if (tasks[index].status === "выполнена") {
        completed++;
    }
    index++;
}

console.log(`Всего задач: ${total1}`);
console.log(`Активных: ${active1}`);
console.log(`Выполнено: ${completed}`);

// 5. Вывести в консоль названия только активных задач
console.log("\n5. Названия только активных задач:");
for (let task of tasks) {
    if (task.status === "активна") {
        console.log(`- ${task.title}`);
    }
}

// 6. С помощью forEach вывести список в формате #id Название (Статус)
console.log("\n6. Список задач с помощью forEach:");
tasks.forEach(task => {
    console.log(`#${task.id} ${task.title} (${task.status})`);
});

// 7. Реализовать поиск задачи по названию (цикл for)
console.log("\n7. Поиск задачи по названию:");
function findTaskByTitle(tasks, searchTitle) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.toLowerCase() === searchTitle.toLowerCase()) {
            return tasks[i];
        }
    }
    return "Задача не найдена";
}

console.log("Поиск 'Купить продукты':", findTaskByTitle(tasks, "Купить продукты"));
console.log("Поиск 'Сделать домашку':", findTaskByTitle(tasks, "Сделать домашку"));

// 8. Создать новый массив только с активными задачами (без filter)
console.log("\n8. Новый массив только с активными задачами (без filter):");
const activeTasks1 = [];

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].status === "активна") {
        activeTasks1.push(tasks[i]);
    }
}

console.log("Активные задачи:", activeTasks1);

// 9. Реализовать функцию фильтрации задач по статусу (активна / выполнена)
console.log("\n9. Функция фильтрации задач по статусу:");
function filterTasksByStatus(tasks, status) {
    const filtered = [];
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === status) {
            filtered.push(tasks[i]);
        }
    }
    return filtered;
}

console.log("Активные задачи:", filterTasksByStatus(tasks, "активна"));
console.log("Выполненные задачи:", filterTasksByStatus(tasks, "выполнена"));

// 10. Отсортировать задачи по названию (по алфавиту)
console.log("\n10. Сортировка задач по названию (по алфавиту):");
const sortedByTitle = [...tasks].sort((a, b) => {
    return a.title.localeCompare(b.title);
});

console.log("Отсортированные задачи:");
sortedByTitle.forEach(task => {
    console.log(`- ${task.title} (${task.status})`);
});

// 11. Реализовать поиск задач по подстроке в названии (без учёта регистра)
console.log("\n11. Поиск задач по подстроке в названии:");
function searchTasksBySubstring(tasks, substring) {
    const results = [];
    const searchLower = substring.toLowerCase();
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title.toLowerCase().includes(searchLower)) {
            results.push(tasks[i]);
        }
    }
    
    return results.length > 0 ? results : "Задачи не найдены";
}

console.log("Поиск по 'книг':", searchTasksBySubstring(tasks, "книг"));
console.log("Поиск по 'ПОЗВОНИТЬ':", searchTasksBySubstring(tasks, "ПОЗВОНИТЬ"));
console.log("Поиск по 'прогулка':", searchTasksBySubstring(tasks, "прогулка"));

// 12. Реализовать функцию удаления задачи по id (возвращает новый массив)
console.log("\n12. Функция удаления задачи по id:");
function deleteTaskById(tasks, idToDelete) {
    const newTasks = [];
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id !== idToDelete) {
            newTasks.push(tasks[i]);
        }
    }
    
    return newTasks;
}

console.log("Исходный массив (количество):", tasks.length);
const tasksAfterDelete = deleteTaskById(tasks, 3);
console.log("После удаления задачи с id=3 (количество):", tasksAfterDelete.length);
console.log("Массив после удаления:", tasksAfterDelete);

// 13. Реализовать функцию переключения статуса задачи (toggle по id)
console.log("\n13. Функция переключения статуса задачи:");
function toggleTaskStatus(tasks, idToToggle) {
    // Создаем копию массива, чтобы не изменять оригинал
    const newTasks = [];
    
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task.id === idToToggle) {
            // Переключаем статус
            const newStatus = task.status === "активна" ? "выполнена" : "активна";
            newTasks.push({
                ...task,
                status: newStatus
            });
            console.log(`Задача #${task.id} "${task.title}" изменена: ${task.status} → ${newStatus}`);
        } else {
            newTasks.push(task);
        }
    }
    
    return newTasks;
}

console.log("Статусы до переключения:");
tasks.forEach(t => console.log(`#${t.id} ${t.title}: ${t.status}`));

const tasksAfterToggle = toggleTaskStatus(tasks, 2);
console.log("\nСтатусы после переключения:");
tasksAfterToggle.forEach(t => console.log(`#${t.id} ${t.title}: ${t.status}`));

// 14. Реализовать функцию очистки завершённых задач (оставить только активные)
console.log("\n14. Функция очистки завершённых задач:");
function clearCompletedTasks(tasks) {
    const activeOnly = [];
    const completedCount = [];
    
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].status === "активна") {
            activeOnly.push(tasks[i]);
        } else {
            completedCount.push(tasks[i]);
        }
    }
    
    console.log(`Удалено завершённых задач: ${completedCount.length}`);
    return activeOnly;
}

console.log("Исходный массив (количество):", tasks.length);
const activeOnlyTasks = clearCompletedTasks(tasks);
console.log("Массив только с активными задачами:", activeOnlyTasks);

// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ ====================

// Функция для поиска задачи по ключевому слову (части слова)
console.log("\n=== ПОИСК ЗАДАЧИ ПО КЛЮЧЕВОМУ СЛОВУ ===");

function findTaskByKeyword(tasks, keyword) {
    // Приводим ключевое слово к нижнему регистру для поиска без учёта регистра
    const searchKeyword = keyword.toLowerCase();
    
    // Вариант 1: с использованием цикла for...of
    for (let task of tasks) {
        if (task.title.toLowerCase().includes(searchKeyword)) {
            return task; // Возвращаем первый найденный объект задачи
        }
    }
    
    // Если ничего не найдено
    return "Задача не найдена";
}

// Альтернативный вариант с использованием метода find()
function findTaskByKeywordAlt(tasks, keyword) {
    const foundTask = tasks.find(task => 
        task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    return foundTask ? foundTask : "Задача не найдена";
}

// Создадим массив задач для тестирования (если его нет в текущем контексте)
const testTasks = [
    { id: 1, title: "Изучить JavaScript", status: "выполнена" },
    { id: 2, title: "Купить продукты", status: "активна" },
    { id: 3, title: "Сделать зарядку", status: "активна" },
    { id: 4, title: "Позвонить родителям", status: "выполнена" },
    { id: 5, title: "Почитать книгу", status: "активна" },
    { id: 6, title: "Выучить английский", status: "активна" },
    { id: 7, title: "Сходить в спортзал", status: "выполнена" }
];

console.log("\nИсходный массив задач для тестирования:");
testTasks.forEach(task => {
    console.log(`#${task.id}: "${task.title}" [${task.status}]`);
});

// Тестирование функции с разными ключевыми словами
console.log("\n1. Тестирование findTaskByKeyword:");

// Тест 1: Поиск по полному слову
console.log("\nПоиск по ключевому слову 'JavaScript':");
const result1 = findTaskByKeyword(testTasks, "JavaScript");
console.log("Результат:", result1);

// Тест 2: Поиск по части слова
console.log("\nПоиск по части слова 'книг':");
const result2 = findTaskByKeyword(testTasks, "книг");
console.log("Результат:", result2);

// Тест 3: Поиск без учёта регистра
console.log("\nПоиск 'ПРОДУКТЫ' (верхний регистр):");
const result3 = findTaskByKeyword(testTasks, "ПРОДУКТЫ");
console.log("Результат:", result3);

// Тест 4: Поиск по короткой части
console.log("\nПоиск по части 'чит':");
const result4 = findTaskByKeyword(testTasks, "чит");
console.log("Результат:", result4);

// Тест 5: Поиск несуществующего слова
console.log("\nПоиск по ключевому слову 'путешествие':");
const result5 = findTaskByKeyword(testTasks, "путешествие");
console.log("Результат:", result5);

// Тест 6: Поиск по первой букве
console.log("\nПоиск по букве 'п' (должен найти первую задачу с 'п'):");
const result6 = findTaskByKeyword(testTasks, "п");
console.log("Результат:", result6);

// Тестирование альтернативной функции
console.log("\n2. Тестирование альтернативной функции findTaskByKeywordAlt:");
console.log("Поиск 'заряд':", findTaskByKeywordAlt(testTasks, "заряд"));
console.log("Поиск 'англ':", findTaskByKeywordAlt(testTasks, "англ"));
console.log("Поиск 'спорт':", findTaskByKeywordAlt(testTasks, "спорт"));
console.log("Поиск 'несуществующее':", findTaskByKeywordAlt(testTasks, "несуществующее"));

// Расширенная функция для поиска всех задач, содержащих ключевое слово
function findAllTasksByKeyword(tasks, keyword) {
    const searchKeyword = keyword.toLowerCase();
    const foundTasks = [];
    
    for (let task of tasks) {
        if (task.title.toLowerCase().includes(searchKeyword)) {
            foundTasks.push(task);
        }
    }
    
    return foundTasks.length > 0 ? foundTasks : "Задачи не найдены";
}

console.log("\n3. Поиск всех задач, содержащих ключевое слово:");
console.log("Поиск всех задач с буквой 'п':", 
    findAllTasksByKeyword(testTasks, "п").length > 0 
        ? `найдено ${findAllTasksByKeyword(testTasks, "п").length} задач` 
        : findAllTasksByKeyword(testTasks, "п"));

// Демонстрация с выводом найденных задач
const allWithP = findAllTasksByKeyword(testTasks, "п");
if (Array.isArray(allWithP)) {
    console.log("Задачи, содержащие 'п':");
    allWithP.forEach(task => console.log(`  - ${task.title}`));
}

// Функция для интерактивного поиска
function searchDemo() {
    console.log("\n=== ДЕМОНСТРАЦИЯ ПОИСКА ===");
    
    const searchQueries = [
        "книга",
        "продукт",
        "спорт",
        "JavaScript",
        "зарядка",
        "английский",
        "родители",
        "xyz"
    ];
    
    searchQueries.forEach(query => {
        const result = findTaskByKeyword(testTasks, query);
        console.log(`\nПоиск: "${query}"`);
        if (typeof result === 'string') {
            console.log(`  ➡ ${result}`);
        } else {
            console.log(`  ➡ Найдена задача: #${result.id} "${result.title}" (${result.status})`);
        }
    });
}

searchDemo();

// Функция с подсветкой найденного слова (для демонстрации)
function highlightKeyword(task, keyword) {
    if (typeof task === 'object') {
        const highlighted = task.title.replace(
            new RegExp(keyword, 'gi'), 
            match => `**${match}**`
        );
        return {
            ...task,
            highlightedTitle: highlighted
        };
    }
    return task;
}

console.log("\n=== ДЕМОНСТРАЦИЯ С ПОДСВЕТКОЙ ===");
const taskWithJava = findTaskByKeyword(testTasks, "java");
if (typeof taskWithJava === 'object') {
    const highlighted = highlightKeyword(taskWithJava, "java");
    console.log("Задача с подсветкой:", highlighted.highlightedTitle);
}