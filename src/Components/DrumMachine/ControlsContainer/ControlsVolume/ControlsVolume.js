import './ControlsVolume.css'

const ControlsVolume = (props) => {

    const handleVolumeChange = (event) => {
        props.setVolumeLevel(event.target.value / 100)
    }

    return (
        <div className={"volume-slider-container"}>
            <label htmlFor={"volume-slider"}>Volume</label>
            <input onInput={handleVolumeChange} type={"range"} min={"0"} max={"100"} defaultValue={"50"} className={"volume-slider"} name={"volume-slider"} />
            <p>Volume set to: {Math.floor(props.volumeLevel * 100)}</p>
        </div>
    )
}

export default ControlsVolume
