import CardPageAboutProject from "../../Card/CardPageAboutProject";
import CardTeamPageAbout from "../../Card/CardTeamPageAbout";
import TitlePageAbout from "../../TitlePageAbout/TitlePageAbout";
import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContext";
import SwitchButtonDarkMode from "../../Button/SwitchButtonDarkMode";
import Header from "../../Header";
import Footer from "../../Footer";


const About=()=>{
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return(
        <>
        <Header/>
        <div class={`shadow-lg mx-auto ${darkMode ? "bg-black":"bg-white"} pt-20 transition duration-500`}>
            <div class="grid place-items-center">
                <TitlePageAbout text="A propos de nous" size="55px" color={darkMode?"white":"black"}/>
                <CardPageAboutProject/>
                <TitlePageAbout text="A propos de l'équipe projet" size="45px" color={darkMode?"white":"black"}/>
                <p style={{ color: darkMode?'white':"black" }}>L'équipe projet est composée de 3 membres :</p>
                <CardTeamPageAbout/>
                <SwitchButtonDarkMode/>

            </div>
        </div>
        <Footer/>
        </>
    )
   
}

export default About;