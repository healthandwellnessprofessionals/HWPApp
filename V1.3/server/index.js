let controller = require( './table.Technician.js' );
let bodyParser = require( 'body-parser' );
let express = require( 'express' );
let bb = require( 'express-busboy' );
let db = require('./db');
require('source-map-support').install();

let app = express();

// Show error information
process.on( 'unhandledRejection', (reason, p) => {
	console.log( 'Unhandled promise error:  ' + p + reason );
	console.log( 'stack: ' + reason.stack );
} );

// Allow file uploads
app.use( bodyParser.urlencoded({ extended: true }) );
bb.extend( app, {
	upload: true
} );

// Controller(s)
app.use( controller );

// Static files
app.use( express.static('public') );

// 500 Error
app.use( function( err, req, res, next ) {
	res
		.status(500)
		.send('Something broke!');
} );

// 404 Error
app.use( function( req, res ) {
	res
		.status(404)
		.send('Sorry cant find that!');
} );

// Listening
app.listen( 8082, '0.0.0.0', function () {
    console.log( 'DataTables Editor demo created by Generator - navigate to http://localhost:8082/Technician.html' );
} );


// Test the database connection on startup by getting a list of table names in the db
// This can safely be removed if you are happy with your db connection configuration.
// It is used purely to show a console error if the connection is not available.
let query;
let bindings;

switch(db.client.constructor.name) {
	case 'Client_MSSQL':
		query = 'SELECT table_name FROM information_schema.tables WHERE table_schema = \'public\' AND table_catalog = ?',
		bindings = [ db.client.database() ];
		break;
	case 'Client_MySQL':
	case 'Client_MySQL2':
		query = 'SHOW TABLES';
		break;
	case 'Client_PG':
		query =  'SELECT table_name FROM information_schema.tables WHERE table_schema = current_schema() AND table_catalog = ?';
		bindings = [ db.client.database() ];
		break;
	case 'Client_SQLite3':
		query = "SELECT name AS table_name FROM sqlite_master WHERE type='table'";
		break;
}

db.raw(query, bindings)
	.then(function(results) {
		return results.map((row) => row.table_name);
	})
	.catch(function(err) {
		console.error( err.toString() );
	});
