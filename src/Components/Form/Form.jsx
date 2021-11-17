import InputFormContactUs from "../Input/InputFormContactUs";
import LabelFormContactUs from "../Label/LabelFormContactUs";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { variantsForMessageInContactPage } from "../../Variants";

const Form = () => {
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
            <div className="text-xl text-white font-bold rounded-md bg-purple-400 p-1">
            <p>{"Merci pour votre message, nous vous répondrons dans les plus bref délais."}</p>
            </div>
        </motion.div>}
        <div className="pt-10 flex justify-center font-bold text-xl">
            <form id="ContactUsFormId" action="submit" className="grid grid-cols-2 gap-6">
                <LabelFormContactUs text="Prénom"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-white font-bold rounded p-1" value={prenom} onChange={(e) => prenomSetter(e)} />
                <LabelFormContactUs text="Nom"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-white font-bold rounded p-1" value={nom} onChange={(e) => nomSetter(e)} />
                <LabelFormContactUs text="Courriel"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-white font-bold rounded p-1" value={courriel} onChange={(e) => courrielSetter(e)} />
                <LabelFormContactUs text="Téléphone"/>
                <InputFormContactUs type="text" className="bg-purple-400 hover:bg-purple-600 text-white font-bold rounded p-1" value={telephone} onChange={(e) => telephoneSetter(e)} />
                <LabelFormContactUs text="Votre message"/>
                <textarea className="bg-purple-400 hover:bg-purple-600 text-white font-bold rounded p-1" value={message} onChange={(e) => messageSetter(e)}></textarea>
            </form>
        </div>
        <button type="button" className="place-self-center bg-purple-400 hover:bg-purple-600 text-white font-bold py-4 px-10 rounded-2xl mt-8" disabled={unfilled} onClick={() =>{handleSubmitButton();showFactsMessage()}}>
                    Valider
        </button>
    </>
}

export default Form;
