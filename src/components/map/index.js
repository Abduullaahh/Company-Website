import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { tw } from 'twind';
import { useEffect } from 'react';

// Import marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Define your business locations here
const locations = [
  {
    id: 1,
    name: 'Lahore, Pakistan',
    coordinates: [31.5497, 74.3436],
  },
  {
    id: 2,
    name: 'Islamabad, Pakistan',
    coordinates: [33.6844, 73.0479],
  },
  {
    id: 3,
    name: 'Karachi, Pakistan',
    coordinates: [24.8607, 67.0011],
  },
  {
    id: 4,
    name: 'New York, USA',
    coordinates: [40.7128, -74.0060],
  },
  {
    id: 5,
    name: 'Tokyo, Japan',
    coordinates: [35.6762, 139.6503],
  },
  {
    id: 6,
    name: 'London, UK',
    coordinates: [51.5074, -0.1278],
  },
  {
    id: 7,
    name: 'Sydney, Australia',
    coordinates: [-33.8688, 151.2093],
  },
  {
    id: 8,
    name: 'Paris, France',
    coordinates: [48.8566, 2.3522],
  },
  {
    id: 9,
    name: 'Dubai, UAE',
    coordinates: [25.276987, 55.296249],
  },
];

const BusinessMap = () => {
  useEffect(() => {
    // Fix the icon issue
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
  }, []);

  return (
    <>
      {/* <h2 className={tw(`mt-2 text-5xl lg:text-4xl font-bold tracking-tight text-gray-900 pb-4`)} style={{textAlign:'left', marginLeft:'10%', marginTop:"10%"}}>
        <span className={tw(`text-black`)}>We’re here </span>
        <span style={{color:'#4338CA'}}> for you</span>
      </h2> */}
      <MapContainer center={[37.0902, -95.7129]} zoom={4} style={{ height: '400px', width: '80%', margin: '10% auto' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        {/* {locations.map(location => (
          <Marker key={location.id} position={location.coordinates}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))} */}
      </MapContainer>
    </>
  );
};

export default BusinessMap;
