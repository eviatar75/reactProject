const InputFormContactUs = ({ type, value, className, disabled, onChange, onClick, style, placeholder }) => {
  return (
    <input type={type} value={value} className={className} disabled={disabled} onChange={onChange} onClick={onClick} style={style} placeholder={placeholder}></input>
  )
}

export default InputFormContactUs;
