const path = require('path');
const fs = require('fs');

module.exports = args => {
	const todo = { text: args.join(' ').replace(/\n/g, ' ') };
	const todos = require('../todos.json');

	todos.push(todo);

	fs.writeFile(path.resolve(__dirname, '../todos.json'), JSON.stringify(todos), err => {
		if (!err) {
			console.log('\u001b[2J\u001b[0;0H' + '\nTODO ADDED\n');
		}
		console.log(`Error writing todos: ${err}`);
	});
};
