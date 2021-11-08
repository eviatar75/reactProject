import {useEffect, useState} from "react";
import DropDownButtonPageAbout from "../Button/DropDownButtonPageAbout";
import RoundedImage from "../RoundedImage/RoundedImage";

function CardTeamPageAbout(){
    const [persons, setPerson]=useState(null)

     useEffect( ()=>{
        async function fetchData(){
        const url = "https://api.randomuser.me/?results=3&&nat=fr"
        const response = await fetch(url)
        const data = await response.json()
        setPerson(data.results)
        }
        fetchData();

    },[]);

    if(!persons){
        return   <button disabled="true" className="bg-gray-200 text-2xl font-bold rounded-full p-4 mb-10 mt-10">Loading...</button>         
    }
    else {
        return<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {persons.map((person, i) => {
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
                            <div class="grid place-items-center">
                                <div class="font-bold text-xl mb-2">{person.name.title} {person.name.first} {person.name.last}</div>
                                <DropDownButtonPageAbout ville={person.location.city} mail={person.email} telephone={person.phone}/>
                            </div>
                        </div>
                    </div>
                   </div> )
        })}
                    </div>
    }
}

export default CardTeamPageAbout;