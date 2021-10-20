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
                        <a href="https://www.google.com" class="btn-xs t:btn-xl ">Blog</a>
                    </div>
                    <div>
                        <a href="https://www.google.com" class="btn-xs t:btn-xl ">F.A.Q</a>
                    </div>
                    <div>
                        <a href="https://www.google.com" class="btn btn-primary bg-brand-red ms:btn-xs t:btn-xl ls:btn-md">Inscription</a>
                    </div>
                    <div>
                        <a href="tel:+330170934060" class="btn btn-primary bg-brand-red ms:btn-xs t:btn-xl ls:btn-md">01 70 93 40 60</a>
                    </div>
                </div>
            </header>
        </div>
    </div>
}

export default Header;