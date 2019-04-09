import React, {Component} from "react";
import {MapStyle} from './styled'
import {Marker} from './Marker'
import {Map} from './Map'
import Loading from '../loading'

class GoogleMapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null,
      loading: false
    }
  }
  componentDidMount() {
      this.loadGoogle()
      this.initMap()
  }

  componentWillUnmount() {
    this.removeMap()
  }

  loadGoogle = () => {
    let google = window.google || {}
    if (google.maps) {
      return
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places`
    script.id = 'google-maps-script'
    document.querySelector('head').appendChild(script)
  }

  initMap = () => {
    let google = window.google || {}

    if (google.maps) {
      this.drawMap()
    } else {
      this.setState({ timer: setTimeout(this.initMap, 100) })
      return
    }
  }

  removeMap = () => {
    const script = document.querySelector('#google-maps-script')
    script.parentNode.removeChild(script)
    window.google = {}
  }

  drawMap = () => {
    let LatLng = {lat: 51.5, lng:-0.2}
    let map = Map(google, LatLng)
    let bounds = new google.maps.LatLngBounds()
    let infowindow = new google.maps.InfoWindow();
    map.markers = [];
    let markers=[];
    if(this.props.coords){
      let coords = this.props.coords.split(',');
      markers.push({lat:coords[0], lng:coords[1], price:this.props.price})
    } else if (this.props.booking) {
      this.props.booking.map(el => {
        let coords = el.property.coords.split(',');
        markers.push({lat:coords[0], lng:coords[1], price:el.property.price})
      })
    }

    if (markers){
      markers.map(item => {
        Marker(google, item, map, bounds, infowindow)
      })
    }
  }

  render(){
    let Map;
    if (this.state.loading){
      Map = <Loading />
    } else {
      Map = <MapStyle id={"Map"} />
    }
    return (
      Map
    )
  }
}


export default GoogleMapContainer

