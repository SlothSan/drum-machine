import './ControlsContainer.css'
import ControlsDisplay from "./ControlsDisplay/ControlsDisplay";
import ControlsPower from "./ControlsPower/ControlsPower";
import ControlsVolume from "./ControlsVolume/ControlsVolume";

const ControlsContainer = (props) => {
    return (
        <div className={"controls-container"}>
            <ControlsPower setPowerOn={props.setPowerOn} powerOn={props.powerOn} />
            <ControlsDisplay displayText={props.displayText} />
            <ControlsVolume />
        </div>
    )
}

export default ControlsContainer