import './App.css';
import DrumMachine from "./Components/DrumMachine/DrumMachine";
import {useEffect, useState} from "react";

function App() {
    const [powerOn, setPowerOn] = useState(true)

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, true)
        document.addEventListener('keyup', onKeyUp, true)
    }, [])

    const onKeyDown = (event) => {
        event.preventDefault()
        event.stopPropagation()
        if(powerOn === false) {
            console.log("Power Off!")
        } else {
            document.getElementById(event.key).click();
            document.getElementById(event.key).classList.add("drum-pad-active");
        }
    }

    const onKeyUp = (event) => {
        document.getElementById(event.key).classList.remove("drum-pad-active");
    }

    return (
    <div className="App">
      <p>Drum Machine</p>
      <DrumMachine onKeyDown={onKeyDown} powerOn={powerOn} setPowerOn={setPowerOn}/>
      <p>Created by Mike Oram</p>
    </div>
  );
}

export default App;
