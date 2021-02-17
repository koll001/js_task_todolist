const input = document.getElementById('js-inputTodo');
const todoList = document.getElementById('js-list');

const todos = [];

const createDeleteButton = (id) => {
	const deleteButton = document.createElement('button');
	deleteButton.innerText = '削除';
	deleteButton.addEventListener('click', () => {
		const targetIndex = todos.findIndex((index) => {
			return index.id === id;
		});
		todos.splice(targetIndex, 1);
		todos.map((todo, index) => {
			todo.id = index;
		});
		displayTodos(todos);
	});
	return deleteButton;
};

const deleteTableRow = () => {
	let rowLen = todoList.rows.length;
	if (rowLen > 1) {
		for (let i = rowLen - 1; i > 0; i--) {
			todoList.deleteRow(i);
		}
	}
};

const displayTodos = (todos) => {
	deleteTableRow();

	todos.map((todo) => {
		let newCell = [];
		let newRow = todoList.insertRow(-1);
		for (let i = 0; i < 4; i++) {
			newCell[i] = newRow.insertCell(i);
		}

		newCell[0].innerText = todo.id;
		newCell[1].innerText = todo.task;
		newCell[2].innerHTML = `<button type="button" id="stateChange">${todo.status}</button>`;
		newCell[3].appendChild(createDeleteButton(todo.id));
	});
};

const createTodo = (inputValue) => {
	const todo = {
		id: todos.length,
		task: inputValue,
		status: '作業中',
	};
	todos.push(todo);
	displayTodos(todos);
};

const addTodo = () => {
	const inputValue = input.value.trim();

	if (!inputValue.length) {
		return;
	}
	createTodo(inputValue);
	input.value = '';
};
