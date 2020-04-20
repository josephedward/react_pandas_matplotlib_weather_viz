import React from "react";
import { BrowserRouter as Router, Switch, Route, 
    // Link
 } from "react-router-dom";

import landingPage from "./components/landingpage";
import data from "./components/data";
import city_lat_v_max_temp from "./components/city_lat_v_max_temp"
import linreg_north_lat_hum from "./components/linreg_north_lat_hum"
import city_lat_v_wind_speed from "./components/city_lat_v_wind_speed"
import linreg_north_lat_temp from "./components/linreg_north_lat_temp"
import all_4 from "./components/all_4"
import './App.css';

function App() {
  return (
    <Router>
        <Switch>
            <Route 
            exact path = "/" component={landingPage}            
            />
            <Route  exact path="/data" component={data}
            />
            <Route exact path="/city_lat_v_max_temp" component={city_lat_v_max_temp}/>
            <Route exact path="/linreg_north_lat_hum" component={linreg_north_lat_hum}/>
            <Route exact path="/city_lat_v_wind_speed" component={city_lat_v_wind_speed}/>
            <Route exact path="/linreg_north_lat_temp" component={linreg_north_lat_temp}/>
            <Route exact path="/all_4" component={all_4} />
        </Switch>
    </Router>
    )
}

export default App;
