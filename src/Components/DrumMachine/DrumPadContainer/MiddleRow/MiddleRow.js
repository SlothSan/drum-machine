import DrumPad from "../DrumPad/DrumPad";

const MiddleRow = (props) => {
    return (
        <div className={"middle-row row"}>
            <DrumPad letter={"a"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"} drumName={"Heater-4"} setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
            <DrumPad letter={"s"} src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"} drumName={"Clap"} setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
            <DrumPad letter={"d"} src={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"} drumName={"Open-HH"} setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
        </div>
    )
}

export default MiddleRow