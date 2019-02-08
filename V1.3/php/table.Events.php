<?php

/*
 * Editor server script for DB table Events
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
$db->sql( "CREATE TABLE IF NOT EXISTS `Events` (
	`id` int(10) NOT NULL auto_increment,
	`company_name` varchar(255),
	`clinic_name` varchar(255),
	`clinic_address` text,
	`clinic_date` date,
	`set_up_time` time,
	`start_time` time,
	`end_time` time,
	`site_contact_name` varchar(255),
	`site_contact_email` varchar(255),
	`site_contact_phone` varchar(255),
	`insurance_rep_name` varchar(255),
	`insurance_rep_email` varchar(255),
	`insurance_rep_phone` varchar(255),
	`biometric` varchar(255),
	`nicotine` varchar(255),
	`flu` varchar(255),
	`psa` varchar(255),
	`other_services` text,
	`lead_technician` varchar(255),
	`technician` varchar(255),
	`technician2` varchar(255),
	`technician3` varchar(255),
	`technician4` varchar(255),
	`notes` text,
	PRIMARY KEY( `id` )
);" );

// Build our Editor instance and process the data coming from _POST
Editor::inst( $db, 'Events', 'id' )
	->fields(
		Field::inst( 'company_name' ),
		Field::inst( 'clinic_name' ),
		Field::inst( 'clinic_address' ),
		Field::inst( 'clinic_date' )
			->validator( Validate::dateFormat( 'D, j M y' ) )
			->getFormatter( Format::dateSqlToFormat( 'D, j M y' ) )
			->setFormatter( Format::dateFormatToSql( 'D, j M y' ) ),
		Field::inst( 'set_up_time' )
			->validator( Validate::dateFormat( 'H:i' ) )
			->getFormatter( Format::datetime( 'H:i:s', 'H:i' ) )
			->setFormatter( Format::datetime( 'H:i', 'H:i:s' ) ),
		Field::inst( 'start_time' )
			->validator( Validate::dateFormat( 'H:i' ) )
			->getFormatter( Format::datetime( 'H:i:s', 'H:i' ) )
			->setFormatter( Format::datetime( 'H:i', 'H:i:s' ) ),
		Field::inst( 'end_time' )
			->validator( Validate::dateFormat( 'H:i' ) )
			->getFormatter( Format::datetime( 'H:i:s', 'H:i' ) )
			->setFormatter( Format::datetime( 'H:i', 'H:i:s' ) ),
		Field::inst( 'site_contact_name' ),
		Field::inst( 'site_contact_email' )
			->validator( Validate::email() ),
		Field::inst( 'site_contact_phone' ),
		Field::inst( 'insurance_rep_name' ),
		Field::inst( 'insurance_rep_email' )
			->validator( Validate::email() ),
		Field::inst( 'insurance_rep_phone' ),
		Field::inst( 'biometric' ),
		Field::inst( 'nicotine' ),
		Field::inst( 'flu' ),
		Field::inst( 'psa' ),
		Field::inst( 'other_services' ),
		Field::inst( 'lead_technician' ),
		Field::inst( 'technician' ),
		Field::inst( 'technician2' ),
		Field::inst( 'technician3' ),
		Field::inst( 'technician4' ),
		Field::inst( 'notes' )
	)
	->process( $_POST )
	->json();
