//IMPORTS

import './App.css'
//instalei essea funcionalidade do react pra selecionar os paises, tipos de fontes de energia e ano;
import Multiselect from 'multiselect-react-dropdown'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function App() {
  const [plants, setPlants] = useState([])
  const fuelSource = [
    //onde procurar no back: energy_source_level_2
    { fuelSource: 'Solar', id: 1 },
    { fuelSource: 'Hydro', id: 2 },
    { fuelSource: 'Wind', id: 3 },
    { fuelSource: 'BioEnergy', id: 4 },
  ]
  const [options] = useState(fuelSource)
  const country = [
    { country: 'France', id: 1 },
    { country: 'Finland', id: 2 },
    { country: 'Brazil', id: 3 },
    { country: 'Portugal', id: 4 },
    { country: 'Germany', id: 5 },
    { country: 'UK', id: 6 },
  ]
  const [countries] = useState(country)

  useEffect(() => {
    getPlants()
  }, [])

  function getPlants() {
    fetch('/power-plants')
      .then((res) => res.json())
      .then((json) => {
        // upon success, update tasks
        console.log(json)
        setPlants(json)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //THE HTML OUTPUT
  return (
    <div className='App'>
      <div className='App-Header'>
        <h1>🌱 POWER PLANTS 🌱</h1>
      </div>

      <div className='Dropdown-Multiselect'>
        <h4>Select your Power Plant</h4>

        <Multiselect
          displayValue='key'
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={[
            {
              fuelSource: 'Solar',
              key: 'Solar',
            },
            {
              fuelSource: 'Wind',
              key: 'Wind',
            },
            {
              fuelSource: 'BioEnergy',
              key: 'BioEnergy',
            },
          ]}
        />
      </div>
      <div className='map'>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={8}
          scrollWheelZoom={false}
          style={{ height: '700px', width: '1000px' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />

          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default App
