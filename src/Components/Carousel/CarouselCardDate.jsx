import { Constant } from "../../Constant";
import CardImageCarouselLandingPage from "../Card/CardImageCarouselLandingPage";

export const CarouselCardData = [
  {
    cardData:
      <CardImageCarouselLandingPage text1="Envie d'évasion ?" text2="Utilisez notre moteur de recherche pour trouver le livre qui vous convient !" text3="Chercher votre nouveau livre" imgsrc="https://cdn.pixabay.com/photo/2014/07/11/20/14/book-390277_1280.jpg" lien={Constant.PATHS.SEARCH}/>
  },
  {
    cardData:
      <CardImageCarouselLandingPage text1="Des livres, des livres et encore des livres" text2="Basé sur l'API de Google Book, notre site vous permet de chercher parmi les nombreux livres de la bilbiothèque Google Book" text3="En savoir plus sur l'équipe projet" imgsrc="https://cdn.pixabay.com/photo/2020/08/04/18/56/books-5463621_1280.jpg" lien={Constant.PATHS.ABOUT}/>
  },
  {
    cardData:
    <CardImageCarouselLandingPage text1="Besoin de comparer les prix ?" text2="Ne vous en faites pas, une fonction de comparaison de prix est prévue" text3="Nous contacter" imgsrc="https://cdn.pixabay.com/photo/2015/09/04/16/09/books-922321_1280.jpg" lien={Constant.PATHS.CONTACTUS}/>
  }
];