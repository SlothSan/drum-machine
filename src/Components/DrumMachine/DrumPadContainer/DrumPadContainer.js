import './DrumPadContainer.css'
import TopRow from "./TopRow/TopRow";
import MiddleRow from "./MiddleRow/MiddleRow";

const DrumPadContainer = (props) => {
    return (
        <div className={"drum-pad-container"}>
            <TopRow setDisplayText={props.setDisplayText} powerOn={props.powerOn}/>
            <MiddleRow setDisplayText={props.setDisplayText} powerOn={props.powerOn}/>
        </div>
    )
}

export default DrumPadContainer