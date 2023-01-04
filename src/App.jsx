import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [yes, setYes] = useState(false);
  return (
    <div
      className="App"
      onClick={() => {
        document.getElementById("vid").play();
        setTimeout(() => {
          setYes(true);
        }, 1000);
      }}
    >
      {yes && <div className="tada"> You Are Gay!!</div>}
      <video autoPlay loop id="vid">
        <source
          src="https://ia601509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
          type="video/mp4"
        />
      </video>
      {yes && <div className="tada down"> You've been hacked!!</div>}
    </div>
  );
}

export default App;
