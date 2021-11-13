const InputFormContactUs = ({ type, value, className, disabled, onChange, onClick }) => {
  return (
    <input type={type} value={value} className={className} disabled={disabled} onChange={onChange} onClick={onClick}></input>
  )
}

export default InputFormContactUs;