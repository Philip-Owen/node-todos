const minimist = require('minimist');

module.exports = () => {
	const cli = minimist(process.argv.slice(2));
	const { _: args, y } = cli;
	const cmd = args.length == 0 ? 'help' : args.shift().toLowerCase();

	switch (cmd) {
		case 'add':
			if (args.length === 0) {
				require('./utils/menu')('add');
				break;
			}
			require('./commands/add')(args);
			break;
		case 'delete':
			if (args.length === 0) {
				require('./utils/menu')('delete');
				break;
			}
			require('./commands/delete')(args);
			break;
		case 'view':
			require('./commands/view')();
			break;
		case 'clear':
			if (!y) {
				require('./utils/menu')('clear');
				break;
			}
			require('./commands/clear')(y);
			break;
		case 'help':
		default:
			require('./utils/menu')();
			break;
	}
};
