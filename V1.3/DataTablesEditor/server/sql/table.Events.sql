-- 
-- Editor SQL for DB table Events
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `Events` (
	`id` int(10) NOT NULL auto_increment,
	`company_name` varchar(255),
	`group_name` varchar(255),
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
	`insurance_rep_phone` numeric(9,2),
	`services` varchar(255),
	`other_services` text,
	`how_many_techs` numeric(9,2),
	`lead_technician` varchar(255),
	`technician_1` varchar(255),
	`technician_2` varchar(255),
	`technician_3` varchar(255),
	`technician_4` varchar(255),
	`notes` text,
	PRIMARY KEY( `id` )
);