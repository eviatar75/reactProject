import { CarouselCardData } from "../../Carousel/CarouselCardDate";
import CarouselLandingPage from "../../Carousel/CarouselLandingPage";

const Home = () => {
    return (
        <div className="pt-20">
            <div class="grid place-items-center">
                <CarouselLandingPage cards={CarouselCardData} />
            </div>
        </div>
    )
}

export default Home;