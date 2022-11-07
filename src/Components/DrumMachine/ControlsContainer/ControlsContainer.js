import './ControlsContainer.css'
import ControlsDisplay from "./ControlsDisplay/ControlsDisplay";
import ControlsPower from "./ControlsPower/ControlsPower";

const ControlsContainer = (props) => {
    return (
        <div className={"controls-container"}>
            <ControlsPower setPowerOn={props.setPowerOn} powerOn={props.powerOn} />
            <ControlsDisplay displayText={props.displayText} />
        </div>
    )
}

export default ControlsContainer