import { CarouselCardData } from "../../Carousel/CarouselCardDate";
import CarouselLandingPage from "../../Carousel/CarouselLandingPage";
import { FaArrowCircleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CardBooksLandingPage from "../../Card/CardBooksLandingPage";

const Home = () => {
    const [books, setBooks] = useState(null);
    const api_key=process.env.REACT_APP_CLE_API_NYTIMES;
    const showBestSellers = async () => {
        const url = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key="+api_key;
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;
        console.log(results);
        setBooks(results);
        console.log(books)
    }

    useEffect(async () => {
        showBestSellers();
    }, []);

    return (
        <div className="pt-19">
            <div class="grid place-items-center">
                <CarouselLandingPage cards={CarouselCardData} />
            </div>
            <div class="grid place-items-center">
                <button onClick={() => { alert('clicked') }}> <FaArrowCircleDown size={30} style={{ fill: 'red' }} /></button>
            </div>
            <div class="grid place-items-center pt-10">
                <motion.div
                    initial={{ opacity: 0, y: '-100px' }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: 'spring',
                        repeat: Infinity,
                        duration: 2,
                        bounce: 0.7,
                        repeatType: 'reverse'
                    }}
                >
                    <p class="text-7xl text-yellow-700">Découvrez les best sellers de cette année</p>
                </motion.div>
            </div>
            {<div class="container my-12 mx-auto pt-10 md:px-12">
                {books && (
                    <div class="flex flex-wrap -mx-1 lg:-mx-4">
                        {books.map((book, index) => (
                            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={index}>
                                <CardBooksLandingPage title={book.title} author={book.author} description={book.description} />
                            </div>
                        ))}
                    </div>
                )}
            </div>}


        </div>
    )
}

export default Home;