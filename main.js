const input = document.querySelector('#js-inputTodo');
const todoList = document.querySelector('#js-list');
var id = 1;

function createTodo(inputValue) {
	const listTable = document.createElement('tr');
	const listId = document.createElement('td');
	const list = document.createElement('td');
	const stateButton = document.createElement('td');
	const deleteButton = document.createElement('td');

	listId.innerText = id++;
	stateButton.innerHTML = `<button type="button" id="stateChange">作業中</button>`;
	deleteButton.innerHTML = `<button type="button" id="delete">削除</button>`;

	list.innerText = inputValue;
	listTable.append(listId, list, stateButton, deleteButton);
	todoList.appendChild(listTable);
}

function addTodo() {
	const inputValue = input.value.trim();

	if (!inputValue.length) {
		return;
	}
	createTodo(inputValue);
	input.value = '';
}
