
/*
 * Editor client script for DB table techniciansupply
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.techniciansupply.php',
		table: '#techniciansupply',
		fields: [
			{
				"label": "Name:",
				"name": "name"
			},
			{
				"label": "Address:",
				"name": "address"
			},
			{
				"label": "Email:",
				"name": "email"
			},
			{
				"label": "Phone:",
				"name": "phone"
			},
			{
				"label": "Method of Contact:",
				"name": "method_of_contact",
				"type": "select",
				"options": [
					"Email",
					" Phone"
				]
			},
			{
				"label": "Can do Flu Shots?:",
				"name": "can_do_flu_shots",
				"type": "select",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Bilingual:",
				"name": "bilingual",
				"type": "select",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Cardiocheck:",
				"name": "cardiocheck",
				"type": "select",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Cardiocheck Plus:",
				"name": "cardiocheck_plus",
				"type": "select",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Cardiocheck Lipid Strips:",
				"name": "cardiocheck_lipid_strips"
			},
			{
				"label": "Cap Tubes:",
				"name": "cap_tubes"
			},
			{
				"label": "Glucose Strips:",
				"name": "glucose_strips"
			},
			{
				"label": "Lancets:",
				"name": "lancets"
			},
			{
				"label": "Nicotine Swabs:",
				"name": "nicotine_swabs"
			},
			{
				"label": "Flu Supplies:",
				"name": "flu_supplies"
			},
			{
				"label": "PSA Supplies:",
				"name": "psa_supplies"
			}
		]
	} );

	var table = $('#techniciansupply').DataTable( {
		ajax: 'php/table.techniciansupply.php',
		columns: [
			{
				"data": "name"
			},
			{
				"data": "address"
			},
			{
				"data": "email"
			},
			{
				"data": "phone"
			},
			{
				"data": "method_of_contact"
			}
		],
		select: true,
		lengthChange: false
	} );

	new $.fn.dataTable.Buttons( table, [
		{ extend: "create", editor: editor },
		{ extend: "edit",   editor: editor },
		{ extend: "remove", editor: editor }
	] );

	table.buttons().container()
		.appendTo( $('.col-sm-6:eq(0)', table.table().container() ) );
} );

}(jQuery));

