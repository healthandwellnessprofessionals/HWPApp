
/*
 * Editor client script for DB table Events
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: '/api/Events',
		table: '#Events',
		fields: [
			{
				"label": "Company Name:",
				"name": "company_name"
			},
			{
				"label": "Group Name:",
				"name": "group_name"
			},
			{
				"label": "Clinic Address:",
				"name": "clinic_address",
				"type": "textarea"
			},
			{
				"label": "Clinic Date:",
				"name": "clinic_date",
				"type": "datetime",
				"format": "ddd, D MMM YY"
			},
			{
				"label": "Set up Time:",
				"name": "set_up_time",
				"type": "datetime",
				"format": "HH:mm"
			},
			{
				"label": "Start Time:",
				"name": "start_time",
				"type": "datetime",
				"format": "HH:mm"
			},
			{
				"label": "End Time:",
				"name": "end_time",
				"type": "datetime",
				"format": "h:mm a"
			},
			{
				"label": "Site Contact Name:",
				"name": "site_contact_name"
			},
			{
				"label": "Site Contact Email:",
				"name": "site_contact_email"
			},
			{
				"label": "Site Contact Phone:",
				"name": "site_contact_phone"
			},
			{
				"label": "Insurance Rep Name:",
				"name": "insurance_rep_name"
			},
			{
				"label": "Insurance Rep Email:",
				"name": "insurance_rep_email"
			},
			{
				"label": "Insurance Rep Phone:",
				"name": "insurance_rep_phone"
			},
			{
				"label": "Services:",
				"name": "services",
				"type": "checkbox",
				"separator": ",",
				"options": [
					"Biometric",
					" Nicotine Employee Paid",
					" Nicotine Company Paid",
					" Flu",
					" PSA"
				]
			},
			{
				"label": "Other Services:",
				"name": "other_services",
				"type": "textarea"
			},
			{
				"label": "How Many Techs:",
				"name": "how_many_techs"
			},
			{
				"label": "Lead Technician:",
				"name": "lead_technician"
			},
			{
				"label": "Technician:",
				"name": "technician_1"
			},
			{
				"label": "Technician:",
				"name": "technician_2"
			},
			{
				"label": "Technician:",
				"name": "technician_3"
			},
			{
				"label": "Technician:",
				"name": "technician_4"
			},
			{
				"label": "Notes:",
				"name": "notes",
				"type": "textarea"
			}
		]
	} );

	var table = $('#Events').DataTable( {
		ajax: '/api/Events',
		columns: [
			{
				"data": "company_name"
			},
			{
				"data": "group_name"
			},
			{
				"data": "clinic_address"
			},
			{
				"data": "clinic_date"
			},
			{
				"data": "start_time"
			},
			{
				"data": "end_time"
			},
			{
				"data": "services"
			},
			{
				"data": "other_services"
			},
			{
				"data": "how_many_techs"
			},
			{
				"data": "lead_technician"
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
$('#Events').DataTable( {
    responsive: {
        details: {
            display: $.fn.dataTable.Responsive.display.childRowImmediate
        }
    }
} );

}(jQuery));
