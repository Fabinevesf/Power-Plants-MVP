//IMPORTS

import './App.css'
//instalei essea funcionalidade do react pra selecionar os paises, tipos de fontes de energia e ano;
import Multiselect from 'multiselect-react-dropdown'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'

function App() {
  const [plants, setPlants] = useState([])
  const [filter, setFilter] = useState(null)

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
  function filterSource(items, item) {
    console.log('oi', items, item)
    setFilter(item.key)
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
          onSelect={filterSource}
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
            {
              fuelSource: 'Hydro',
              key: 'Hydro',
            },
          ]}
        />
      </div>
      {plants.length && (
        <div className='map'>
          <MapContainer
            center={[49.611622, 6.131935]}
            zoom={6}
            scrollWheelZoom={false}
            style={{ height: '700px', width: '1000px' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            {plants
              .filter((el) => {
                if (filter === el.energy_source_level_2 || !filter) {
                  return el
                }
              })
              .map((usina) => (
                <Marker position={[usina.lat, usina.lon]} key={usina.id}>
                  <Popup className='PopUp'>
                    <p>
                      Year Installation: {usina.as_of_year}
                      <br />
                      Source: {usina.energy_source_level_2}
                      <br />
                      Capacity - MW: {usina.electrical_capacity}
                    </p>
                  </Popup>
                </Marker>
              ))}
          </MapContainer>
        </div>
      )}
      <div>
        <h6>Developed by Fabiana Neves 2022</h6>
      </div>
    </div>
  )
}

export default App
