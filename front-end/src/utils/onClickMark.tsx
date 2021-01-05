import { useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import mapIcon from "./mapIcon";

const CreateOrphanage = () => {
  const LocationMarker = () => {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        const { lat, lng } = e.latlng;
        setPosition({
          latitude: lat,
          longitude: lng,
        });
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position.latitude !== 0 ? (
      <Marker
        position={[position.latitude, position.longitude]}
        interactive={false}
        icon={mapIcon}
      />
    ) : null;
  };
  return <LocationMarker />;
};

export default CreateOrphanage;
