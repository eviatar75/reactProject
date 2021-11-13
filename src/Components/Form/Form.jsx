import InputFormContactUs from "../Input/InputFormContactUs";
import LabelFormContactUs from "../Label/LabelFormContactUs";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Form = () => {

    
    const variantsForMessageInContactPage={
        initial:{ 
            opacity: 0,
            y: '-100px' },
        animate:{
            opacity: 1, 
            y: 0, 
            transition:{
                duration: 2,
                ease: "easeInOut",
                scale: [1, 2, 2, 1, 1],
            },
        }
    }
    
    
    const [unfilled, setUnfilled] = useState(true)
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [courriel, setCourriel] = useState("")
    const [telephone, setTelephone] = useState("")
    const [message, setMessage] = useState("")
    const [showThankMessage, setShowThankMessage] = useState(false);

    const showFactsMessage= ()=>{
        setShowThankMessage(true);
    }

    const prenomSetter = (e) => {
        setPrenom(e.target.value)
        checkFilled();
    }

    const nomSetter = (e) => {
        setNom(e.target.value)
        checkFilled();
    }

    const courrielSetter = (e) => {
        setCourriel(e.target.value)
        checkFilled();
    }

    const telephoneSetter = (e) => {
        setTelephone(e.target.value)
        checkFilled();
    }

    const messageSetter = (e) => {
        setMessage(e.target.value)
        checkFilled();
    }

    function checkFilled() {
        if (prenom  && nom && courriel && telephone && message) {
            setUnfilled(false);
        }
    }


    const handleSubmitButton = () =>{
        setNom("");
        setPrenom("");
        setCourriel("");
        setTelephone("");
        setMessage("");
    }


    return <>
        {showThankMessage &&
        <motion.div
                animate="animate"
                variants={variantsForMessageInContactPage}
                initial="initial"
        >       
            <div className="text-xl text-white font-bold rounded-full bg-purple-400">
            <p>{"Merci pour votre message, nous vous répondrons dans les plus bref délais."}</p>
            </div>
        </motion.div>}
        <div className="pt-10 flex justify-center font-bold text-xl">
            <form id="ContactUsFormId" action="submit" className="grid grid-cols-2 gap-4">
                <LabelFormContactUs text="Prénom"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-xl text-white font-bold rounded mt-4 p-1" value={prenom} onChange={(e) => prenomSetter(e)} />
                <LabelFormContactUs text="Nom"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-xl text-white font-bold rounded mt-4 p-1" value={nom} onChange={(e) => nomSetter(e)} />
                <LabelFormContactUs text="Courriel"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-xl text-white font-bold rounded mt-4 p-1" value={courriel} onChange={(e) => courrielSetter(e)} />
                <LabelFormContactUs text="Téléphone"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-xl text-white font-bold rounded mt-4 p-1" value={telephone} onChange={(e) => telephoneSetter(e)} />
                <LabelFormContactUs text="Votre message"/>
                <textarea className="bg-purple-400 hover:bg-purple-600 text-xl text-white font-bold rounded mt-4 p-1" value={message} onChange={(e) => messageSetter(e)}></textarea>
                <button type="button" className="shadow bg-purple-400 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-xl text-white font-bold py-2 px-4 rounded mt-4" disabled={unfilled} onClick={() =>{handleSubmitButton();showFactsMessage()}}>
                    Valider
                </button>
            </form>
        </div>
    </>
}

export default Form;