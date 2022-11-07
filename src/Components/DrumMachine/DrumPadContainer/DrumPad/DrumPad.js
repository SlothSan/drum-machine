const DrumPad = (props) => {

    const handleClickPlayAudio = (event) => {
        event.stopPropagation()
        event.preventDefault()
        if(props.powerOn) {
            new Audio(props.src).play();
            props.setDisplayText(props.drumName)
        }
    }


    return (
        <button id={props.letter.toUpperCase()} className={"drum-pad"} onClick={handleClickPlayAudio} >
            {props.letter.toUpperCase()}
        </button>
    )
}

export default DrumPad