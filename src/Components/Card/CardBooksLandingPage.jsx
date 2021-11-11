const CardBooksLandingPage = ({ title, author, description, isbn, source }) => {
  const url = "https://www.chasse-aux-livres.fr/prix/"+isbn;

  return (<div class="p-10">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={source} alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{title}</div>
        <p class="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <p class="text-gray-700 text-base">
        Par {author}
      </p>
      <div class="p-2">
        <div class="grid place-items-center">
          <form action={url} method="get">
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Comparer les prix !
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>)
}

export default CardBooksLandingPage;