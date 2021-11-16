import CardPageAboutProject from "../../Card/CardPageAboutProject";
import CardTeamPageAbout from "../../Card/CardTeamPageAbout";
import Header from "../../Header";
import Footer from "../../Footer";
import TitlePageAbout from "../../TitlePageAbout/TitlePageAbout";

const About=()=>{
    return(
        <div>
            <Header/>
        <div class="container shadow-lg mx-auto bg-white mt-10 md:mt-0 pt-20 ">
            <div class="grid place-items-center">
                <TitlePageAbout text="A propos de nous" size="55px"/>
                <CardPageAboutProject/>
                <TitlePageAbout text="A propos de l'équipe projet" size="45px"/>
                <p>L'équipe projet est composée de 3 membres :</p>
                <CardTeamPageAbout/>
            </div>
        </div>
            <Footer/>
        </div>
    )
   
}

export default About;