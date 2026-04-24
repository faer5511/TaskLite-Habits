// ===== 1. ЗАГЛУШКИ ДЛЯ ДЕМОНСТРАЦИИ =====
// Используются при первом запуске, если localStorage пуст
const demoTasks = [
    {
        id: 1,
        title: "📚 Изучить JavaScript",
        description: "Продвинутые темы: замыкания, промисы, async/await",
        priority: "high",
        completed: false,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 2,
        title: "🎨 Сделать дизайн для TaskLite",
        description: "Нарисовать макеты в Figma",
        priority: "medium",
        completed: false,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 3,
        title: "💪 Тренировка",
        description: "30 минут кардио + растяжка",
        priority: "medium",
        completed: true,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 4,
        title: "📝 Написать документацию",
        description: "Описание функционала TaskLite",
        priority: "low",
        completed: false,
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 5,
        title: "🐛 Исправить баги в Kanban",
        description: "Проблема с drag-and-drop",
        priority: "high",
        completed: false,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 6,
        title: "🚀 Задеплоить на GitHub Pages",
        description: "Настроить CI/CD",
        priority: "low",
        completed: true,
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 7,
        title: "🎯 Создать TaskLite Habits",
        description: "Трекер привычек с тепловой картой",
        priority: "high",
        completed: false,
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    }
];

// ===== 2. DOM ЭЛЕМЕНТЫ =====
// Получаем ссылки на все нужные элементы страницы
const quickAddInput = document.getElementById("quickAddInput");
const searchInput = document.getElementById("searchInput");
const addBtn = document.getElementById("addBtn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const sortSelect = document.getElementById("sortSelect");
const filterBtns = document.querySelectorAll(".filter-btn");
const tasksContainer = document.getElementById("tasksContainer");
const emptyState = document.getElementById("emptyState");
const totalCountSpan = document.getElementById("totalCount");
const activeCountSpan = document.getElementById("activeCount");
const completedCountSpan = document.getElementById("completedCount");

// ===== 3. ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
let tasks = [];           // Массив всех задач
let currentFilter = 'all';  // Текущий фильтр: all, active, completed
let currentSort = 'date';    // Текущая сортировка: date, priority, name

// ===== 4. ИНИЦИАЛИЗАЦИЯ LOCALSTORAGE =====
// Загружаем задачи из localStorage или используем заглушки
function initTasks() {
    const stored = localStorage.getItem('tasklite_tasks');
    if (stored && JSON.parse(stored).length > 0) {
        tasks = JSON.parse(stored);
    } else {
        tasks = JSON.parse(JSON.stringify(demoTasks));
        saveTasks();
    }
    renderAll();
}

// Сохраняем задачи в localStorage
function saveTasks() {
    localStorage.setItem('tasklite_tasks', JSON.stringify(tasks));
}

// ===== 5. СЧЁТЧИКИ ЗАДАЧ =====
// Подсчёт активных задач (не выполненных)
function countActiveTasks() {
    return tasks.filter(task => !task.completed).length;
}

// Подсчёт выполненных задач
function countCompletedTasks() {
    return tasks.filter(task => task.completed).length;
}

// Обновление всех счётчиков на странице
function updateCounters() {
    const totalCount = tasks.length;
    const activeCount = countActiveTasks();
    const completedCount = countCompletedTasks();

    if (totalCountSpan) totalCountSpan.textContent = totalCount;
    if (activeCountSpan) activeCountSpan.textContent = activeCount;
    if (completedCountSpan) completedCountSpan.textContent = completedCount;
}

// ===== 6. ФОРМАТИРОВАНИЕ ДАТЫ =====
// Преобразует ISO дату в человекочитаемый формат
function formatRelativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'сегодня';
    if (diffDays === 1) return 'вчера';
    if (diffDays < 7) return `${diffDays} дня назад`;

    return date.toLocaleDateString('ru-RU');
}

// ===== 7. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
// Возвращает эмодзи для приоритета
function getPriorityEmoji(priority) {
    switch (priority) {
        case 'high': return '🔴';
        case 'medium': return '🟡';
        case 'low': return '🟢';
        default: return '⚪';
    }
}

// Возвращает текст для приоритета
function getPriorityText(priority) {
    switch (priority) {
        case 'high': return 'Высокий';
        case 'medium': return 'Средний';
        case 'low': return 'Низкий';
        default: return 'Средний';
    }
}

// ===== 8. ДОБАВЛЕНИЕ ЗАДАЧИ =====
function addTask() {
    const text = quickAddInput?.value.trim();

    // Валидация: задача не должна быть пустой или слишком короткой
    if (!text || text.length < 3) {
        if (quickAddInput) {
            quickAddInput.classList.add("input--error");
            setTimeout(() => quickAddInput.classList.remove("input--error"), 2000);
        }
        return;
    }

    if (quickAddInput) quickAddInput.classList.remove("input--error");

    // Создаём новую задачу
    const newTask = {
        id: Date.now(),                    // Уникальный ID (timestamp)
        title: text,
        description: "",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null
    };

    tasks.unshift(newTask);  // Добавляем в начало массива
    saveTasks();
    renderAll();

    if (quickAddInput) quickAddInput.value = "";
}

// ===== 9. УДАЛЕНИЕ ЗАДАЧИ =====
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderAll();
}

// ===== 10. ПЕРЕКЛЮЧЕНИЕ СТАТУСА (выполнено/не выполнено) =====
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date().toISOString() : null;
        saveTasks();
        renderAll();
    }
}

// ===== 11. ОЧИСТКА ВЫПОЛНЕННЫХ ЗАДАЧ =====
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderAll();
}

// ===== 12. ФИЛЬТРАЦИЯ ЗАДАЧ =====
function filterTasks(tasksToFilter) {
    switch (currentFilter) {
        case 'active':
            return tasksToFilter.filter(task => !task.completed);
        case 'completed':
            return tasksToFilter.filter(task => task.completed);
        default:
            return tasksToFilter;
    }
}

// ===== 13. СОРТИРОВКА ЗАДАЧ =====
function sortTasks(tasksToSort) {
    const sorted = [...tasksToSort];

    switch (currentSort) {
        case 'date':      // Новые → Старые
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case 'date-asc':  // Старые → Новые
            return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        case 'priority':  // По приоритету (высокий → низкий)
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return sorted.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        case 'name-asc':  // По имени А→Я
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'name-desc': // По имени Я→А
            return sorted.sort((a, b) => b.title.localeCompare(a.title));
        default:
            return sorted;
    }
}

// ===== 14. ПОИСК ЗАДАЧ =====
function searchTasks(tasksToSearch) {
    const query = searchInput?.value.toLowerCase().trim() || "";
    if (!query) return tasksToSearch;

    return tasksToSearch.filter(task =>
        task.title.toLowerCase().includes(query) ||
        (task.description && task.description.toLowerCase().includes(query))
    );
}

// ===== 15. РЕНДЕР ОДНОЙ ЗАДАЧИ =====
function renderTask(taskData) {
    const item = document.createElement("div");
    item.classList.add("task-item");
    item.setAttribute("data-id", taskData.id);

    // Левая часть с чекбоксом и информацией
    const content = document.createElement("div");
    content.classList.add("task-content");

    // Чекбокс
    const checkboxDiv = document.createElement("div");
    checkboxDiv.classList.add("task-checkbox");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = taskData.completed;
    checkbox.addEventListener("change", () => toggleTask(taskData.id));
    checkboxDiv.appendChild(checkbox);

    // Информация о задаче
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("task-info");

    const title = document.createElement("div");
    title.classList.add("task-title");
    if (taskData.completed) title.classList.add("completed");
    title.textContent = taskData.title;
    infoDiv.appendChild(title);

    // Описание (если есть)
    if (taskData.description) {
        const desc = document.createElement("div");
        desc.classList.add("task-desc");
        desc.textContent = taskData.description;
        infoDiv.appendChild(desc);
    }

    // Мета-информация (приоритет, дата)
    const metaDiv = document.createElement("div");
    metaDiv.classList.add("task-meta");

    const priorityBadge = document.createElement("span");
    priorityBadge.classList.add("priority-badge", `priority-${taskData.priority}`);
    priorityBadge.textContent = `${getPriorityEmoji(taskData.priority)} ${getPriorityText(taskData.priority)}`;

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("task-date");
    dateSpan.textContent = `📅 ${formatRelativeDate(taskData.createdAt)}`;

    metaDiv.appendChild(priorityBadge);
    metaDiv.appendChild(dateSpan);
    infoDiv.appendChild(metaDiv);

    content.appendChild(checkboxDiv);
    content.appendChild(infoDiv);

    // Кнопка удаления
    const actionsDiv = document.createElement("div");
    actionsDiv.classList.add("task-actions");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.title = "Удалить";
    deleteBtn.textContent = "🗑️";
    deleteBtn.addEventListener("click", () => deleteTask(taskData.id));
    actionsDiv.appendChild(deleteBtn);

    item.appendChild(content);
    item.appendChild(actionsDiv);

    return item;
}

// ===== 16. ОСНОВНОЙ РЕНДЕР ВСЕХ ЗАДАЧ =====
function renderAll() {
    if (!tasksContainer || !emptyState) return;

    // Применяем фильтр, поиск и сортировку
    let filteredTasks = filterTasks(tasks);
    filteredTasks = searchTasks(filteredTasks);
    filteredTasks = sortTasks(filteredTasks);

    // Обновляем счётчики
    updateCounters();

    // Показываем пустое состояние, если задач нет
    if (filteredTasks.length === 0) {
        tasksContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    tasksContainer.style.display = 'block';
    emptyState.style.display = 'none';

    // Очищаем контейнер и рендерим задачи
    tasksContainer.innerHTML = '';
    filteredTasks.forEach(task => {
        tasksContainer.appendChild(renderTask(task));
    });
}

// ===== 17. ОБРАБОТЧИКИ СОБЫТИЙ =====
// Добавление задачи по кнопке
if (addBtn) {
    addBtn.addEventListener("click", addTask);
}

// Добавление задачи по Enter
if (quickAddInput) {
    quickAddInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
}

// Поиск задач
if (searchInput) {
    searchInput.addEventListener("input", () => renderAll());
}

// Фильтрация задач (кнопки Все/Активные/Завершённые)
filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.dataset.filter;
        if (filterValue === "active") currentFilter = "active";
        else if (filterValue === "completed") currentFilter = "completed";
        else currentFilter = "all";

        renderAll();
    });
});

// Сортировка задач
if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderAll();
    });
}

// Очистка выполненных задач
if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener("click", clearCompleted);
}

// ===== 18. ЗАПУСК ПРИЛОЖЕНИЯ =====
initTasks();

// Делаем функции глобальными для доступа из HTML (например, onclick)
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;