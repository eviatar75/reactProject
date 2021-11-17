import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";
function SwitchButtonDarkMode(){
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const onclick=()=>{
        if(darkMode){
            theme.dispatch({type: "NORMALMODE"});
        }
        else{
            theme.dispatch({type: "DARKMODE"})
        }
    }

    return(
        
        <button className={`btn ${darkMode ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" : "bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}`} onClick={onclick}>
            {darkMode ? "Mode normal" : "Mode nuit"}
        </button>
    )
}

export default SwitchButtonDarkMode;