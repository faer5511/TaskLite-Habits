// ==================== ПРАКТИЧЕСКАЯ РАБОТА (УРОК) ====================

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

// ==================== УСЛОВИЯ (УРОК) ====================

// 6. Проверка переменной title
let title1 = "";

if (title1 === "") {
    console.log("Название задачи не указано");
} else {
    console.log("Задача:", title1);
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

// ==================== МАССИВЫ И ОБЪЕКТЫ (УРОК) ====================

let cities = ["Москва", "Париж", "Питер", "Токио"];
cities[2] = "Лондон";
console.log(cities);

let task01 = {
    id: 1,
    title: "Купить молоко",
    status: "активна"
};

console.log(task01.id);
console.log(task01.title);
console.log(task01.status);

let tasks = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Позвонить врачу", status: "выполнена"},
    {id: 3, title: "Сделать уроки", status: "активна"},
];
console.log(tasks[0].title);
console.log(tasks[1].status);

tasks[0].status = "выполнена";
console.log(tasks[0]);

let user = {
    name: "Анна",
    tasks: tasks
};
console.log(user.name);
console.log(user.tasks.length);

// ==================== ФУНКЦИИ (УРОК) ====================
console.log("=== ПРАКТИЧЕСКАЯ РАБОТА: ФУНКЦИИ ===");

// 1. Функция sum(a, b)
function sum(a, b) {
    return a + b;
}

console.log("\n1. Функция sum(a, b):");
console.log("sum(5, 3) =", sum(5, 3));
console.log("sum(10, -2) =", sum(10, -2));

// 2. Функция max(a, b)
function max(a, b) {
    return a > b ? a : b;
}

console.log("\n2. Функция max(a, b):");
console.log("max(5, 3) =", max(5, 3));
console.log("max(10, 10) =", max(10, 10));

// 3. Функция printTask(title, status)
function printTask(title, status) {
    return `Задача: ${title} | Статус: ${status}`;
}

console.log("\n3. Функция printTask(title, status):");
console.log(printTask("Купить продукты", "в процессе"));

// 4. Функция isTaskDone(status)
function isTaskDone(status) {
    return status.toLowerCase() === "выполнена";
}

console.log("\n4. Функция isTaskDone(status):");
console.log("isTaskDone('выполнена') =", isTaskDone("выполнена"));
console.log("isTaskDone('в процессе') =", isTaskDone("в процессе"));

// 5. Функция greetUser(name)
function greetUser(name) {
    return `Добро пожаловать, ${name}!`;
}

console.log("\n5. Функция greetUser(name):");
console.log(greetUser("Анна"));

// 6. Функция taskSummary(total, done)
function taskSummary(total, done) {
    const active = total - done;
    return `Всего: ${total} | Выполнено: ${done} | Активных: ${active}`;
}

console.log("\n6. Функция taskSummary(total, done):");
console.log(taskSummary(10, 4));

// 7. Массив из 5 чисел
console.log("\n7. Массив из 5 чисел:");
const numbers = [10, 20, 30, 40, 50];
console.log("Массив numbers:", numbers);

// 8. Массив из 4 строк
console.log("\n8. Массив из 4 строк (города):");
const citiesArr = ["Москва", "Санкт-Петербург", "Казань", "Екатеринбург"];
console.log("Исходный массив:", citiesArr);
citiesArr[2] = "Новосибирск"; 
console.log("После изменения:", citiesArr);

// 9. Объект task
console.log("\n9. Объект task:");
const task3 = {
    id: 1,
    title: "Изучить JavaScript",
    status: "в процессе"
};
console.log("Объект task:", task3);

// 10. Массив tasks из объектов-задач
console.log("\n10. Массив tasks из объектов-задач:");
const tasksArr = [
    { id: 1, title: "Сделать домашнюю работу", status: "в процессе" },
    { id: 2, title: "Купить продукты", status: "не начата" },
    { id: 3, title: "Позвонить другу", status: "выполнена" }
];
console.log("Массив tasks:", tasksArr);

// ==================== МАССИВЫ И ЦИКЛЫ (УРОК) ====================
console.log("=== ПРАКТИЧЕСКАЯ РАБОТА: МАССИВЫ И ЦИКЛЫ ===");

const tasksLoop = [
    { id: 1, title: "Изучить JavaScript", status: "выполнена" },
    { id: 2, title: "Купить продукты", status: "активна" },
    { id: 3, title: "Сделать зарядку", status: "активна" },
    { id: 4, title: "Позвонить родителям", status: "выполнена" },
    { id: 5, title: "Почитать книгу", status: "активна" }
];

// 2. Цикл for
console.log("\n2. Перебор с помощью цикла for:");
for (let i = 0; i < tasksLoop.length; i++) {
    console.log(`ID: ${tasksLoop[i].id}, Название: ${tasksLoop[i].title}`);
}

// 3. Цикл for...of
console.log("\n3. Перебор с помощью цикла for...of:");
for (let task of tasksLoop) {
    console.log(`ID: ${task.id}, Название: ${task.title}`);
}

// 4. Цикл while для подсчета
console.log("\n4. Подсчет задач с помощью цикла while:");
let total1 = 0;
let active1 = 0;
let completed = 0;
let index = 0;

while (index < tasksLoop.length) {
    total1++;
    if (tasksLoop[index].status === "активна") {
        active1++;
    } else if (tasksLoop[index].status === "выполнена") {
        completed++;
    }
    index++;
}

console.log(`Всего задач: ${total1}`);
console.log(`Активных: ${active1}`);
console.log(`Выполнено: ${completed}`);

// 5. Вывод активных задач
console.log("\n5. Названия только активных задач:");
for (let task of tasksLoop) {
    if (task.status === "активна") {
        console.log(`- ${task.title}`);
    }
}

// 6. forEach
console.log("\n6. Список задач с помощью forEach:");
tasksLoop.forEach(task => {
    console.log(`#${task.id} ${task.title} (${task.status})`);
});

// ==================== РАБОТА С ДАТАМИ (УРОК) ====================
console.log("=== РАБОТА С ДАТАМИ ===");

// Задача 1: Получение текущей даты и времени
const now1 = new Date();
console.log("Текущая дата:", now1);

// Задача 2: Извлечение компонентов даты
const day = now1.getDate();
const month = now1.getMonth() + 1;
const year = now1.getFullYear();
console.log(`Дата: ${day}.${month}.${year}`);

// Задание 3: Получение текущего времени
const hours1 = now1.getHours();
const minutes = now1.getMinutes();
const seconds = now1.getSeconds();
console.log(`Время: ${hours1}:${minutes}:${seconds}`);

// Задание 4: Форматирование даты для пользователя
console.log("Локальная дата:", now1.toLocaleString());

// Задание 5: Форматирование короткой текстовой подписи
function formatDate(date) {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${d}.${m}.${y}, ${h}:${min}`;
}

console.log("Отформатированная дата:", formatDate(new Date()));

// Задание 7: Определение дня недели и времени суток
const now = new Date();

const days = [
    "Воскресенье", "Понедельник", "Вторник", "Среда",
    "Четверг", "Пятница", "Суббота"
];

const dayName = days[now.getDay()];

const hours = now.getHours();
let timeOfDay;

if (hours >= 0 && hours < 6) timeOfDay = "Ночь";
else if (hours < 12) timeOfDay = "Утро";
else if (hours < 18) timeOfDay = "День";
else timeOfDay = "Вечер";

console.log(`Сегодня ${dayName}, сейчас ${timeOfDay}`);

/* ============================================ */
/* ============ ДОМАШНЕЕ ЗАДАНИЕ ============== */
/* ===== (код, который ты написал сам) ======== */
/* ============================================ */

// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ 1: СКИДКА В МАГАЗИНЕ ====================
console.log("\n=== СКИДКА В МАГАЗИНЕ (ДЗ) ===");

let amount = 3500;
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

// Тестирование разных сумм
console.log("\n=== ТЕСТИРОВАНИЕ РАЗНЫХ СУММ (ДЗ) ===");
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

// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ 2: ПОИСК ЗАДАЧ ПО КЛЮЧЕВОМУ СЛОВУ ====================
console.log("\n=== ПОИСК ЗАДАЧ ПО КЛЮЧЕВОМУ СЛОВУ (ДЗ) ===");

function findTaskByKeyword(tasks, keyword) {
    const searchKeyword = keyword.toLowerCase();
    
    for (let task of tasks) {
        if (task.title.toLowerCase().includes(searchKeyword)) {
            return task;
        }
    }
    
    return "Задача не найдена";
}

// Альтернативный вариант с find()
function findTaskByKeywordAlt(tasks, keyword) {
    const foundTask = tasks.find(task => 
        task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    
    return foundTask ? foundTask : "Задача не найдена";
}

// Функция для поиска всех задач с ключевым словом
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

// Тестовый массив
const testTasks = [
    { id: 1, title: "Изучить JavaScript", status: "выполнена" },
    { id: 2, title: "Купить продукты", status: "активна" },
    { id: 3, title: "Сделать зарядку", status: "активна" },
    { id: 4, title: "Позвонить родителям", status: "выполнена" },
    { id: 5, title: "Почитать книгу", status: "активна" }
];

console.log("Поиск 'книг':", findTaskByKeyword(testTasks, "книг"));
console.log("Поиск 'ПРОДУКТЫ':", findTaskByKeyword(testTasks, "ПРОДУКТЫ"));
console.log("Все задачи с 'п':", findAllTasksByKeyword(testTasks, "п"));

// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ 3: ФУНКЦИИ ДЛЯ РАБОТЫ С ЗАДАЧАМИ ====================
console.log("\n=== ФУНКЦИИ ДЛЯ РАБОТЫ С ЗАДАЧАМИ (ДЗ) ===");

function filterByStatus(tasks, status) {
    return tasks.filter(function(task) {
        return task.status === status;
    });
}

let task91 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "выполнена" },
    { id: 3, title: "Сделать уроки", status: "активна" }
];
console.log("Фильтр по статусу 'активна':", filterByStatus(task91, "активна"));

function sortByTitleAsc(tasks) {
    return [...tasks].sort(function(a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
}

let tasks2 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "активна" },
    { id: 3, title: "Сделать уроки", status: "активна" }
];

console.log("Сортировка по названию:", sortByTitleAsc(tasks2));

function searchByTitle(tasks, query) {
    const q = query.toLowerCase();
    return tasks.filter(function(task) {
        return task.title.toLowerCase().indexOf(q) !== -1;
    });
}

let tasks4 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "активна" },
    { id: 3, title: "Сделать уроки", status: "активна" }
];

console.log("Поиск по 'куп':", searchByTitle(tasks4, "куп"));

function removeTaskById(tasks, id) {
    return tasks.filter(function(task) {
        return task.id !== id;
    });
}

let tasks5 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "активна" },
    { id: 3, title: "Сделать уроки", status: "активна" }
];

console.log("Удаление задачи с id=2:", removeTaskById(tasks5, 2));

function toggleTaskStatus(tasks, id) {
    return tasks.map(function(task) {
        if (task.id === id) {
            const newStatus = task.status === "выполнена" ? "активна" : "выполнена";
            return {
                id: task.id,
                title: task.title,
                status: newStatus,
            };
        }
        return task;
    });
}

let tasks6 = [
    { id: 1, title: "Купить молоко", status: "активна" },
    { id: 2, title: "Позвонить врачу", status: "выполнена" }
];
console.log("Переключение статуса задачи id=1:", toggleTaskStatus(tasks6, 1));

// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ 4: РАБОТА С МАССИВАМИ ====================

let tasksFull = [
    {id: 1, title: "Купить молоко", status: "активна"},
    {id: 2, title: "Сходить в спортзал", status: "выполнена"},
    {id: 3, title: "Позвонить другу", status: "активна"},
    {id: 4, title: "Прочитать книгу", status: "выполнена"},
    {id: 5, title: "Сделать проект", status: "активна"}
];

console.log("\n=== РАБОТА С МАССИВОМ ЗАДАЧ (ДЗ) ===");

// Поиск задачи по названию
let searchTitle = "Купить молоко";
let found = null;
for (let task of tasksFull) {
    if (task.title === searchTitle) {
        found = task;
        break;
    }
}
console.log("Поиск задачи:", found);

// Создание массива активных задач
let activeTasks = [];
for (let task of tasksFull) {
    if (task.status === "активна") {
        activeTasks.push(task);
    }
}
console.log("Активные задачи:", activeTasks);

// ==================== САМОСТОЯТЕЛЬНАЯ ЧАСТЬ 5: DOM И СОБЫТИЯ ====================
console.log("\n=== DOM И СОБЫТИЯ (ДЗ) ===");

// Функция рендера задачи
function renderTask(taskData) {
    const container = document.querySelector('.container');
    if (!container) {
        console.log("Контейнер не найден, пропускаем рендер");
        return null;
    }

    const taskCard = document.createElement('div');
    taskCard.classList.add('task');

    const content = document.createElement('div');
    content.classList.add('task_content');
    taskCard.appendChild(content);

    const title = document.createElement('div');
    title.classList.add('task_title');
    title.textContent = taskData.title;
    content.appendChild(title);

    const meta = document.createElement('div');
    meta.classList.add('task_meta');
    meta.textContent = taskData.date;
    content.appendChild(meta);

    const actions = document.createElement('div');
    actions.classList.add('task_actions');
    taskCard.appendChild(actions);

    const editBtn = document.createElement('button');
    editBtn.classList.add('task_action', 'task_action--edit');
    editBtn.title = 'Редактировать';
    editBtn.innerHTML = `
        <svg class="task_icon" viewBox="0 0 24 24" fill="none" stroke="#6f64a3" stroke-width="2">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
    `;
    actions.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task_action', 'task_action--delete');
    deleteBtn.title = 'Удалить';
    deleteBtn.innerHTML = `
        <svg class="task_icon" viewBox="0 0 24 24" fill="none" stroke="#cb6e6e" stroke-width="2">
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
            <path d="M10 11v6" /><path d="M14 11v6" />
            <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
    `;
    actions.appendChild(deleteBtn);

    container.appendChild(taskCard);
    return taskCard;
}

// Функция добавления задачи
function addTask() {
    const input = document.querySelector('.form-add_input');
    if (!input) return;
    
    const text = input.value.trim();
    if (text === "" || text.length < 3) {
        input.classList.add('input--error');
        return;
    }
    
    input.classList.remove('input--error');
    
    const newTask = {
        id: Date.now(),
        title: text,
        done: false,
        date: formatDate(new Date())
    };
    
    if (!window.tasksArray) window.tasksArray = [];
    window.tasksArray.push(newTask);
    
    input.value = '';
    renderAllTasks();
}

// Функция для отрисовки всех задач
function renderAllTasks() {
    const container = document.querySelector('.container');
    if (!container) return;
    
    // Очищаем старые задачи (кроме первого контейнера)
    document.querySelectorAll('.task').forEach(t => t.remove());
    
    if (window.tasksArray) {
        window.tasksArray.forEach(task => renderTask(task));
    }
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    console.log("Страница загружена, инициализация обработчиков (ДЗ)");
    
    const form = document.querySelector('.form-add');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            addTask();
        });
    }
    
    const sortSelect = document.querySelector('.toolbar_sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            const val = sortSelect.value;
            console.log("Выбрана сортировка:", val);
        });
    }
    
    const searchInput = document.querySelector('.toolbar_search-input');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            console.log("Поиск:", searchInput.value);
        });
    }
});

// ==================== ДОПОЛНИТЕЛЬНЫЕ ЭКСПЕРИМЕНТЫ (ДЗ) ====================

// Функция для поиска задачи по частичному совпадению
function findTaskByPartialTitle(tasks, keyword) {
    const results = tasks.filter(task => 
        task.title.toLowerCase().includes(keyword.toLowerCase())
    );
    return results.length ? results : "Задачи не найдены";
}

console.log("\n=== ДОПОЛНИТЕЛЬНЫЕ ЭКСПЕРИМЕНТЫ (ДЗ) ===");
console.log("Частичный поиск 'дел':", findTaskByPartialTitle(tasksFull, 'дел'));

// Демонстрация поиска
function demonstrateSearch(searchQueries) {
    console.log("\nДемонстрация поиска:");
    searchQueries.forEach(query => {
        const result = findTaskByKeyword(tasksFull, query);
        console.log(`"${query}":`, result);
    });
}

demonstrateSearch(["Купить", "Позвонить", "Несуществующее"]);