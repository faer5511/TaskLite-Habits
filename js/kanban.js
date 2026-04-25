// ===== 1. DOM ЭЛЕМЕНТЫ =====
// Получаем все колонки доски
const columns = document.querySelectorAll(".column");

// ===== 2. ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
let tasks = [];              // Массив всех задач
let draggedTaskId = null;   // ID перетаскиваемой задачи
let sourceStatus = null;     // Статус колонки-источника

// ===== 3. ЗАГЛУШКИ ДЛЯ ДЕМОНСТРАЦИИ =====
// Используются при первом запуске, если localStorage пуст
const demoTasks = [
    {
        id: 1,
        title: "📚 Купить насвай для Эммы",
        description: "Продвинутые темы: замыкания, промисы, async/await",
        priority: "high",
        status: "todo",
        completed: false,
        createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 2,
        title: "Купить Фури для Евгения",
        description: "Нарисовать макеты в Figma",
        priority: "medium",
        status: "in-progress",
        completed: false,
        createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 3,
        title: "💪 Тренировка",
        description: "30 минут кардио + растяжка",
        priority: "medium",
        status: "done",
        completed: true,
        createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 4,
        title: "📝 Написать документацию",
        description: "Описание функционала TaskLite",
        priority: "low",
        status: "todo",
        completed: false,
        createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 5,
        title: "🐛 Исправить баги в Kanban",
        description: "Проблема с drag-and-drop",
        priority: "high",
        status: "in-progress",
        completed: false,
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    },
    {
        id: 6,
        title: "🚀 Задеплоить на GitHub Pages",
        description: "Настроить CI/CD",
        priority: "low",
        status: "done",
        completed: true,
        createdAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
        completedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
    },
    {
        id: 7,
        title: "🎯 Создать TaskLite Habits",
        description: "Трекер привычек с тепловой картой",
        priority: "high",
        status: "todo",
        completed: false,
        createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
        completedAt: null
    }
];

// ===== 4. РАБОТА С LOCALSTORAGE =====
// Загружаем задачи из localStorage или используем заглушки
function initTasks() {
    const stored = localStorage.getItem('tasklite_tasks');
    if (stored && JSON.parse(stored).length > 0) {
        tasks = JSON.parse(stored);
        // Добавляем статус для старых задач, если его нет
        tasks.forEach(task => {
            if (!task.status) {
                task.status = task.completed ? 'done' : 'todo';
            }
        });
    } else {
        tasks = JSON.parse(JSON.stringify(demoTasks));
    }
    saveTasks();
    renderAllColumns();
}

// Сохраняем задачи в localStorage
function saveTasks() {
    localStorage.setItem('tasklite_tasks', JSON.stringify(tasks));
}

// ===== 5. ОБНОВЛЕНИЕ СЧЁТЧИКОВ КОЛОНОК =====
// Подсчитывает количество задач в каждой колонке
function updateColumnCounts() {
    columns.forEach(column => {
        const status = column.dataset.status;
        const countSpan = column.querySelector('.column_count');
        if (countSpan) {
            const taskCount = tasks.filter(task => task.status === status).length;
            countSpan.textContent = taskCount;
        }
    });
}

// ===== 6. ФОРМАТИРОВАНИЕ ДАТЫ =====
// Преобразует ISO дату в человекочитаемый формат
function formatRelativeDate(dateString) {
    if (!dateString) return 'недавно';
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil(Math.abs(now - date) / (1000 * 60 * 60 * 24));

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

// Экранирование HTML спецсимволов (защита от XSS)
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ===== 8. РЕНДЕР ОДНОЙ КАРТОЧКИ ЗАДАЧИ =====
function renderTaskCard(taskData) {
    // Создаём элемент карточки
    const card = document.createElement('div');
    card.className = 'task kanban';
    card.setAttribute('data-id', taskData.id);
    card.setAttribute('draggable', 'true');

    // Заголовок задачи
    const title = document.createElement('h3');
    title.className = 'task__title';
    title.textContent = taskData.title;

    // Описание задачи (если есть)
    let description = null;
    if (taskData.description && taskData.description.trim() !== '') {
        description = document.createElement('p');
        description.className = 'task__desc';
        description.textContent = taskData.description;
    }

    // Футер с приоритетом и датой
    const footer = document.createElement('footer');
    footer.className = 'task__footer';

    // Бейдж приоритета
    const priority = document.createElement('span');
    priority.className = `task__label ${taskData.priority}`;
    priority.textContent = `${getPriorityEmoji(taskData.priority)} ${getPriorityText(taskData.priority)}`;

    // Дата создания
    const date = document.createElement('time');
    date.className = 'task__date';
    date.textContent = `📅 ${formatRelativeDate(taskData.createdAt)}`;

    footer.appendChild(priority);
    footer.appendChild(date);

    // Собираем карточку
    card.appendChild(title);
    if (description) card.appendChild(description);
    card.appendChild(footer);

    // Добавляем события перетаскивания
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);

    return card;
}

// ===== 9. РЕНДЕР ВСЕХ КОЛОНОК =====
// Отображает задачи в соответствующих колонках по статусу
function renderAllColumns() {
    columns.forEach(column => {
        const status = column.dataset.status;
        const taskList = column.querySelector('.task-list');

        if (taskList) {
            // Очищаем колонку
            taskList.innerHTML = '';

            // Фильтруем задачи по статусу колонки
            const columnTasks = tasks.filter(task => task.status === status);

            // Добавляем каждую задачу в колонку
            columnTasks.forEach(task => {
                taskList.appendChild(renderTaskCard(task));
            });
        }
    });

    // Обновляем счётчики после рендера
    updateColumnCounts();
}

// ===== 10. ОБРАБОТЧИКИ DRAG & DROP =====
// Начало перетаскивания
function handleDragStart(e) {
    const card = e.target.closest('.task');
    if (!card) return;

    draggedTaskId = parseInt(card.getAttribute('data-id'));
    const column = card.closest('.column');
    if (column) {
        sourceStatus = column.dataset.status;
    }

    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

// Конец перетаскивания
function handleDragEnd(e) {
    const card = e.target.closest('.task');
    if (card) {
        card.classList.remove('dragging');
    }

    // Убираем подсветку со всех колонок
    columns.forEach(col => {
        col.classList.remove('drag-over');
    });

    draggedTaskId = null;
    sourceStatus = null;
}

// ===== 11. ИНИЦИАЛИЗАЦИЯ DROP ЗОН =====
// Настройка областей, куда можно бросить задачу
function initDragAndDrop() {
    columns.forEach(column => {
        const taskList = column.querySelector('.task-list');
        if (!taskList) return;

        // Разрешаем сброс (без этого drop не сработает)
        taskList.addEventListener('dragover', (e) => {
            e.preventDefault();
            column.classList.add('drag-over');
        });

        // Убираем подсветку при уходе мыши
        taskList.addEventListener('dragleave', () => {
            column.classList.remove('drag-over');
        });

        // Обработка сброса задачи
        taskList.addEventListener('drop', (e) => {
            e.preventDefault();
            column.classList.remove('drag-over');

            if (!draggedTaskId) return;

            const targetStatus = column.dataset.status;

            // Если задача перемещается в ту же колонку - ничего не делаем
            if (sourceStatus === targetStatus) return;

            // Находим задачу по ID
            const taskIndex = tasks.findIndex(t => t.id === draggedTaskId);
            if (taskIndex === -1) return;

            const movedTask = tasks[taskIndex];

            // Обновляем статус задачи
            movedTask.status = targetStatus;

            // Обновляем completed в зависимости от статуса
            if (targetStatus === 'done') {
                movedTask.completed = true;
                movedTask.completedAt = new Date().toISOString();
            } else {
                movedTask.completed = false;
                movedTask.completedAt = null;
            }

            // Сохраняем и перерендериваем
            saveTasks();
            renderAllColumns();

            draggedTaskId = null;
            sourceStatus = null;
        });
    });
}

// ===== 12. ДОБАВЛЕНИЕ НОВОЙ ЗАДАЧИ =====
function addTaskToColumn(status) {
    // Запрашиваем название задачи
    const title = prompt('Введите название задачи:');
    if (!title || title.trim() === '') return;

    // Запрашиваем описание
    const description = prompt('Описание (необязательно):', '');

    // Запрашиваем приоритет
    const priorityInput = prompt('Приоритет (высокий/средний/низкий):', 'средний');

    // Нормализация приоритета
    let priority = 'medium';
    const priorityLower = priorityInput.toLowerCase();
    if (priorityLower === 'высокий' || priorityLower === 'high' || priorityLower === 'в') {
        priority = 'high';
    }
    if (priorityLower === 'низкий' || priorityLower === 'low' || priorityLower === 'н') {
        priority = 'low';
    }

    // Создаём новую задачу
    const newTask = {
        id: Date.now(),
        title: title.trim(),
        description: description?.trim() || '',
        priority: priority,
        status: status,
        completed: status === 'done',
        createdAt: new Date().toISOString(),
        completedAt: status === 'done' ? new Date().toISOString() : null
    };

    tasks.push(newTask);
    saveTasks();
    renderAllColumns();
}

// ===== 13. КНОПКИ ДОБАВЛЕНИЯ ЗАДАЧ =====
// Находим все кнопки "Добавить задачу" и вешаем обработчик
document.querySelectorAll('.add-task').forEach(btn => {
    btn.addEventListener('click', () => {
        const column = btn.closest('.column');
        if (column) {
            addTaskToColumn(column.dataset.status);
        }
    });
});

// ===== 14. ЗАПУСК ПРИЛОЖЕНИЯ =====
// Инициализируем данные
initTasks();
// Настраиваем Drop зоны
initDragAndDrop();