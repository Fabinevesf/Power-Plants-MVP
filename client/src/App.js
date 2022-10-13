import './App.css'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function App() {
  return (
    <div className='App'>
      <h1>hello map</h1>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: '1800px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  )
}

export default App
