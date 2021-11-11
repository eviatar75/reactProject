import React, { useState, useEffect } from "react";

const Search = ()=>{

    const [unfilled, setUnfilled]=useState(true)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [isbn, setIsbn] = useState("")

     const titleSetter = (e)=>{
        setTitle(e.target.value)
    }

    const authorSetter = (e)=>{
        setAuthor(e.target.value)
    }

    const isbnSetter = (e)=>{
        setIsbn(e.target.value)
    }


    useEffect( () => {
            if(title || author || isbn)
            {
                setUnfilled(false)
            }
            else
            {
                setUnfilled(true)
            }
      }, [title,author,isbn]);



    const fetchAPI = async()=>{

        const url = "https://www.googleapis.com/books/v1/volumes?q=harry+potter+author:rowling+isbn:9781781101087&key=key"

        const response = await fetch(url)

        const data = await response.json()

      //  setBooks(data.results)

    }

    return <>
            <div className="pt-40 flex justify-center"> 
            <form action={fetchAPI()} className="grid grid-cols-2 gap-4">
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