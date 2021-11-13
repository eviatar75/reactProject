import { motion } from "framer-motion";
import { useState } from "react";
import { CarouselCardData } from "./CarouselCardDate";
import { FaAngleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { variantsForButtonScroll, variantsForButtonsLandingPage, variantsForDivButtonsLandingPage, variantsForWrapperButtonScroll } from "../../Variants";

const CarouselLandingPage = ({ cards, fonctionButtonScroll }) => {
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
        <>
            <section class="h-screen display-flex justify-center items-center md-flex pt-14">
                <motion.div
                    variants={variantsForDivButtonsLandingPage}
                    initial="initial"
                    animate="animate"
                >
                <div class="absolute top-2/4 left-32">
                    <motion.button
                        variants={variantsForButtonsLandingPage}
                        initial="initial"
                        animate="animate"
                    >

                        <button class="" onClick={cardPrecedente}><FaArrowAltCircleLeft size={50} style={{ fill: 'pink' }} /></button>
                    </motion.button>
                </div>
                </motion.div>
                <motion.div
                    variants={variantsForDivButtonsLandingPage}
                    initial="initial"
                    animate="animate"
                >
                <div class="absolute top-2/4 right-32">

                
                <motion.button
                    variants={variantsForButtonsLandingPage}
                    initial="initial"
                    animate="animate"
                >
                    <button class="" onClick={cardSuivante} ><FaArrowAltCircleRight size={50} style={{ fill: 'purple' }} /></button>
                </motion.button>
                </div>
                </motion.div>
                {CarouselCardData.map((card, index) => {
                    return (
                        <div class={index === actuel ? 'opacity-1 duration-1500 scale-108' : 'opacity-0 duration-1500 ease'} key={index}>
                            {index === actuel && (
                                card.cardData
                            )}
                        </div>
                    )

                })}
                <motion.div
                    variants={variantsForWrapperButtonScroll}
                    initial="initial"
                    animate="animate"
                >
                <div class="grid place-items-center">
                    <motion.button 
                        variants={variantsForButtonScroll}
                        initial="initial"
                        animate="animate"
                    >
                        <button onClick={fonctionButtonScroll}> <FaAngleDown size={70} style={{ fill: 'purple' }} /></button>
                    </motion.button>
                </div>
                </motion.div>
            </section>
        </>
    )
}

export default CarouselLandingPage;