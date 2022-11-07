import './DrumPadContainer.css'
import TopRow from "./TopRow/TopRow";
import MiddleRow from "./MiddleRow/MiddleRow";
import BottomRow from "./BottomRow/BottomRow";

const DrumPadContainer = (props) => {
    return (
        <div className={"drum-pad-container"}>
            <TopRow setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
            <MiddleRow setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
            <BottomRow setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
        </div>
    )
}

export default DrumPadContainer