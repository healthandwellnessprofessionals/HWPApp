-- 
-- Editor SQL for DB table techniciansupply
-- Created by http://editor.datatables.net/generator
-- 

CREATE TABLE IF NOT EXISTS `techniciansupply` (
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
);