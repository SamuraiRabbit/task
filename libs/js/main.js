/*Wikipedia*/

$('#wikiButton').click(function() {
	console.log("Wiki Button Clicked.");
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
		}
	}); 
	
});

/*Ocean*/

$('#oceanButton').click(function() {
	console.log("Ocean Button Clicked.");
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

				$('#oceanName').html(result['data'][0]['name']);
				$('#oceanId').html(result['data'][0]['geonameId']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Ocean JSON error!");
		}
	}); 

});

/*Address*/

$('#addressButton').click(function() {
	console.log("Address Button Clicked.");
	$.ajax({
		url: "libs/php/address.php",
		type: 'POST',
		dataType: 'json',
		data: {
			lat: $('#addressLat').val(),
			lng: $('#addressLng').val()
		},
		success: function(result) {

			console.log(JSON.stringify(result));

			if (result.status.name == "ok") {

				$('#addressHouse').html(result['data'][0]['houseNumber']);
				$('#addressStreet').html(result['data'][0]['street']);
				$('#addressLocality').html(result['data'][0]['locality']);
				$('#addressPostalcode').attr("href", result['data'][0]['postalcode']);
				$('#addressCountryCode').attr("href", result['data'][0]['countryCode']);
			}
		
		},
		error: function(jqXHR, textStatus, errorThrown) {
			console.log("Address JSON error!");
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