const CardBooksLandingPage=({title, author, description, source})=>{
return (<div class="p-10">  
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={source} alt=""/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">
            {description}
        </p>
      </div>
        <p class="text-gray-700 text-base">
            Par {author}
        </p>
    </div>
  </div>)
}

export default CardBooksLandingPage;