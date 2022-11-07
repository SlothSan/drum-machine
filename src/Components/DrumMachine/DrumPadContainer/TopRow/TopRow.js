import DrumPad from "./DrumPad/DrumPad";

const TopRow = (props) => {
    return (
        <div className={"top-row row"}>
            <DrumPad letter={"q"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"} drumName={"Heater-1"} setDisplayText={props.setDisplayText} powerOn={props.powerOn}/>
            <DrumPad letter={"w"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"} drumName={"Heater-2"} setDisplayText={props.setDisplayText} powerOn={props.powerOn}/>
            <DrumPad letter={"e"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"} drumName={"Heater-3"} setDisplayText={props.setDisplayText} powerOn={props.powerOn}/>
        </div>
    )
}

export default TopRow