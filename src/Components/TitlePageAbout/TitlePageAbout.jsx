function TitlePageAbout({text,size, underline}) {
    return (
        <h1 id="primary-title" style={{fontSize: size, textDecoration: underline}}>{text}</h1>
    )
}
export default TitlePageAbout;