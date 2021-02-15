const input = document.querySelector('#js-inputTodo');
const todoList = document.querySelector('#js-list');
let id = 1;

const todos = [];

function displayTodos(todos) {
	const listTable = document.createElement('tr');
	const listId = document.createElement('td');
	const list = document.createElement('td');
	const stateButton = document.createElement('td');
	const deleteButton = document.createElement('td');

	for (i = 0; i < todos.length; i++) {
		listId.innerText = todos[i].id;
		stateButton.innerHTML = `<button type="button" id="stateChange">${todos[i].status}</button>`;
		deleteButton.innerHTML = `<button type="button" id="delete">削除</button>`;

		list.innerText = todos[i].task;
		listTable.append(listId, list, stateButton, deleteButton);
		todoList.appendChild(listTable);
	}
}

function createTodo(inputValue) {
	const todo = {
		id: id++,
		task: inputValue,
		status: '作業中',
	};
	todos.push(todo);
	displayTodos(todos);
}

function addTodo() {
	const inputValue = input.value.trim();

	if (!inputValue.length) {
		return;
	}
	createTodo(inputValue);
	input.value = '';
}
