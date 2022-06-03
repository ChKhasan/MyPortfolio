import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 41.299496,
      lng: 69.240074,
    },
    zoom: 11,
  };

  render() {
    const handleApiLoaded = (map, maps) => {
      // use map and maps objects
    };
    return (
      <div style={{ height: "300px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDLLBbNwibBitC_d5mBnTT1ciZEcuGVEbk" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          <AnyReactComponent
            lat={41.299496}
            lng={69.240074}
            text="My Marker"
            zoom={10}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
