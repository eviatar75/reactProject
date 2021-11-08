import React, { useState } from "react";
const Search = ()=>{

    const [unfilled, setUnfilled]=useState(true)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")
    
     const titleSetter = (e)=>{
        setTitle(e.target.value)
        if(e.target.value)
        {
            setUnfilled(false)
        }       
    }

    const authorSetter = (e)=>{
        setAuthor(e.target.value)
        if(e.target.value)
        {
            setUnfilled(false)
        }       
    }

    const isbnSetter = (e)=>{
        setIsbn(e.target.value)
        if(e.target.value)
        {
            setUnfilled(false)
        }       
    }

    return <>
            <div className="pt-40 flex justify-center"> 
            <form action="submit" className="grid grid-cols-2 gap-4">
                    <label>Titre</label>
                    <input value={title} type="text" id="titre" className="border-2 border-gray-300 rounded" onChange={(e)=>titleSetter(e)}></input>
                    <label>Auteur</label>
                    <input value={author} type="text" id="auteur"  className="border-2 border-gray-300 rounded" onChange={(e)=>authorSetter(e)}></input>
                    <label>ISBN</label>
                    <input value={isbn} type="text" id="isbn"  className="border-2 border-gray-300 rounded" onChange={(e)=>isbnSetter(e)}></input>
                    <label></label>
                    <input type="submit" className="bg-gray-200 text-xl font-bold rounded-full p-1" disabled={unfilled}></input>
                </form>      
            </div>
            </>
}

export default Search;

/*
*/