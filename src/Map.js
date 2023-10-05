import React, { useState } from "react";
import {
  MapContainer,
  Popup,
  TileLayer,
  Marker,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useData } from "./PostProvider";

const Map = () => {
  const { data, lat, lng } = useData();
  const mapNav = useNavigate();

  function LocationMarker() {
    const [position, setPosition] = useState(null);

    useMapEvents({
      click(e) {
        console.log(e);
        setPosition(e.latlng);
        const LatLng = position;
        console.log(LatLng);
      },
    });
    // console.log({position});
    const LatLng = position;
    console.log(LatLng);
    if (position !== null)
      mapNav(`/app/form?lat=${LatLng.lat}&lng=${LatLng.lng}`);

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {data.map((list) => {
        return (
          <Marker position={[list.lat, list.lng]} key={list.id}>
            <Popup>{list.city}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
