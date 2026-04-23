// ===== KANBAN BOARD - Drag & Drop доска задач =====
// Заглушки в HTML, JS только управляет логикой

// ===== DOM ЭЛЕМЕНТЫ =====
const columns = document.querySelectorAll(".column");
let draggedTaskId = null;
let sourceStatus = null;

// ===== ОБНОВЛЕНИЕ СЧЁТЧИКОВ =====
function updateColumnCounts() {
    columns.forEach(column => {
        const taskList = column.querySelector('.task-list');
        const countSpan = column.querySelector('.column_count');
        if (countSpan && taskList) {
            const taskCount = taskList.querySelectorAll('.task').length;
            countSpan.textContent = taskCount;
        }
    });
}

// ===== DRAG & DROP =====
function handleDragStart(e) {
    const card = e.target.closest('.task');
    if (!card) return;

    draggedTaskId = card.getAttribute('data-id');
    sourceStatus = card.closest('.column')?.dataset.status;
    card.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
    const card = e.target.closest('.task');
    if (card) card.classList.remove('dragging');

    columns.forEach(col => col.classList.remove('drag-over'));
    draggedTaskId = null;
    sourceStatus = null;
}

// ===== ИНИЦИАЛИЗАЦИЯ DRAG & DROP ДЛЯ КАРТОЧЕК =====
function initDragEvents() {
    document.querySelectorAll('.task').forEach(task => {
        task.setAttribute('draggable', 'true');
        task.addEventListener('dragstart', handleDragStart);
        task.addEventListener('dragend', handleDragEnd);
    });
}

// ===== DROP ЗОНЫ ДЛЯ КОЛОНОК =====
function initDropZones() {
    columns.forEach(column => {
        const taskList = column.querySelector('.task-list');
        if (!taskList) return;

        taskList.addEventListener('dragover', (e) => {
            e.preventDefault();
            column.classList.add('drag-over');
        });

        taskList.addEventListener('dragleave', () => {
            column.classList.remove('drag-over');
        });

        taskList.addEventListener('drop', (e) => {
            e.preventDefault();
            column.classList.remove('drag-over');

            if (!draggedTaskId) return;

            const targetStatus = column.dataset.status;
            if (sourceStatus === targetStatus) return;

            // Находим перетаскиваемую карточку
            const draggedCard = document.querySelector(`.task[data-id="${draggedTaskId}"]`);
            if (!draggedCard) return;

            // Перемещаем карточку в новую колонку
            const targetList = column.querySelector('.task-list');
            if (targetList) {
                targetList.appendChild(draggedCard);
            }

            // Обновляем счётчики
            updateColumnCounts();

            draggedTaskId = null;
            sourceStatus = null;
        });
    });
}

// ===== ДОБАВЛЕНИЕ НОВОЙ ЗАДАЧИ =====
function addTaskToColumn(status, columnElement) {
    const title = prompt('Введите название задачи:');
    if (!title || title.trim() === '') return;

    const description = prompt('Описание (необязательно):', '');
    const priorityInput = prompt('Приоритет (высокий/средний/низкий):', 'средний');

    let priority = 'medium';
    let priorityText = '🟡 Средний';
    let priorityClass = 'medium';

    const priorityLower = priorityInput.toLowerCase();
    if (priorityLower === 'высокий' || priorityLower === 'high') {
        priority = 'high';
        priorityText = '🔴 Высокий';
        priorityClass = 'high';
    } else if (priorityLower === 'низкий' || priorityLower === 'low') {
        priority = 'low';
        priorityText = '🟢 Низкий';
        priorityClass = 'low';
    }

    // Создаём новую карточку
    const newTaskId = Date.now();
    const taskCard = document.createElement('div');
    taskCard.className = 'task kanban';
    taskCard.setAttribute('data-id', newTaskId);
    taskCard.setAttribute('draggable', 'true');

    const now = new Date();
    const dateStr = `сегодня ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;

    taskCard.innerHTML = `
        <h3 class="task__title">${escapeHtml(title.trim())}</h3>
        ${description ? `<p class="task__desc">${escapeHtml(description)}</p>` : ''}
        <footer class="task__footer">
            <span class="task__label ${priorityClass}">${priorityText}</span>
            <time class="task__date">📅 ${dateStr}</time>
        </footer>
    `;

    // Добавляем события перетаскивания
    taskCard.addEventListener('dragstart', handleDragStart);
    taskCard.addEventListener('dragend', handleDragEnd);

    // Добавляем в колонку
    const taskList = columnElement.querySelector('.task-list');
    if (taskList) {
        taskList.appendChild(taskCard);
    }

    // Обновляем счётчики
    updateColumnCounts();
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ===== КНОПКИ ДОБАВЛЕНИЯ =====
document.querySelectorAll('.add-task').forEach(btn => {
    btn.addEventListener('click', () => {
        const column = btn.closest('.column');
        if (column) {
            addTaskToColumn(column.dataset.status, column);
        }
    });
});

// ===== ОБНОВЛЕНИЕ ПРИ ЗАГРУЗКЕ =====
function init() {
    updateColumnCounts();
    initDragEvents();
    initDropZones();
}

// Запускаем после загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}