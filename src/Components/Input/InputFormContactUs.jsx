const InputFormContactUs = ({type, value, className, disabled, onChange})=>{
  return (
    <input type={type} value= {value} className={className} disabled={disabled} onChange={onChange}></input>
  )
}

export default InputFormContactUs;