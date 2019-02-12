<?php

/*
 * Editor server script for DB table techniciansupply
 * Created by http://editor.datatables.net/generator
 */

// DataTables PHP library and database connection
include( "lib/DataTables.php" );

// Alias Editor classes so they are easy to use
use
	DataTables\Editor,
	DataTables\Editor\Field,
	DataTables\Editor\Format,
	DataTables\Editor\Mjoin,
	DataTables\Editor\Options,
	DataTables\Editor\Upload,
	DataTables\Editor\Validate,
	DataTables\Editor\ValidateOptions;

// The following statement can be removed after the first run (i.e. the database
// table has been created). It is a good idea to do this to help improve
// performance.
$db->sql( "CREATE TABLE IF NOT EXISTS `techniciansupply` (
	`id` int(10) NOT NULL auto_increment,
	`name` varchar(255),
	`address` varchar(255),
	`email` varchar(255),
	`phone` numeric(9,2),
	`method_of_contact` varchar(255),
	`can_do_flu_shots` varchar(255),
	`bilingual` varchar(255),
	`cardiocheck` varchar(255),
	`cardiocheck_plus` varchar(255),
	`cardiocheck_lipid_strips` numeric(9,2),
	`cap_tubes` numeric(9,2),
	`glucose_strips` numeric(9,2),
	`lancets` numeric(9,2),
	`nicotine_swabs` numeric(9,2),
	`flu_supplies` numeric(9,2),
	`psa_supplies` numeric(9,2),
	PRIMARY KEY( `id` )
);" );

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'techniciansupply', 'id' )
	->fields(
		Field::inst( 'name' )
			->validator( Validate::notEmpty() ),
		Field::inst( 'address' ),
		Field::inst( 'email' )
			->validator( Validate::email() ),
		Field::inst( 'phone' ),
		Field::inst( 'method_of_contact' ),
		Field::inst( 'can_do_flu_shots' ),
		Field::inst( 'bilingual' ),
		Field::inst( 'cardiocheck' ),
		Field::inst( 'cardiocheck_plus' ),
		Field::inst( 'cardiocheck_lipid_strips' ),
		Field::inst( 'cap_tubes' ),
		Field::inst( 'glucose_strips' ),
		Field::inst( 'lancets' ),
		Field::inst( 'nicotine_swabs' ),
		Field::inst( 'flu_supplies' ),
		Field::inst( 'psa_supplies' )
	)
	->process( $_POST )
	->json();
