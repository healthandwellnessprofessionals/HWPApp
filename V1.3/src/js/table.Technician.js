
/*
 * Editor client script for DB table Technician
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: '/api/Technician',
		table: '#Technician',
		fields: [
			{
				"label": "Technician Name:",
				"name": "technician_name"
			},
			{
				"label": "Address:",
				"name": "address",
				"type": "textarea"
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
				"type": "radio",
				"options": [
					"Email",
					" Phone"
				]
			},
			{
				"label": "Can do Flu Shots:",
				"name": "can_do_flu_shots",
				"type": "radio",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Bilingual:",
				"name": "bilingual",
				"type": "radio",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Possess a Cardiocheck:",
				"name": "possess_a_cardiocheck",
				"type": "radio",
				"options": [
					"Yes",
					" No"
				]
			},
			{
				"label": "Possess a Carediocheck Plus:",
				"name": "possess_a_carediocheck_plus",
				"type": "radio",
				"options": [
					"Yes",
					" No"
				]
			}
		]
	} );

	var table = $('#Technician').DataTable( {
		ajax: '/api/Technician',
		columns: [
			{
				"data": "technician_name"
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
		.prependTo( $('div.fg-toolbar:eq(0)', table.table().container() ) );
} );

}(jQuery));

