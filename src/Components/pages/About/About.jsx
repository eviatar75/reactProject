import React, { Component } from "react";

class About extends Component{

    state = {
        persons : null
    }

    async componentDidMount()
    {
        const url = "https://api.randomuser.me/?results=3"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({persons : data.results})
    }

    render()
    {
        if(!this.state.persons){
            return<div className="pt-20">
                    <div className="flex justify-center space-x-8 pt-10">
                        <div>
                            loading...
                        </div>
                    </div>
                </div>}
    else{
        return<div className="pt-20">
                    <div className="flex justify-center text-4xl">
                        <p className="font-sans font-extrabold text-gray-500">OUR CREW</p>
                    </div>
                    <div className="flex justify-center space-x-8 pt-10">
                        {this.state.persons.map((person, i) => {     
                            console.log("Entered");                      
                            return (<div key={i}>
                                    <img className="pr-2" src={person.picture.large} alt="" />         
                                    {person.name.title} {person.name.first} {person.name.last}
                                    </div>) 
                        })}
                    </div>
                </div>
    }
        

    }
}

export default About;