import { motion } from "framer-motion";
import { variantsForFirstTextLandingPage, variantsForImageCarouselLandingPage, variantsForSecondTextLandingPage, variantsForThirdTextLandingPage } from "../../Variants";
import { Link } from "react-router-dom";

const CardImageCarouselLandingPage = ({ imgsrc, text1, text2, text3, lien }) => {
    return (<div class="w-screen rounded-lg shadow-lg bg-gradient-to-r from-purple-300 via-rose-200 to-red-300 pt-10">
        <div class="grid place-items-center">

            <motion.img variants={variantsForImageCarouselLandingPage}
                initial="initial"
                animate="animate" src={imgsrc} width="45%" alt="" class="rounded-lg" />
            <div class="p-6">
                <div class="grid place-items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variantsForFirstTextLandingPage}
                    >
                        <h2 class="font-bold mb-2 text-4xl text-purple-800 mb-2">{text1}
                        </h2>
                    </motion.div>
                </div>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={variantsForSecondTextLandingPage}
                >
                    <p class="text-2xl text-red-900 mb-2">{text2}</p>
                </motion.div>
                <div class="grid place-items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={variantsForThirdTextLandingPage}
                    >
                        <motion.div whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                            <div className="href">
                                <p class="text-pink-900 hover:text-purple-700 underline text-1xl"><Link to={lien}>{text3}</Link></p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>

    </div>)
}

export default CardImageCarouselLandingPage;