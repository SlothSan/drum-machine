import './DrumPadContainer.css'
import TopRow from "./TopRow/TopRow";

const DrumPadContainer = (props) => {
    return (
        <div className={"drum-pad-container"}>
            <TopRow setDisplayText={props.setDisplayText}/>
        </div>
    )
}

export default DrumPadContainer