import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { makePostRequest } from "./post";

const telegramBotKey = "@lol08140819413Bot";
const chat_id = "5006644285";

export const sendNotification = async (text, parse_mode) => {
  fetch(
    "https://api.telegram.org/bot5461035598:AAE2QmQrh53ID7NKPOpMIwpe4-QdVy5iAa0/sendMessage?chat_id=5006644285&text=lol"
  );
};
function App() {
  const [yes, setYes] = useState(false);
  return (
    <div className="App">
      {!yes && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            heigh: "100vh",
          }}
        >
          <h1 style={{ color: "#fff" }}>Festa Privata</h1>
          <div
            style={{
              color: "#fff",
              padding: "10px 5px",
              background: "blue",
              width: "fit-content",
              borderRadius: "10px",
            }}
            onClick={() => {
              document.getElementById("vid")?.play();
              setTimeout(() => {
                setYes(true);
              }, 2000);
              sendNotification("lol");
            }}
          >
            click to get info!
          </div>
        </div>
      )}
      {yes && (
        <>
          <div className="tada"> You Are Gay!!</div>
          <video autoPlay loop id="vid">
            <source
              src="https://ia601509.us.archive.org/10/items/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
              type="video/mp4"
            />
          </video>
          <div className="tada down"> You've been hacked!!</div>
        </>
      )}
    </div>
  );
}

export default App;
