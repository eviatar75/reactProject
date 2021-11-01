import React, { Component } from "react";

class About extends Component{

    state = {
        person : null
    }

    async componentDidMount()
    {
        const url = "https://api.randomuser.me/?results=3"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({person : data.results})
    }

    render()
    {
        if(!this.state.person){
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
                        <div>
                            <img className="pr-2" src={this.state.person[0].picture.large} alt="" />         
                            {this.state.person[0].name.title} {this.state.person[0].name.first} {this.state.person[0].name.last}
                        </div>
                        <div>
                            <img className="pr-2" src={this.state.person[1].picture.thumbnail} alt="" />         
                            {this.state.person[1].name.title} {this.state.person[1].name.first} {this.state.person[1].name.last}
                        </div>
                        <div>
                            <img className="pr-2" src={this.state.person[2].picture.thumbnail} alt="" />         
                            {this.state.person[2].name.title} {this.state.person[2].name.first} {this.state.person[2].name.last}
                        </div>
                    </div>
                </div>
    }
        

    }
}

export default About;