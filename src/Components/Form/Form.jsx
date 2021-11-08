function Form({prenom, nom, couriel, telephone, message, bouton}) {
  return(
    <form class="w-full" >
  <div class="flex flex-wrap -mx-3 mb-4">
  <div class="w-full md:w-1/2 px-12">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
      {prenom}
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
    </div>
    <div class="w-full md:w-1/2 px-12">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        {nom}
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
    </div>
    <div class="w-full md:w-1/2 px-12">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        {couriel}
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
    </div>
    <div class="w-full md:w-1/2 px-12">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        {telephone}
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-20">
    <div class="w-full px-12">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        {message}
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-full" id="grid-password" type="password"/>
      <p class="text-gray-600 text-xs italic">Faites-le aussi long et aussi fou que vous le souhaitez</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-12">
    <div class="w-full px-12">
      <button class="font-bold py-2 px-10 rounded  bg-blue-500 text-white bg-blue-700 -left-px">
      {bouton}
      </button>
    </div>
  </div>
</form>
)

};

export default Form;
