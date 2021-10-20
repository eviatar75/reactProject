const Header = ()=>{
    return<div>
        <div class="fixed w-full bg-yellow-200">
            <header class="flex">
                <div class=" flex justify-start">
                    <div class="mt-1 ml-1">
                    <a href="https://www.google.com">
                        <img class="w-40" src="https://i.goopics.net/ngbszq.png" alt="logo">
                        </img>
                    </a>
                    </div>
                </div>
                <div class="flex w-full justify-end space-x-4 mr-10 mt-3">
                    <div>
                        <a href="https://www.google.com" class="btn-xs t:btn-xl ">Accueil</a>
                    </div>
                    <div>
                        <a href="https://www.google.com" class="btn-xs t:btn-xl ">Recherche</a>
                    </div>
                    <div>
                        <a href="https://www.google.com" class="btn btn-primary bg-brand-red ms:btn-xs t:btn-xl ls:btn-md">Qui sommes nous ?</a>
                    </div>
                    <div>
                        <a href="https://www.google.com" class="btn btn-primary bg-brand-red ms:btn-xs t:btn-xl ls:btn-md">Nous contacter</a>
                    </div>
                </div>
            </header>
        </div>
    </div>
}

export default Header;