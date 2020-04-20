import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

const LandingPage = () => {

  return(
    <div>
  <Jumbotron>
  <h1>Weather DataViz</h1>
  <p>
Weather data vizualizations from cities around the globe. 
  </p>
  <p>
    <a
    href="/city_lat_v_max_temp"
    >
      City Latitude x Max Temperature
    </a>
  </p>
  <p>
    <a
    href="/city_lat_v_wind_speed"
    >
      City Latitude x Wind Speed
    </a>
  </p>
  <p>
    <a
    href="/linreg_north_lat_hum"
    >
      Northern Hemisphere - City Latitude x Humidity
    </a>
  </p>
  <p>
    <a
    href="/linreg_north_lat_temp"
    >
      Southern Hemisphere - City Latitude x Max Temperature
    </a>
  </p>
  <p>
    <Button
    variant="danger" size="lg"
    href="/all_4"
    >
      VIEW ALL FOUR!
    </Button>
  </p>
</Jumbotron>
</div>
)
}

export default LandingPage;