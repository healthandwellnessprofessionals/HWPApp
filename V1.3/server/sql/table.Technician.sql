-- 
-- Editor SQL for DB table Technician
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `Technician` (
	`tech` int(10) NOT NULL auto_increment,
	`technician_name` varchar(255),
	`address` text,
	`email` varchar(255),
	`phone` numeric(9,2),
	`method_of_contact` varchar(255),
	`can_do_flu_shots` varchar(255),
	`bilingual` varchar(255),
	`possess_a_cardiocheck` varchar(255),
	`possess_a_carediocheck_plus` varchar(255),
	PRIMARY KEY( `tech` )
);