import DrumPad from "../DrumPad/DrumPad";

const BottomRow = (props) => {
    return (
        <div className={"bottom-row row"}>
            <DrumPad letter={"z"} src={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"} drumName={"Kick N Hat"} setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
            <DrumPad letter={"x"} src={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"} drumName={"Kick"} setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
            <DrumPad letter={"c"} src={"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"} drumName={"Closed-HH"} setDisplayText={props.setDisplayText} powerOn={props.powerOn} volumeLevel={props.volumeLevel}/>
        </div>
    )
}

export default BottomRow