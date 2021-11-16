import React, { useState, useEffect } from "react";
import CardBooksSearchPage from "../../Card/CardBooksSearchPage";
import Header from "../../Header";
import Footer from "../../Footer";


const Search = ()=>{

    const [unfilled, setUnfilled]=useState(true)
    const [title, setTitle] = useState("")
    const [titleCleaned, setTitleCleand]= useState("+")
    const [author, setAuthor] = useState("")
    const [authorCleaned, setAuthorCleaned]=useState("+")
    const [isbn, setIsbn] = useState("")
    const [isbnCleaned, setIsbnCleaned] = useState("+")
    const [books,setBooks]=useState(null)
    const api_key_googlebook = process.env.REACT_APP_CLE_API_GOOGLEBOOK

     const titleSetter = (e)=>{
        setTitle( e.target.value)
            setTitleCleand(e.target.value.replace(/\s/g, '+')+"+")
    }

    const authorSetter = (e)=>{
        setAuthor(e.target.value)
            setAuthorCleaned(e.target.value.replace(/\s/g, '+')+"+")
    }

    const isbnSetter = (e)=>{
        setIsbn(e.target.value)
        setIsbnCleaned("+"+e.target.value)
    }


    useEffect( () => {
            if(title || author || isbn)
            {
                setUnfilled(false)
            }
            else
            {
                setUnfilled(true)
                setBooks(null)
            }
      }, [title,author,isbn]);



    const fetchAPI = async (event)=>{

        event.preventDefault()

        const url = "https://www.googleapis.com/books/v1/volumes?q="+titleCleaned+"author:"+authorCleaned+"isbn:"+isbnCleaned+"&printType=books&key="+api_key_googlebook;
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data);
        console.log(books);

    }

    return <>
            <Header/>
            <div className="pt-40 flex justify-center"> 
            <form className="grid grid-cols-2 gap-4">
                    <label>Titre</label>
                    <input value={title} type="text" id="titre" className="border-2 border-gray-300 rounded" onChange={(e)=>titleSetter(e)}></input>
                    <label>Auteur</label>
                    <input value={author} type="text" id="auteur"  className="border-2 border-gray-300 rounded" onChange={(e)=>authorSetter(e)}></input>
                    <label>ISBN</label>
                    <input value={isbn} type="text" id="isbn"  className="border-2 border-gray-300 rounded" onChange={(e)=>isbnSetter(e)}></input>
                    <label></label>
                    <input type="submit" className="bg-gray-200 text-xl font-bold rounded-full p-1" disabled={unfilled} onClick={(e)=>fetchAPI(e)}></input>
                </form>
            </div>
            { books!==null && typeof books.items !== 'undefined'? 
                <div className="grid grid-cols-4 gap-2"> 
                {
                    books.items.map((item) => 
                    {
                        return <div><CardBooksSearchPage source={typeof item.volumeInfo.imageLinks !== 'undefined'?item.volumeInfo.imageLinks.thumbnail:"https://i.goopics.net/pcg0g0.jpg"} title={item.volumeInfo.title} author={typeof item.volumeInfo.authors !== 'undefined'?item.volumeInfo.authors[0]:item.volumeInfo.authors} description={item.description} isbn={typeof item.volumeInfo.industryIdentifiers !== 'undefined'?item.volumeInfo.industryIdentifiers[0].identifier:""} ></CardBooksSearchPage></div>
                    })
                }</div> 
                :books!==null && typeof books.items === 'undefined'?
                    <div className ="grid justify-items-center pt-10 text-3xl font-semibold">
                        <div>
                            <img src="https://i.goopics.net/aml479.png" alt="bah alors goopics tu nous plante ?"></img>
                        </div>
                        <div>
                            Aucun livre de ce genre...
                        </div>
                    </div>
                    :<div></div>
            }
            <Footer/>
            </>
}

export default Search;