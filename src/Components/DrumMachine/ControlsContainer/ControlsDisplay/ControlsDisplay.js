import './ControlsDisplay.css'

const ControlsDisplay = (props) => {
    return (
        <div id={"display"} className={"controls-display"}>
            <p className={"controls-display-text"}>{props.displayText}</p>
        </div>
    )
}

export default ControlsDisplay