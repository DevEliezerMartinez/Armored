import React, { useState } from "react";
import background_dashboard from "../assets/Dash_background.svg";
import car from "../assets/car-2-svgrepo-com 1.svg";
import Lights from '../assets/lights.svg'
import DateHour from './DateHour'
import Brake from '../assets/brake-pad-alert-small 1.svg'
function Principal() {
  const [Status, setStatus] = useState("Parking");
  const [EstiloDriving, setEstiloDriving] = useState("color:red");
  const [Speed, setSpeed] = useState(0);
  const [Gear, setGear] = useState(1);




  function change() {
    if (Status == "Parking") {
      setStatus("Driving");
    } else {
      setStatus("Parking");
    }
  }

  function up() {  
     
      setGear(Gear+1)

  }

  return (
    <>
      <div className="dash_container ">
        <img
          src={car}
          id="car"
          onClick={() => {
            change();
          }}
        />
        <h5>{Status}</h5>

        <img
          id="background_dashboard"
          src={background_dashboard}
          alt="wifi-background_dashboard"
        />

        <img
          id="lights"
          src={Lights}
          alt="lights"
        />

        <div className="dates">
         <DateHour/>
        </div>

        <div id="speed">
          <p>{Speed}</p>
          
          <h3>KM/H</h3>
        </div>


          <div className="Marchas">
            <h4>{Gear}</h4>
            <h3>Gear</h3>
          </div>
          <button onClick={()=>{up()}}>Gear</button>

        <img
          id="brake"
          src={Brake}
          alt="wifi-brake"
        />
      </div>
    </>
  );
}

export default Principal;
