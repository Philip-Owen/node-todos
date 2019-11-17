const figlet = require('figlet');

const prompt = {
	help: `
  Usage: node-todos [command] <options>

    commands:
      add <todo>          add a todo to the list
      view                view the list of todos
      delete <id>         delete a todo from the list
      clear <confirm>     clears all todos from the list
  `,
	add: `
  Usage: node-todos add <todo> 

    example:
      node-todos add this is my first todo

    *** note ***
      If using special characters, wrap todos in either single or double quotes to avoid issues      
  `,
	clear: `
  Usage: node-todos clear <confirm>

    example:
      node-todos clear --y
  `,
	delete: `
  Usage: node-todos delete <id>

    example:
      node-todos delete 1
  `,
};

module.exports = (args = null) => {
	switch (args) {
		case 'add':
			console.log('\u001b[2J\u001b[0;0H' + figlet.textSync('add', { font: 'doom' }) + prompt.add);
			break;
		case 'delete':
			console.log('\u001b[2J\u001b[0;0H' + figlet.textSync('delete', { font: 'doom' }) + prompt.delete);
			break;
		case 'clear':
			console.log('\u001b[2J\u001b[0;0H' + figlet.textSync('clear', { font: 'doom' }) + prompt.clear);
			break;
		default:
			console.log('\u001b[2J\u001b[0;0H' + figlet.textSync('node-todos', { font: 'doom' }) + prompt.help);
			break;
	}
};
