 
  const InputBuilder = (props) => {
    const firstWord =  props.property.split(' ')[0]
     return (
    <div>
      <input placeholder={props.property}  className="inputs" id={firstWord} />
    </div>
  )
  }
  
  export default InputBuilder