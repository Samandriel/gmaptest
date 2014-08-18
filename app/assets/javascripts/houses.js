// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

(function() {
	window.onload = function() {
		var map;
		var mapDiv;
		var latlng;
		var marker;
		var markerArray = [];
		var myPosition; 

		initialize();
		setMarker();

		// Drag Marker and Update Position Value
		google.maps.event.addListener(marker, 'dragend', function() {  
	        myPosition = marker.getPosition();   
	        $("#house_latitude").val(myPosition.lat());
	        $("#house_longitude").val(myPosition.lng());
	        map.panTo(myPosition);
	    });

		
		// Initialize Map
		function initialize() {
			mapDiv = document.getElementById('map');
			latlng = new google.maps.LatLng(13.7500, 100.4667);
			var options = {
				center: latlng,
				zoom: 8,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
		    map = new google.maps.Map(mapDiv, options);			    	
	    };

	    // Add Marker to Map
		function setMarker() {
			for (var i = 0; i < 1; i++){
			    marker = new google.maps.Marker({
					position: latlng,
					map: map,
					title: "Drag marker to your location",
					draggable: true,
				});
				markerArray.push(marker);
			};			
		};	     
	};
		
})();