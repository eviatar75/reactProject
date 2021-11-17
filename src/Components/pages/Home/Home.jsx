import { CarouselCardData } from "../../Carousel/CarouselCardDate";
import CarouselLandingPage from "../../Carousel/CarouselLandingPage";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CardBooksLandingPage from "../../Card/CardBooksLandingPage";
import Header from "../../Header";
import { variantsForCardsUp, variantsForCardsDown, variantsForTitleInLandingPage, variantsForDivBottomLandingPage } from "../../../Variants";
import { useInView } from "react-intersection-observer";

const Home = () => {
    ///states
    const [books, setBooks] = useState(null);


    ///variables
    const api_key_nytimes = process.env.REACT_APP_CLE_API_NYTIMES;

    ///refs
    const firstScroll = useRef(null);
    const executeScroll = () => firstScroll.current.scrollIntoView({ behavior: "smooth" })

    ///hooks animation
    const controlsTitle = useAnimation();
    const controlsDiv = useAnimation();

    ///Check if the element is visible or not (boolean)
    const [refTitle, inViewTitle] = useInView();
    const [refDiv, inViewDiv] = useInView();

    const returnOnTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    useEffect(() => {
        async function showBestSellers() {
            const url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=" + api_key_nytimes;
            const response = await fetch(url);
            const data = await response.json();
            setBooks(data);
        }
        showBestSellers();
        if (inViewDiv) {
            controlsDiv.start("animate");
        }
        if (inViewTitle) {
            controlsTitle.start("animate");
        }
    }, [controlsTitle, inViewTitle, controlsDiv, inViewDiv]);



    return (
        <>
            <div>
                <motion.div
                    variants={variantsForCardsDown}
                    initial="initial"
                    animate="animate"
                >
                    <Header></Header>
                </motion.div>
            </div>
            <div>
                <div class="grid place-items-center">
                    <motion.div
                        variants={variantsForCardsUp}
                        initial="initial"
                        animate="animate"
                    >
                        <CarouselLandingPage cards={CarouselCardData} fonctionButtonScroll={executeScroll} />
                    </motion.div>
                </div>
            </div>
            <motion.div
                ref={refDiv}
                variants={variantsForDivBottomLandingPage}
                initial="initial"
                animate={controlsDiv}
            >
                <div ref={firstScroll} class="w-screen rounded-lg shadow-lg bg-gradient-to-r from-red-300 via-rose-200 to-purple-300 pt-10">
                    <div class="grid place-items-center pt-14">
                        <motion.span
                            ref={refTitle}
                            animate={controlsTitle}
                            variants={variantsForTitleInLandingPage}
                            initial="initial"
                        >
                            <p class="text-7xl text-purple-700 italic pt-5">Découvrez les best sellers de ces dernières années</p>
                        </motion.span>
                    </div>
                    {<div class="container my-12 mx-auto pt-10 md:px-12">
                        {books && (
                            <div class="flex flex-wrap -mx-1 lg:-mx-4">
                                {books.results.map((book, index) => {
                                    return (
                                        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={index}>
                                            <CardBooksLandingPage
                                            title={book.title}
                                            author={book.author}
                                            description={book.description}
                                            isbn={typeof book.isbns[0] !== 'undefined'?book.isbns[0].isbn10:""} 
                                            />
                                        </div>)
                                })}
                            </div>
                        )}
                    </div>}
                    <div class="grid place items-center pt-9">
                        <button className="buttonTop" class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-200 hover:border-transparent rounded" onClick={() => returnOnTop()}>
                            Haut de page
                        </button>
                    </div>


                </div>
            </motion.div>
        </>
    )
}

export default Home;