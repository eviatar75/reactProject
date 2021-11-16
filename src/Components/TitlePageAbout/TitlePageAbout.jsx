function TitlePageAbout({text,size, color, underline}) {
    return (
        <h1 id="primary-title" style={{fontSize: size, color:color, textDecoration: underline}}>{text}</h1>
    )
}
export default TitlePageAbout;