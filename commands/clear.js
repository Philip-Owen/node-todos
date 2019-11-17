const path = require('path');
const fs = require('fs');

module.exports = args => {
	if (args) {
		const todos = [];

		fs.writeFile(path.resolve(__dirname, '../todos.json'), JSON.stringify(todos), err => {
			if (!err) {
				console.log('\u001b[2J\u001b[0;0H' + `\n   TODOs list cleared!\n`);
				process.exit();
			}
			console.log(`Error writing todos: ${err}`);
		});
	}
};
