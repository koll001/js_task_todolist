const input = document.getElementById('js-inputTodo');
const todoList = document.getElementById('js-list');
const addTodo = document.getElementById('js-addTodo');
const radioButtons = document.getElementsByName('selectStatus');

const todos = [];

for (const radioButton of radioButtons) {
	radioButton.addEventListener('change', () => {
		switchStatus();
	});
}

const switchStatus = () => {
	const statusAll = document.getElementById('all');
	const statusWorking = document.getElementById('working');
	const statusComplete = document.getElementById('complete');

	if (statusAll.checked) {
		displayTodos(todos);
	} else if (statusWorking.checked) {
		const workingTodo = todos.filter((todo) => {
			return todo.status === '作業中';
		});
		displayTodos(workingTodo);
	} else if (statusComplete.checked) {
		const completeTodo = todos.filter((todo) => {
			return todo.status === '完了';
		});
		displayTodos(completeTodo);
	}
};

const createStateButton = (todo) => {
	const statusButton = document.createElement('button');
	statusButton.innerText = todo.status;
	statusButton.addEventListener('click', () => {
		if (todo.status === '作業中') {
			todo.status = '完了';
			statusButton.innerText = todo.status;
		} else if (todo.status === '完了') {
			todo.status = '作業中';
			statusButton.innerText = todo.status;
		}
		switchStatus();
	});
	return statusButton;
};

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
		switchStatus();
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

	if (todos.length) {
		todos.map((todo) => {
			let newCell = [];
			let newRow = todoList.insertRow(-1);
			for (let i = 0; i < 4; i++) {
				newCell[i] = newRow.insertCell(i);
			}

			newCell[0].innerText = todo.id;
			newCell[1].innerText = todo.task;
			newCell[2].appendChild(createStateButton(todo));
			newCell[3].appendChild(createDeleteButton(todo.id));
		});
	}
};

const createTodo = (inputValue) => {
	const todo = {
		id: todos.length,
		task: inputValue,
		status: '作業中',
	};
	todos.push(todo);
	switchStatus();
};

addTodo.addEventListener('click', () => {
	const inputValue = input.value.trim();

	if (!inputValue.length) {
		return;
	}
	createTodo(inputValue);
	input.value = '';
});
