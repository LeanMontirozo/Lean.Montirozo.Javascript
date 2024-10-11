document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const messageDiv = document.getElementById('message');

    const loadTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => addTodoToDOM(todo.text, todo.completed));
    };

    const addTodoToDOM = (text, completed = false) => {
        const li = document.createElement('li');
        li.textContent = text;
        if (completed) li.classList.add('completed');
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Poista';
        deleteBtn.onclick = () => {
            li.remove();
            saveTodos();
        };

        const completeBtn = document.createElement('button');
        completeBtn.textContent = completed ? 'Palauta' : 'Valmis';
        completeBtn.onclick = () => {
            li.classList.toggle('completed');
            saveTodos();
        };

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    };

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = todoInput.value.trim();
        
        if (inputValue.length < 3) {
            messageDiv.textContent = "Tehtävän on oltava vähintään 3 merkkiä pitkä.";
            todoInput.classList.add('error');
            return;
        }

        messageDiv.textContent = "";
        todoInput.classList.remove('error');
        addTodoToDOM(inputValue);
        todoInput.value = "";
        saveTodos();
    });

    loadTodos();
});