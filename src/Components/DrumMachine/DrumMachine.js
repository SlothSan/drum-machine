import './DrumMachine.css'
import DrumPadContainer from "./DrumPadContainer/DrumPadContainer";
import ControlsContainer from "./ControlsContainer/ControlsContainer";
import {useState} from "react";

const DrumMachine = (props) => {

    const [displayText, setDisplayText] = useState('Snare')
    const [volumeLevel, setVolumeLevel] = useState(0.5)

    return (
        <div id={"drum-machine"} className={"drum-machine"}>
            <DrumPadContainer setDisplayText={setDisplayText} powerOn={props.powerOn} volumeLevel={volumeLevel}/>
            <ControlsContainer displayText={displayText} powerOn={props.powerOn} setPowerOn={props.setPowerOn} setVolumeLevel={setVolumeLevel} volumeLevel={volumeLevel}/>
        </div>
    )
}

export default DrumMachine