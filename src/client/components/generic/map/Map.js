export function Map(google, LatLng) {
  const map = new google.maps.Map(document.getElementById("Map"), {
    center: { lat: parseFloat(LatLng.lat), lng: parseFloat(LatLng.lng) },
    zoom: 9,
    mapTypeControl: true,
    panControl: false,
    //zoomControl: false,
    streetViewControl: false
  });
  return map
}
