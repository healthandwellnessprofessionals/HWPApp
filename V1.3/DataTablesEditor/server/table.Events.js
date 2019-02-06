/*
* Controller for DB table Events
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

router.all('/api/Events', async function(req, res) {
	// The following statement can be removed after the first run (i.e. the database
	// table has been created). It is a good idea to do this to help improve
	// performance.
	await db.raw( "CREATE TABLE IF NOT EXISTS `Events` (\
	`id` int(10) NOT NULL auto_increment,\
	`company_name` varchar(255),\
	`group_name` varchar(255),\
	`clinic_address` text,\
	`clinic_date` date,\
	`set_up_time` time,\
	`start_time` time,\
	`end_time` time,\
	`site_contact_name` varchar(255),\
	`site_contact_email` varchar(255),\
	`site_contact_phone` varchar(255),\
	`insurance_rep_name` varchar(255),\
	`insurance_rep_email` varchar(255),\
	`insurance_rep_phone` numeric(9,2),\
	`services` varchar(255),\
	`other_services` text,\
	`how_many_techs` numeric(9,2),\
	`lead_technician` varchar(255),\
	`technician_1` varchar(255),\
	`technician_2` varchar(255),\
	`technician_3` varchar(255),\
	`technician_4` varchar(255),\
	`notes` text,\
	PRIMARY KEY( `id` )\
);" );

	let editor = new Editor(db, 'Events').fields(
		new Field("company_name")
		    .validator( Validate.notEmpty() ),
		new Field("group_name")
		    .validator( Validate.notEmpty() ),
		new Field("clinic_address"),
		new Field("clinic_date")
		        .validator(Validate.dateFormat("ddd, D MMM YY"))
		        .getFormatter(Format.sqlDateToFormat("ddd, D MMM YY"))
		        .setFormatter(Format.formatSqlToDate("ddd, D MMM YY")),
		new Field("set_up_time")
		        .validator(Validate.dateFormat("HH:mm"))
		        .getFormatter(Format.dateTime("HH:mm:ss", "HH:mm"))
		        .setFormatter(Format.dateTime("HH:mm", "HH:mm:ss")),
		new Field("start_time")
		        .validator(Validate.dateFormat("HH:mm"))
		        .getFormatter(Format.dateTime("HH:mm:ss", "HH:mm"))
		        .setFormatter(Format.dateTime("HH:mm", "HH:mm:ss")),
		new Field("end_time")
		        .validator(Validate.dateFormat("h:mm a"))
		        .getFormatter(Format.dateTime("HH:mm:ss", "h:mm a"))
		        .setFormatter(Format.dateTime("h:mm a", "HH:mm:ss")),
		new Field("site_contact_name"),
		new Field("site_contact_email")
		    .validator( Validate.email() ),
		new Field("site_contact_phone"),
		new Field("insurance_rep_name"),
		new Field("insurance_rep_email")
		    .validator( Validate.email() ),
		new Field("insurance_rep_phone"),
		new Field("services"),
		new Field("other_services"),
		new Field("how_many_techs")
		    .validator( Validate.maxNum( 20 ) ),
		new Field("lead_technician"),
		new Field("technician_1"),
		new Field("technician_2"),
		new Field("technician_3"),
		new Field("technician_4"),
		new Field("notes"),
	);

	await editor.process(req.body);
	res.json(editor.data());
});

module.exports = router;
