// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

(function() {
	window.onload = function() {
		// Initialize map
		var mapDiv = document.getElementById('map');
		var latlng = new google.maps.LatLng(13.7500, 100.4667);
		var options = {
			center: latlng,
			zoom: 6,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		// Create map
	    var map = new google.maps.Map(mapDiv, options);

		// Looping through places array
		for (var i = 0; i < 1; i++){
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: "Drag marker to your location",
				draggable: true,
			});
		};

		// Drag Marker and Update Position Value
		google.maps.event.addListener(marker, 'dragend', function() {  
	        var myPosition = marker.getPosition();   
	        $("#house_latitude").val(myPosition.lat());
	        $("#house_longitude").val(myPosition.lng());
	        map.panTo(myPosition);
	    }); 

	};
		
})();