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
            try {
                document.getElementById(event.key).click();
                document.getElementById(event.key).classList.add("drum-pad-active");
            } catch {
                console.log('button not found')
            }
        }
    }

    const onKeyUp = (event) => {
        if (document.getElementById(event.key)) {
            document.getElementById(event.key).classList.remove("drum-pad-active");
        }
    }

    return (
    <div className="App">
      <p className={"app-text"}>Drum Machine</p>
      <DrumMachine onKeyDown={onKeyDown} powerOn={powerOn} setPowerOn={setPowerOn}/>
      <p className={"app-text"}>Created by Mike Oram</p>
    </div>
  );
}

export default App;
