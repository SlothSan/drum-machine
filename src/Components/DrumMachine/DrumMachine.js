import './DrumMachine.css'
import DrumPadContainer from "./DrumPadContainer/DrumPadContainer";

const DrumMachine = () => {
    return (
        <div id={"drum-machine"} className={"drum-machine"}>
            <DrumPadContainer />
        </div>
    )
}

export default DrumMachine