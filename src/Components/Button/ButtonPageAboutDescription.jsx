function ButtonPageAboutDescription({id,text="Description" ,stateDescription = false, onClick}) {
    return (
        <>
        <button
        id={id}
        onClick={onClick}
        className={stateDescription ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' : 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'}
        >
       {stateDescription ? text : "Cacher la description"}
        </button>
        
        </>
    )
}



export default ButtonPageAboutDescription;