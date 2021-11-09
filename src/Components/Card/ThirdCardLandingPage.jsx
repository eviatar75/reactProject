import { motion } from "framer-motion";

const ThirdCardLandingPage = () => {
    return (
        <div class="w-screen rounded-lg shadow-lg bg-gradient-to-r from-yellow-500 to-red-500">
            <div class="grid place-items-center">
                <img src="https://cdn.pixabay.com/photo/2015/09/04/16/09/books-922321_1280.jpg" width="55%" alt="" class="rounded-t-lg" />
                <div class="p-6">
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
                                delay: .4
                            }
                        }

                    }}>
                    <h2 class="font-bold mb-2 text-4xl text-pink-900 mb-2">Besoin de comparer les prix ?</h2>
                    </motion.div>
                </div>
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden:{
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
                    <p class="text-2xl text-pink-900 mb-2">Ne vous en faites pas, un bouton "Comparer" est conçu pour chaque livre pour trouver le meilleur prix de votre bouquin favori !</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ThirdCardLandingPage;