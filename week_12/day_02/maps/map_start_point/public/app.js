var initialize = function() {
  var mapDiv = document.getElementById('main-map')
  var center = {lat:55.9469, lng: -3.2020}
  var mainMap = new MapWrapper(mapDiv, center, 18);

  mainMap.addMarker(center);
  mainMap.addMarker({lat:55.94, lng:-3.19})
  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers);

  var chicagoButton = document.querySelector('#chicago-button');
  chicagoButton.addEventListener('click', mainMap.chicagoZoom.bind(mainMap));
}

window.addEventListener('load', initialize);
