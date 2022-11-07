import './App.css';
import DrumMachine from "./Components/DrumMachine/DrumMachine";
import {useEffect} from "react";

function App() {

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown, true)
    }, [])

    const onKeyDown = (event) => {
        document.getElementById(event.key).click();
    }

    return (
    <div className="App">
      <DrumMachine onKeyDown={onKeyDown}/>
      <p>Created by Mike Oram</p>
    </div>
  );
}

export default App;
