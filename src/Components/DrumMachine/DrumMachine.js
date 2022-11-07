import './DrumMachine.css'
import DrumPadContainer from "./DrumPadContainer/DrumPadContainer";
import ControlsContainer from "./ControlsContainer/ControlsContainer";
import {useState} from "react";

const DrumMachine = () => {

    const [displayText, setDisplayText] = useState('Snare')
    const [power, setPower] = useState(true)

    return (
        <div id={"drum-machine"} className={"drum-machine"}>
            <DrumPadContainer />
            <ControlsContainer displayText={displayText} setPower={setPower}/>
        </div>
    )
}

export default DrumMachine