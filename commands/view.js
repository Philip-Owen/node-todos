const path = require('path');
const fs = require('fs');

module.exports = () => {
	const data = fs.readFileSync(path.resolve(__dirname, '../todos.json'));
	const todos = JSON.parse(data);

	let output = '\n    Todos:\n\n';

	todos.map((todo, index) => (output += `     ${index + 1}: ${todo.text}\n`));

	console.log('\u001b[2J\u001b[0;0H' + output);
};
