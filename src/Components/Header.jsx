import { Link } from "react-router-dom";
import { Constant } from "../Constant";
import {firebase} from "../Firebase/firebase"

const Header = ()=>{
    const signOut =() =>{
        firebase.auth().signOut();
    }
    return<div>
        <div class="fixed w-full bg-purple-200 z-10">
            <header class="flex">
                <div class=" flex justify-start">
                    <div class="p-1 mt-1 ml-1">
                            <Link to={Constant.PATHS.HOME}>
                                <img class="w-40" src="https://i.goopics.net/ngbszq.png" alt="logo"/>
                            </Link>
                    </div>
                </div>
                <div class="flex w-full justify-end space-x-4 mr-10 mt-3">
                    <div>
                        <Link to={Constant.PATHS.HOME}>Accueil</Link>
                    </div>
                    <div>
                        <Link to={Constant.PATHS.SEARCH}>Rechercher</Link>
                    </div>
                    <div>
                        <Link to={Constant.PATHS.ABOUT}>A propos</Link>
                    </div>
                    <div>
                        <Link to={Constant.PATHS.CONTACTUS}>Nous contacter</Link>
                    </div>
                    <div>
                       {firebase.auth().currentUser!==null ? "Bonjour "+firebase.auth().currentUser.displayName:<></>}
                    </div>
                    <div>
                        <button onClick={signOut}>Deconnexion</button>
                    </div>
                </div>
            </header>
        </div>
    </div>
}

export default Header;