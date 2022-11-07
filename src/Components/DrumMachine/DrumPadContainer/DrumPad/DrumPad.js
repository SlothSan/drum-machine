const DrumPad = (props) => {

    const audio = document.getElementById(props.letter.toUpperCase())

    const handleClickPlayAudio = (event) => {
        event.stopPropagation()
        event.preventDefault()
        if(props.powerOn) {
            new Audio(props.src).play()
            audio.play();
            props.setDisplayText(props.drumName)
        }
    }


    return (
        <button id={props.letter} className={"drum-pad"} onClick={handleClickPlayAudio} >
            {props.letter.toUpperCase()}
            <audio preload={"auto"} className={"clip"} id={props.letter.toUpperCase()} src={props.src}></audio>
        </button>
    )
}

export default DrumPad