import Form from "../../Form/Form";
import TitlePageAbout from "../../TitlePageAbout/TitlePageAbout";

const ContactUs=()=>{
    return (
        <div class="container shadow-lg mx-auto bg-white mt-10 md:mt-0 pt-20 pb-5 pr-10 pl-10 bg-purple-600 bg-opacity-30 ">
            <div class="grid place-items-center">
            <TitlePageAbout text="Nous contacter" size="55px"/>
            <Form prenom="Prénom" nom="Nom" couriel="Couriel" telephone="Téléphone" message="Votre message" bouton="envoyer"/>
            </div>
        </div>
        
    )
}

export default ContactUs;
