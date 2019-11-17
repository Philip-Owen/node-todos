module.exports = () => {
	const todos = require('../todos.json');

	let output = '\n    Todos:\n\n';

	todos.map((todo, index) => (output += `     ${index + 1}: ${todo.text}\n`));

	console.log('\u001b[2J\u001b[0;0H' + output);
};
