import { useState } from "react";
import { CarouselCardData } from "./CarouselCardDate";

const CarouselLandingPage = ({ cards }) => {
    const [actuel, setActuel] = useState(0);
    const taille = cards.length;

    const cardPrecedente=()=>{
        setActuel(actuel === 0 ? taille - 1 : actuel - 1)
    }

    const cardSuivante=()=>{
        setActuel(actuel === taille - 1 ? 0 : actuel + 1)
    }
    console.log(actuel)
    
    if(cards.length<=0){
        return <p>Oups, il semble qu'un problème s'est produit</p>
    }

    return (
        <section class="h-screen display-flex justify-center items-center">
            <div class="absolute top-2/4 left-32 text-5x1 text-blue-700 z-10 cursor-pointer select-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={cardPrecedente}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
            </div>
            <div className="absolute top-2/4 right-32 text-5x1 text-blue-700 z-10 cursor-pointer select-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={cardSuivante}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            </div>
            {CarouselCardData.map((card, index) => {
                return(
                    <div class={index===actuel ? 'opacity-1 duration-1500 scale-108' : 'opacity-0 duration-1500 ease'} key={index}>
                        {index===actuel &&(
                            card.cardData
                        )}
                    </div>
                    )

            })}
        </section>)
}

export default CarouselLandingPage;