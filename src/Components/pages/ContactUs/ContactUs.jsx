import Form from "../../Form/Form";
import Header from "../../Header";
import Footer from "../../Footer";
import TitlePageAbout from "../../TitlePageAbout/TitlePageAbout";

const ContactUs=()=>{
    return (
        <div>
        <Header/>
        <div class="w-screen shadow-lg mx-auto bg-white mt-10 md:mt-0 pt-20 pb-5 pr-10 pl-10 bg-purple-600 bg-opacity-30 ">
            <div class="grid place-items-center">
            <TitlePageAbout text="Nous contacter" size="55px"/>
            <Form prenom="Prénom" nom="Nom" couriel="Couriel" telephone="Téléphone" message="Votre message" bouton="envoyer"/>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}

export default ContactUs;
