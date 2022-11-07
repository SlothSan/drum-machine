import './ControlsPower.css'

const ControlsPower = (props) => {

 const handleChange = () => {
     console.log("what triggers this?")
     props.setPowerOn(!props.powerOn)
 }

 return (
     <div className={"control-power-container"}>
       <label htmlFor={"power"}>Power On?</label>
       <input type={"checkbox"} defaultChecked={true} name={"power"} onInput={handleChange} value={props.powerOn} />
     </div>
 )
}

export default ControlsPower