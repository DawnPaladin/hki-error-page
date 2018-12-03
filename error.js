var parameters = {};
if (document.location.toString().indexOf('?') !== -1) {
	var query = document.location
		.toString() // get the query string
		.replace(/^.*?\?/, '') // and remove any existing hash string (thanks, @vrijdenker)
		.replace(/#.*$/, '')
		.split('&');

	for (var i = 0, l = query.length; i < l; i++) {
		var aux = decodeURIComponent(query[i]).split('=');
		parameters[aux[0]] = aux[1];
	}
}

if (parameters.threeDigits) {
	$('.raven title').text("quoth the raven");
	$('.error-code').text(parameters.threeDigits).removeClass('hidden');

	var pageError;
	switch (parameters.threeDigits) {
		case "404":
			pageError = "cannot be found.";
			break;
		case "403":
			pageError = "is forbidden.";
			break;
		case "401":
			pageError = "requires authentication.";
			break;
		case "500":
			pageError = "cannot be displayed.";
			break;
		default:
			pageError = "is unavailable.";
	}
	
	if (parameters.path) {
		$('.line1').text("but the page at");
		$('.path').text(parameters.path);
		$('.line2').text(pageError);
	}
}

if (parameters.server) {
	$('.visit-link')
		.removeClass('hidden')
		.attr('href', 'http://' + parameters.server)
		.text("Visit " + parameters.server);
}