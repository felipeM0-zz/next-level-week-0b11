import { MapControl } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";

import "../styles/leaflet.css";

class AddressControl extends MapControl {
  createLeafletElement() {
    const provider = new OpenStreetMapProvider();
    return new GeoSearchControl({
      provider: provider,
      autoClose: true,
      searchLabel: "Endereço",
      showMarker: false,
      keepResult: false,
    });
  }
}

export default AddressControl;
