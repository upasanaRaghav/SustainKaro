import React, { useState } from 'react';
import { Typography, Box } from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ChallengesWidget = () => {
  const [markers, setMarkers] = useState([]);

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    const newMarker = { id: markers.length + 1, position: [lat, lng] };
    setMarkers([...markers, newMarker]);
  };

  return (
    <WidgetWrapper>
      <Typography variant="h5" fontWeight="500" mb="0.5rem">
        Challenges and Rewards
      </Typography>
      <Typography>
        Participate in challenges to encourage eco-friendly behavior and earn rewards!
      </Typography>
      <Box mt="1rem">
        <Typography variant="h6" fontWeight="500">
          Current Challenges:
        </Typography>
        <Typography>- Reduce water usage by 10% this month</Typography>
        <Typography>- Participate in a local cleanup</Typography>
      </Box>
      <Box mt="1rem">
        <Typography variant="h6" fontWeight="500">
          Rewards:
        </Typography>
        <Typography>- Earn badges and discounts on eco-friendly products</Typography>
        <Typography>- Get featured in our community spotlight</Typography>
      </Box>
      <Box mt="2rem">
        <Typography variant="h6" fontWeight="500" mb="1rem">
          Environmental Initiatives Map
        </Typography>
        <MapContainer 
          center={[20.5937, 78.9629]} // India coordinates
          zoom={5} 
          style={{ height: "300px", width: "100%" }}
          onClick={handleMapClick}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker) => (
            <Marker key={marker.id} position={marker.position}>
              <Popup>Custom Pin</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </WidgetWrapper>
  );
};

export default ChallengesWidget;
