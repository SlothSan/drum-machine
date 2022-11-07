const DrumPad = (props) => {

    const onClickPlayAudio = (event) => {
        event.stopPropagation()
        event.preventDefault()
        new Audio(props.src).play();
        props.setDisplayText(props.drumName)
    }


    return (
        <button id={props.letter} className={"drum-pad"} onClick={onClickPlayAudio} >
            {props.letter.toUpperCase()}
        </button>
    )
}

export default DrumPad