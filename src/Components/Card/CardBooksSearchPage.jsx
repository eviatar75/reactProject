import { motion } from "framer-motion";

const CardBooksSearchPage = ({ title, author, description, isbn, source }) => {
  const url = "https://www.chasse-aux-livres.fr/prix/" + isbn;

  return (<div class="p-10 h-1/6">
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.5
        }
      }}
    >

      <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="grid place-items-center">
        <img class="w-52 h-72 min-h-72" src={source} alt="" />
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl italic mb-2 truncate">{title}</div>
        </div>
        <p class="text-gray-700 text-base text-right pr-4 truncate pl-4">
          {typeof author !=="undefined"?"Par "+author:"Auteur inconnu"}
        </p>
        <div class="p-2">
          <div class="grid place-items-center mt-2 mb-2">
            <form action={url} method="get">
              <button class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded">
                Comparer les prix
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>

  </div>)
}

export default CardBooksSearchPage;