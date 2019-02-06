/*
* KnexJS database connection information
* Created by http://editor.datatables.net/generator
*/

let knex = require('knex');

module.exports = knex({
	client: 'mysql',

	connection: {
		database:    '',
		host:        '',
		password:    '',
		user:        '',
		dateStrings: true
	}
});
