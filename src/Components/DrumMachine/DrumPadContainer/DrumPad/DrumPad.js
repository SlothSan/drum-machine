const DrumPad = (props) => {
    const newAudio = document.getElementById(props.letter.toUpperCase())

    const handleClickPlayAudio = (event) => {
        event.stopPropagation()
        event.preventDefault()
        if(props.powerOn) {
            let audio = new Audio(props.src);
            audio.volume = 1;
            audio.play();
            props.setDisplayText(props.drumName)
            newAudio.volume = 0;
            newAudio.play();
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