import React, { useState } from "react";
import wifi from "../assets/wifi-1020-svgrepo-com.svg";
import "../styles/index.css";


function Information() {
  const [Name, setName] = useState("Eliezer");
  const [Velocidad, setVelocidad] = useState(100);
  

  return (
    <div className="Information">
      <div className="Top_information">
        <img src={wifi} alt="wifi-connection" />
        <span className="name_bold">{Velocidad} ms</span>
      </div>
      <p> Actualmente conduciendo: {Name}</p>
    </div>
  );
}

export default Information;
