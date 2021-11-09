import InputFormContactUs from "../Input/InputFormContactUs";
import LabelFormContactUs from "../Label/LabelFormContactUs";
import React, { useState } from "react";
const Form = ()=>{

    const [unfilled, setUnfilled]=useState(true)
    const [prenom, setPrenom] = useState("")
    const [nom, setnom] = useState("")
    const [courriel, setcourriel] = useState("")
    const [telephone, setTelephone] = useState("")
    const [message, setMessage] = useState("")
    
    const prenomSetter = (e)=>{
        setPrenom(e.target.value)   
        checkFilled();   
    }

    const nomSetter = (e)=>{
        setnom(e.target.value)   
        checkFilled(); 
    }

    const courrielSetter = (e)=>{
        setcourriel(e.target.value)  
        checkFilled();  
    }

    const telephoneSetter = (e)=>{
      setTelephone(e.target.value)  
      checkFilled();   
    }

    const messageSetter = (e)=>{
      setMessage(e.target.value)
      checkFilled();     
    }

    function checkFilled(){
        if(prenom && nom &&courriel &&telephone &&message){
            setUnfilled(false);
        }
    }

    return <>
            <div className="pt-40 flex justify-center"> 
            <form action="submit" className="grid grid-cols-2 gap-4">
                    <LabelFormContactUs text="Prénom"/>
                    <InputFormContactUs type="text" className="bg-gray-200 text-xl font-bold rounded-full p-1" onChange={(e)=>nomSetter(e)}/>
                    <LabelFormContactUs text="Nom"/>
                    <InputFormContactUs type="text" className="bg-gray-200 text-xl font-bold rounded-full p-1" onChange={(e)=>prenomSetter(e)}/>
                    <LabelFormContactUs text="Courriel"/>
                    <InputFormContactUs type="text" className="bg-gray-200 text-xl font-bold rounded-full p-1" onChange={(e)=>courrielSetter(e)}/>
                    <LabelFormContactUs text="Téléphone"/>
                    <InputFormContactUs type="text" className="bg-gray-200 text-xl font-bold rounded-full p-1" onChange={(e)=>telephoneSetter(e)}/>
                    <LabelFormContactUs text="Votre message"/>
                    <textarea className="bg-gray-200 text-xl font-bold rounded-3xl p-1" onChange={(e)=>messageSetter(e)}></textarea>
                    <InputFormContactUs type="submit" className="bg-gray-200 text-xl font-bold rounded-full p-1" disabled={unfilled}/>
            </form>      
            </div>
          </>
}

export default Form;