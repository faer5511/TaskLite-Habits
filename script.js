// ===== ЗАГЛУШКИ ДЛЯ ДЕМОНСТРАЦИИ =====
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
    }
];

// ===== DOM ЭЛЕМЕНТЫ =====
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

// ===== ДАННЫЕ =====
let tasks = [];

// Текущие фильтр и сортировка
let currentFilter = 'all';
let currentSort = 'date';

// ===== ИНИЦИАЛИЗАЦИЯ LOCALSTORAGE =====
function initTasks() {
    const stored = localStorage.getItem('tasklite_tasks');
    if (stored && JSON.parse(stored).length > 0) {
        tasks = JSON.parse(stored);
    } else {
        tasks = [...demoTasks];
        saveTasks();
    }
}

// ===== СОХРАНЕНИЕ =====
function saveTasks() {
    localStorage.setItem('tasklite_tasks', JSON.stringify(tasks));
}

// ===== ФУНКЦИИ ДЛЯ СЧЁТЧИКОВ =====
function countActiveTasks() {
    return tasks.filter(task => !task.completed).length;
}

function countCompletedTasks() {
    return tasks.filter(task => task.completed).length;
}

function updateCounters() {
    const totalCount = tasks.length;
    const activeCount = countActiveTasks();
    const completedCount = countCompletedTasks();

    if (totalCountSpan) totalCountSpan.textContent = totalCount;
    if (activeCountSpan) activeCountSpan.textContent = activeCount;
    if (completedCountSpan) completedCountSpan.textContent = completedCount;
}

// ===== ФОРМАТИРОВАНИЕ ДАТЫ =====
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

// ===== ДОБАВЛЕНИЕ ЗАДАЧИ =====
function addTask() {
    const text = quickAddInput?.value.trim();
    if (!text || text.length < 3) {
        if (quickAddInput) {
            quickAddInput.classList.add("input--error");
            setTimeout(() => quickAddInput.classList.remove("input--error"), 2000);
        }
        return;
    }

    if (quickAddInput) quickAddInput.classList.remove("input--error");

    const newTask = {
        id: Date.now(),
        title: text,
        description: "",
        priority: "medium",
        completed: false,
        createdAt: new Date().toISOString(),
        completedAt: null
    };

    tasks.unshift(newTask);
    saveTasks();
    renderAll();

    if (quickAddInput) quickAddInput.value = "";
}

// ===== УДАЛЕНИЕ ЗАДАЧИ =====
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderAll();
}

// ===== ПЕРЕКЛЮЧЕНИЕ СТАТУСА =====
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        task.completedAt = task.completed ? new Date().toISOString() : null;
        saveTasks();
        renderAll();
    }
}

// ===== ОЧИСТКА ВЫПОЛНЕННЫХ =====
function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    saveTasks();
    renderAll();
}

// ===== ФИЛЬТРАЦИЯ =====
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

// ===== СОРТИРОВКА =====
function sortTasks(tasksToSort) {
    const sorted = [...tasksToSort];

    switch (currentSort) {
        case 'date':
            return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        case 'date-asc':
            return sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        case 'priority':
            const priorityOrder = { high: 3, medium: 2, low: 1 };
            return sorted.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
        case 'name-asc':
            return sorted.sort((a, b) => a.title.localeCompare(b.title));
        case 'name-desc':
            return sorted.sort((a, b) => b.title.localeCompare(a.title));
        default:
            return sorted;
    }
}

// ===== ПОИСК =====
function searchTasks(tasksToSearch) {
    const query = searchInput?.value.toLowerCase().trim() || "";
    if (!query) return tasksToSearch;

    return tasksToSearch.filter(task =>
        task.title.toLowerCase().includes(query) ||
        (task.description && task.description.toLowerCase().includes(query))
    );
}

// ===== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====
function getPriorityEmoji(priority) {
    switch (priority) {
        case 'high': return '🔴';
        case 'medium': return '🟡';
        case 'low': return '🟢';
        default: return '⚪';
    }
}

function getPriorityText(priority) {
    switch (priority) {
        case 'high': return 'Высокий';
        case 'medium': return 'Средний';
        case 'low': return 'Низкий';
        default: return 'Средний';
    }
}

// ===== РЕНДЕР ОДНОЙ ЗАДАЧИ =====
function renderTask(taskData) {
    const item = document.createElement("div");
    item.classList.add("task-item");
    item.setAttribute("data-id", taskData.id);

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

    if (taskData.description) {
        const desc = document.createElement("div");
        desc.classList.add("task-desc");
        desc.textContent = taskData.description;
        infoDiv.appendChild(desc);
    }

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

    // Действия
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

// ===== ОСНОВНОЙ РЕНДЕР =====
function renderAll() {
    if (!tasksContainer || !emptyState) return;

    // Фильтрация, поиск, сортировка
    let filteredTasks = filterTasks(tasks);
    filteredTasks = searchTasks(filteredTasks);
    filteredTasks = sortTasks(filteredTasks);

    // Обновление счётчиков
    updateCounters();

    // Показ пустого состояния
    if (filteredTasks.length === 0) {
        tasksContainer.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    tasksContainer.style.display = 'block';
    emptyState.style.display = 'none';

    // Очистка и рендер
    tasksContainer.innerHTML = '';
    filteredTasks.forEach(task => {
        tasksContainer.appendChild(renderTask(task));
    });
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
// Добавление задачи
if (addBtn) {
    addBtn.addEventListener("click", addTask);
}

if (quickAddInput) {
    quickAddInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
}

// Поиск
if (searchInput) {
    searchInput.addEventListener("input", () => renderAll());
}

// Фильтры
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

// Сортировка
if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderAll();
    });
}

// Очистка выполненных
if (clearCompletedBtn) {
    clearCompletedBtn.addEventListener("click", clearCompleted);
}

// ===== ИНИЦИАЛИЗАЦИЯ =====
initTasks();
renderAll();

// Глобальные функции для HTML
window.toggleTask = toggleTask;
window.deleteTask = deleteTask;