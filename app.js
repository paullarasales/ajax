class Todo {
    constructor(task, completed=false) {
        this.task = task;
        this.completed = completed;
    }

    toggle() {
        this.completed = !this.completed;
    }
}


class TodoApp {
    constructor() {
        this.todos = [];
        this.todos = this.loadTodos();
        this.todoInput = document.getElementById('todo-input');
        this.addTodoButton = document.getElementById("add-todo");
        this.todoList = document.getElementById('todo-list');

        this.addTodoButton.addEventListener('click', () => this.addTodo());
        this.todoList.addEventListener('click', (e) => this.handleTodoClick(e));

        this.render();
    }

    addTodo() {
        const task = this.todoInput.value.trim();
        if (task) {
            const todo = new Todo(task);
            this.todos.push(todo);
            this.saveTodos();
            this.render();
            this.todoInput.value = '';
        }
    }

    handleTodoClick(e) {
        const target = e.target;
        if (target.classList.contains('toggle')) {
            const index = target.dataset.index;
            this.todos[index].toggle();
            this.render();
        } else if (target.classList.contains('delete')) {
            const index = target.dataset.index;
            this.todos.splice(index, 1);
            this.render();
        }
    }

    render() {
        this.todoList.innerHTML = '';
        this.todos.forEach((todo, index) => {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <span class="${todo.completed ? 'completed' : ''}">${todo.task}</span>
                <div>
                    <button class="toggle" data-index="${index}">${todo.completed ? 'Undo' : 'Complete'}</button>
                    <button class="delete" data-index="${index}">Delete</button>
                </div>
            `;
            this.todoList.appendChild(todoItem);
        })
    }

    saveTodos() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadTodos() {
        const todosJson = localStorage.getItem('todos');
        const todosArray = todosJson ?  JSON.parse(todosJson) : [];
        return todosArray.map(todo => new Todo(todo.task, todo.completed));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
})