function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 41.232724, lng: 69.195328};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Sergeli Tumani' // Title Location
    });
}