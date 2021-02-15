const input = document.getElementById('js-inputTodo');
const todoList = document.getElementById('js-list');
let id = 1;

const todos = [];

function deleteTableRow() {
	let rowLen = todoList.rows.length;
	if (rowLen > 1) {
		for (let i = rowLen - 1; i > 0; i--) {
			todoList.deleteRow(i);
		}
	}
}

function displayTodos(todos) {
	deleteTableRow();

	for (let i = 0, length = todos.length; i < length; i++) {
		let newCell = [];
		let newRow = todoList.insertRow(-1);
		for (let i = 0; i < 4; i++) {
			newCell[i] = newRow.insertCell(i);
		}

		newCell[0].innerText = todos[i].id;
		newCell[1].innerText = todos[i].task;
		newCell[2].innerHTML = `<button type="button" id="stateChange">${todos[i].status}</button>`;
		newCell[3].innerHTML = `<button type="button" id="delete">削除</button>`;
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
