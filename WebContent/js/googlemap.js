function loadMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.550375, -74.455212),
        //40.550375, -74.455212
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROAD,
        disableDefaultUI: true//to disable the UI controller of google map
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.550375, -74.455212),
        map: map,
        animation: google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
        content: "1 Corprate Place South, Piscataway, NJ"
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    google.maps.event.removeListener(myListener);
}
google.maps.event.addDomListener(window, 'load', loadMap);