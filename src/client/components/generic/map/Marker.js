import React from 'react'
import { renderToString } from "react-dom/server";
import {MarkerInfoStyle} from './styled'
export function Marker(google, item, map, bounds, infowindow) {
  let marker = new google.maps.Marker({
    position: {
      lat: parseFloat(item.lat),
      lng: parseFloat(item.lng)
    },
    map: map
  });

  map.markers.push(marker);
  bounds.extend(marker.position);
  let markersInfoWindow = <MarkerInfoStyle>{item.price ? `£${item.price}` : '£'}</MarkerInfoStyle>;
  google.maps.event.addListener(marker, "mouseover", function() {
    infowindow.close();
    infowindow.setContent(renderToString(markersInfoWindow));
    infowindow.open(map, marker);
  });

  return marker
}
