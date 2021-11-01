import { Component, useState } from "react";
import RoundedImage from "../RoundedImage/RoundedImage";

class CardTeamPageAbout extends Component {
    state = {
        persons: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=3"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({ persons: data.results })
    }

    render() {
        if (!this.state.persons) {
            return <div className="pt-20">
                <div className="flex justify-center space-x-8 pt-10">
                    <div>
                        loading...
                    </div>
                </div>
            </div>
        }
        else {
            return<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {this.state.persons.map((person, i) => {
                    return (<div key={i}>
                        <div class="rounded overflow-hidden shadow-lg">
                            <div class="grid place-items-center">
                                <RoundedImage photo={person.picture.large}
                                    color="#321124"
                                    width="100"
                                    height="100"
                                    size="10"
                                    radius="40" />
                            </div>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{person.name.title} {person.name.first} {person.name.last}</div>
                                <p class="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </div>
                       </div> )
            })}
                        </div>
        }
    }
}

export default CardTeamPageAbout;
/*</div>
const [showDescription1, setShowDescription1] = useState(false);
const [showDescription2, setShowDescription2] = useState(false);
const [showDescription3, setShowDescription3] = useState(false);



return (
    <>
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <div class="rounded overflow-hidden shadow-lg">
                <div class="grid place-items-center">
                    <RoundedImage photo="http://www.mjc-saix.fr/wp-content/uploads/2015/04/homme-anonyme.jpg"
                        color="#321124"
                        width="100"
                        height="100"
                        size="10"
                        radius="40" />
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Eviatar</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg">
                <div class="grid place-items-center">
                    <RoundedImage photo="http://www.mjc-saix.fr/wp-content/uploads/2015/04/homme-anonyme.jpg"
                        color="#321124"
                        width="100"
                        height="100"
                        size="10"
                        radius="40" />
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Isuri</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
            <div class="rounded overflow-hidden shadow-lg">
                <div class="grid place-items-center">
                    <RoundedImage photo="http://www.mjc-saix.fr/wp-content/uploads/2015/04/homme-anonyme.jpg"
                        color="#321124"
                        width="100"
                        height="100"
                        size="10"
                        radius="40" />
                </div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">Thibaut</div>
                    <p class="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>

    </>
)
}


*/

