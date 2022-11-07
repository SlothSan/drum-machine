import './App.css';
import DrumMachine from "./Components/DrumMachine/DrumMachine";
import {useEffect, useState} from "react";

function App() {
    const [powerOn, setPowerOn] = useState(true)

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, true)
    }, [])

    const onKeyDown = (event) => {
        event.preventDefault()
        event.stopPropagation()
        if(powerOn === false) {
            console.log("Power Off!")
        } else {
            document.getElementById(event.key.toUpperCase()).click();
        }
    }

    return (
    <div className="App">
      <DrumMachine onKeyDown={onKeyDown} powerOn={powerOn}/>
      <p>Created by Mike Oram</p>
    </div>
  );
}

export default App;
