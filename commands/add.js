const path = require('path');
const fs = require('fs');

module.exports = args => {
	const todo = { text: args.join(' ').replace(/\n/g, ' ') };
	const todos = require('../todos.json');

	todos.push(todo);

	fs.writeFile(path.resolve(__dirname, '../todos.json'), JSON.stringify(todos), err => {
		if (!err) {
			require('./view')();
			console.log('\nTODO ADDED\n');
			process.exit();
		}
		console.log(`Error writing todos: ${err}`);
	});
};
