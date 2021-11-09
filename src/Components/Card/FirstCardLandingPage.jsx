import { motion } from "framer-motion";

const FirstCardLandingPage = () => {
    return (
        <div class="w-screen rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-red-500">
            <div class="grid place-items-center">
                <img src="https://cdn.pixabay.com/photo/2014/07/11/20/14/book-390277_1280.jpg" width="55%" alt="" class="rounded-t-lg" />
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
                                    delay: .4
                                }
                            }
                        }}>
                            <h2 class="font-bold mb-2 text-4xl text-pink-900 mb-2">Envie d'évasion ?
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
                                delay: .6
                            }
                        }

                    }}>
                        <p class="text-2xl text-pink-900 mb-2">Utilisez notre moteur de recherche pour trouver le livre qui vous convient !</p>
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
                                    delay: .8
                                }
                            }

                        }}>
                            <motion.a initial="beforeHover" whileHover="onHover" variants={{
                                onHover: {
                                    height: 300,
                                transition: {
                                    type: "tween"
                                }
                            },
                            }}>
                            <a href="#" class="text-pink-800 hover:text-purple-900 underline text-1xl">Chercher votre nouveau livre</a>
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FirstCardLandingPage;