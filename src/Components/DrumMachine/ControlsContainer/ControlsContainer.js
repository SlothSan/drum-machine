import './ControlsContainer.css'
import ControlsDisplay from "./ControlsDisplay/ControlsDisplay";

const ControlsContainer = (props) => {
    return (
        <div className={"controls-container"}>
            <ControlsDisplay displayText={props.displayText} />
        </div>
    )
}

export default ControlsContainer