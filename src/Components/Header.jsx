import { Link } from "react-router-dom";
import { Constant } from "../Constant";

const Header = ()=>{
    return<div>
        <div class="fixed w-full bg-yellow-200">
            <header class="flex">
                <div class=" flex justify-start">
                    <div class="p-1 mt-1 ml-1">
                    <a href="https://www.google.com">
                        <img class="w-40" src="https://i.goopics.net/ngbszq.png" alt="logo">
                        </img>
                    </a>
                    </div>
                </div>
                <div class="flex w-full justify-end space-x-4 mr-10 mt-3">
                    <div>
                        <a><Link to={Constant.PATHS.HOME}>Accueil</Link></a>
                    </div>
                    <div>
                        <a href="https://www.google.com">Recherche</a>
                    </div>
                    <div>
                        <a> <Link to={Constant.PATHS.ABOUT}>A propos</Link> </a>
                    </div>
                    <div>
                        <a> <Link to={Constant.PATHS.CONTACTUS}>Nous contacter</Link> </a>
                    </div>
                </div>
            </header>
        </div>
    </div>
}

export default Header;