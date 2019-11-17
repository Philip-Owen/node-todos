const path = require('path');
const fs = require('fs');

module.exports = args => {
	const todos = require('../todos.json');
	const [id] = args;

	if (typeof id !== 'number') {
		console.log(
			'\u001b[2J\u001b[0;0H' + `\n   Invalid todo id: "${id}" is not a valid input. Value must be a number\n`
		);
		process.exit();
	}

	if (id > todos.length) {
		console.log('\u001b[2J\u001b[0;0H' + `\n   Invalid todo id: No todo with the id of ${id}\n`);
		process.exit();
	}

	const removedTodo = todos[id - 1];
	const filteredTodos = todos.filter((todo, index) => index !== id - 1);

	fs.writeFile(path.resolve(__dirname, '../todos.json'), JSON.stringify(filteredTodos), err => {
		if (!err) {
			require('./view')();
			console.log(`\nREMOVED TODO - ${id}: ${removedTodo.text}\n`);
			process.exit();
		}
		console.log(`Error writing todos: ${err}`);
	});
};
