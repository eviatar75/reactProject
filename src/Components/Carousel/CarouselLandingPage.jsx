import { motion } from "framer-motion";
import { useState } from "react";
import { CarouselCardData } from "./CarouselCardDate";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const CarouselLandingPage = ({ cards }) => {
    const [actuel, setActuel] = useState(0);
    const taille = cards.length;

    const cardPrecedente = () => {
        setActuel(actuel === 0 ? taille - 1 : actuel - 1)
    }

    const cardSuivante = () => {
        setActuel(actuel === taille - 1 ? 0 : actuel + 1)
    }
    console.log(actuel)

    if (cards.length <= 0) {
        return <p>Oups, il semble qu'un problème s'est produit</p>
    }

    return (
        <section class="h-screen display-flex justify-center items-center md-flex">
                <button class="relative top-2/4 left-32 animate-bounce" onClick={cardPrecedente}><FaArrowAltCircleLeft size={50} style={{ fill: 'pink' }}/></button>
                <button class="absolute top-2/4 right-32 animate-bounce" onClick={cardSuivante} ><FaArrowAltCircleRight size={50} style={{ fill: 'purple' }}/></button>
            {CarouselCardData.map((card, index) => {
                return (
                    <div class={index === actuel ? 'opacity-1 duration-1500 scale-108' : 'opacity-0 duration-1500 ease'} key={index}>
                        {index === actuel && (
                            card.cardData
                        )}
                    </div>
                )

            })}
        </section>
    )
}

export default CarouselLandingPage;