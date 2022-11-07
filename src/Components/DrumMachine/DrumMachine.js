import './DrumMachine.css'
import DrumPadContainer from "./DrumPadContainer/DrumPadContainer";
import ControlsContainer from "./ControlsContainer/ControlsContainer";
import {useState} from "react";

const DrumMachine = (props) => {

    const [displayText, setDisplayText] = useState('')

    return (
        <div id={"drum-machine"} className={"drum-machine"}>
            <DrumPadContainer setDisplayText={setDisplayText} powerOn={props.powerOn}/>
            <ControlsContainer displayText={displayText} setPowerOn={props.setPowerOn}/>
        </div>
    )
}

export default DrumMachine