-- 
-- Editor SQL for DB table Events
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `Events` (
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
);