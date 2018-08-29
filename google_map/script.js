$(document).ready(function(){
    'use strict';
    function loadMap() {
    var center = new google.maps.LatLng(47.846460,35.149270);
        var marker = new google.maps.Marker({
            position: center,
            draggable:true,
            icon:'img/favicon.png',
            title:'Click to zoom',
            animation: google.maps.Animation.BOUNCE
        });
        var mapOptions = {
            center: center,
            zoom:12,
            // mapTypeId: google.maps.MapTypeId.HYBRID,
            panControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL,
                position:google.maps.ControlPosition.LEFT_BOTTOM
            },
            mapTypeControl: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true,

        };
        var infowindow = new google.maps.InfoWindow({
            content:"My town"
        });

        google.maps.event.addListener(marker,'click',function() {
            infowindow.open(map,marker);
        });
        var map = new google.maps.Map(document.getElementById("map"),mapOptions);
        marker.setMap(map);


        // google.maps.event.addDomListener(window, 'load', loadMap);
    }


    loadMap();
});

// directionsDisplay = new google.maps.DirectionsRenderer();
// directionsService = new google.maps.DirectionsService;
// var request = {
//     origin: new google.maps.LatLng(47.846460,35.149270), //точка старта
//     destination: new google.maps.LatLng(47.856460,35.149270), //точка финиша
//     travelMode: google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
// };
//
// directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//         directionsDisplay.setDirections(response);
//     }
// });
//
// directionsDisplay.setMap(map);