$(function() {
    // Get the form.
    var form = $('#demo-form2');

    // Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		}).done(function(response) {

		    // Clear the form.
		    $('#descricao').val('');
		});
	});
});