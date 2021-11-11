import { motion } from "framer-motion";


const CardImageCarouselLandingPage = ({ imgsrc, text1, text2, text3 }) => {
    return (<div class="w-screen rounded-lg shadow-lg bg-gradient-to-r from-purple-300 via-rose-200 to-red-300 pt-10">
        <div class="grid place-items-center">
            <img src={imgsrc} width="45%" alt="" class="rounded-t-lg" />
            <div class="p-6">
                <div class="grid place-items-center">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 1.0,
                                delay: .4
                            }
                        }
                    }}>
                        <h2 class="font-bold mb-2 text-4xl text-purple-800 mb-2">{text1}
                        </h2>
                    </motion.div>
                </div>
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                    },
                    visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                            duration: 1.0,
                            delay: .6
                        }
                    }

                }}>
                    <p class="text-2xl text-red-900 mb-2">{text2}</p>
                </motion.div>
                <div class="grid place-items-center">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                duration: 1.0,
                                delay: .8
                            }
                        }

                    }}>
                        <motion.div whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
                            <div className="href">
                            <a href="#" class="text-pink-900 hover:text-purple-700 underline text-1xl">{text3}</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>

    </div>)
}

export default CardImageCarouselLandingPage;