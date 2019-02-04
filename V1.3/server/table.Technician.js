/*
* Controller for DB table Technician
* Created by http://editor.datatables.net/generator
*/
let db = require('./db');
let router = require('express').Router();
let {
	Editor,
	Field,
	Validate,
	Format,
	Options
} = require("datatables.net-editor-server");

router.all('/api/Technician', async function(req, res) {
	// The following statement can be removed after the first run (i.e. the database
	// table has been created). It is a good idea to do this to help improve
	// performance.
	await db.raw( "CREATE TABLE IF NOT EXISTS `Technician` (\
	`tech` int(10) NOT NULL auto_increment,\
	`technician_name` varchar(255),\
	`address` text,\
	`email` varchar(255),\
	`phone` numeric(9,2),\
	`method_of_contact` varchar(255),\
	`can_do_flu_shots` varchar(255),\
	`bilingual` varchar(255),\
	`possess_a_cardiocheck` varchar(255),\
	`possess_a_carediocheck_plus` varchar(255),\
	PRIMARY KEY( `tech` )\
);" );

	let editor = new Editor(db, 'Technician').fields(
		new Field("technician_name")
		    .validator( Validate.notEmpty() ),
		new Field("address"),
		new Field("email")
		    .validator( Validate.email() ),
		new Field("phone")
		    .validator( Validate.maxNum( 11 ) ),
		new Field("method_of_contact"),
		new Field("can_do_flu_shots"),
		new Field("bilingual"),
		new Field("possess_a_cardiocheck"),
		new Field("possess_a_carediocheck_plus"),
	);

	await editor.process(req.body);
	res.json(editor.data());
});

module.exports = router;
