var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  });
  this.markers = [];
  this.bounceMarkers = this.bounceMarkers.bind(this);
}

MapWrapper.prototype.addMarker = function(coord) {
  var marker = new google.maps.Marker({
    position: coord,
    map: this.googleMap
  })
  this.markers.push(marker);
}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    var position = {lat: event.latLng.lat(), lng: event.latLng.lng()};
    this.addMarker(position);
  }.bind(this));
}

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.chicagoZoom = function() {
  var position = {lat:41.8333925, lng: -88.0121498}
  this.googleMap.setCenter(position);
}
