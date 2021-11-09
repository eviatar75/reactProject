import { motion } from "framer-motion";

const SecondCardLandingPage = () => {
    return (
        <div class="w-screen rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-red-500">
            <div class="grid place-items-center">
                <img src="https://cdn.pixabay.com/photo/2020/08/04/18/56/books-5463621_1280.jpg" width="52%" alt="" class="rounded-t-lg" />
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
                            <h2 class="font-bold mb-2 text-4xl text-pink-900 mb-2">Des livres, des livres et encore des livres
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
                        <p class="text-2xl text-pink-900 mb-2">Basé sur l'API de Google Book, notre site vous permet de chercher parmi les nombreux livres de la bilbiothèque Google Book</p>
                    </motion.div>
                    <div class="grid place-items-center">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden:{
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
                        <a href="https://developers.google.com/books/docs/v1/using" class="text-pink-800 hover:text-purple-900 underline text-1xl">En savoir plus sur l'API Google Book</a>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecondCardLandingPage;