<?php
    // error reporting
    ini_set('display_errors', 'On');
    error_reporting(E_ALL);

    $executionStartTime = microtime(true);
   
    $url='http://api.geonames.org/findNearbyPostalCodesJSON?&formatted=true&lat=52&lng=1&username=samurairabbit&style=full';
    // creates the cURL object and sets some parameters. These are often documented by the API.
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);
	// executes the the cURL object and stores as variable $result
	$result=curl_exec($ch);

	curl_close($ch);
	// decodes the JSON received from the API as an associateive array so it can be appended to $output
	$decode = json_decode($result,true);	

	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "success";
	$output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
	$output['data'] = $decode['postalCodes'];
	
	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output);

?>