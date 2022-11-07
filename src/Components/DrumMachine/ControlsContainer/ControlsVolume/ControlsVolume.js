import './ControlsVolume.css'

const ControlsVolume = () => {
    return (
        <div className={"volume-slider-container"}>
            <label htmlFor={"volume-slider"}>Volume</label>
            <input type={"range"} min={"0"} max={"100"} defaultValue={"50"} className={"volume-slider"} name={"volume-slider"} />
        </div>
    )
}

export default ControlsVolume
