import React from "react";
import Header from "./components/Header";
import Imagen_video from "./components/Transmision_video";
import Dashboard from "./components/Dashboard";
import Streaming from './components/StreamingCamara'
function App() {
  return (
    <>
      <Header></Header>
{/*       <Imagen_video></Imagen_video> */}

        <div className="video_recepcion">
        <Streaming/>
        </div>

      <Dashboard /> 

    </>
  );
}

export default App;
