
/*
 * Editor client script for DB table Events
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.Events.php',
		table: '#Events',
		fields: [
			{
				"label": "Company Name:",
				"name": "company_name"
			},
			{
				"label": "Clinic Name:",
				"name": "clinic_name"
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
				"label": "Set up time:",
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
				"format": "HH:mm"
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
				"label": "Biometric:",
				"name": "biometric",
				"type": "checkbox",
				"separator": ",",
				"options": [
					"Yes"
				]
			},
			{
				"label": "Nicotine:",
				"name": "nicotine",
				"type": "checkbox",
				"separator": ",",
				"options": [
					"Company Paid",
					" Employee Paid"
				]
			},
			{
				"label": "Flu:",
				"name": "flu",
				"type": "checkbox",
				"separator": ",",
				"options": [
					"Yes"
				]
			},
			{
				"label": "PSA:",
				"name": "psa",
				"type": "checkbox",
				"separator": ",",
				"options": [
					"Yes"
				]
			},
			{
				"label": "Other Services:",
				"name": "other_services",
				"type": "textarea"
			},
			{
				"label": "Lead Technician:",
				"name": "lead_technician"
			},
			{
				"label": "Technician:",
				"name": "technician"
			},
			{
				"label": "Technician:",
				"name": "technician2"
			},
			{
				"label": "Technician:",
				"name": "technician3"
			},
			{
				"label": "Technician:",
				"name": "technician4"
			},
			{
				"label": "Notes:",
				"name": "notes",
				"type": "textarea"
			}
		]
	} );

	var table = $('#Events').DataTable( {
		dom: 'Bfrtip',
		ajax: 'php/table.Events.php',
		columns: [
			{
				"data": "company_name"
			},
			{
				"data": "clinic_name"
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
				"data": "biometric"
			},
			{
				"data": "nicotine"
			},
			{
				"data": "flu"
			},
			{
				"data": "psa"
			},
			{
				"data": "other_services"
			},
			{
				"data": "lead_technician"
			},
			{
				"data": "notes"
			}
		],
		select: true,
		lengthChange: false,
		buttons: [
			{ extend: 'create', editor: editor },
			{ extend: 'edit',   editor: editor },
			{ extend: 'remove', editor: editor }
		]
	} );
} );

}(jQuery));

