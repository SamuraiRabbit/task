/*Wikipedia*/

$('#wikiButton').click(function() {
	//console.log("Wiki Button Clicked.");
	$.ajax({
		url: "libs/php/wikipedia.php",
		type: 'POST',
		dataType: 'json',
		data: {
			q: $('#selectWikiCity').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

				$('#wikiTitle').html(result['data'][0]['title']);
				$('#wikiSummary').html(result['data'][0]['summary']);
				$('#wikiURL').html(result['data'][0]['wikipediaUrl']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Wiki JSON error!");
			$("#error-report").html(jqXHR.responseText);
		}
	}); 
	
});

/*Ocean*/

$('#oceanButton').click(function() {
	//console.log("Ocean Button Clicked.");
	$.ajax({
		url: "libs/php/ocean.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#oceanLat').val(),
			lng: $('#oceanLng').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

				$('#oceanName').html(result['data']['name']);
				$('#oceanId').html(result['data']['geonameId']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Ocean JSON error!");
			$("#error-report").html(jqXHR.responseText);
		}
	}); 

});

/*PostalCodes*/

$('#pcButton').click(function() {
	console.log("Post Code Button Clicked.");
	$.ajax({
		url: "libs/php/postalCodes.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#pcLat').val(),
			lng: $('#pcLng').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

				$('#pcCountryCode').html(result['data'][0]['countryCode']);
				$('#pcPlaceName').html(result['data'][0]['placeName']);
				$('#pcPostalCode').html(result['data'][0]['postalCode']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Address JSON error!");
			$("#error-report").html(jqXHR.responseText);
		}
	}); 

});

/* Pre Loader */ 

$(window).on('load', function () {
    if ($('#preloader').length) {
    $('#preloader').delay(1000).fadeOut('slow', function () {
    $(this).remove();
    });
    }
    });