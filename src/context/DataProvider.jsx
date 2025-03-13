import { useState, useEffect, createContext } from "react";
import useScreenSize from "../hooks/useScreenSize";
import {languageES} from "../../lang-es.js"
import {languageEN} from "../../lang-en.js"


const DataContext = createContext()

const DataProvider = ({children}) => {

    const screenSize = useScreenSize()

    const [isMobile, setIsMobile] = useState(false);
    const [isNavBarActive, setIsNavBarActive] = useState(false);

    let [language, setLanguage] = useState({...languageES});
    let [currentLangSelection, setCurrentLangSelection] = useState("spanish")


  

    /* GET SIZE OF SCREEN */ 
    useEffect( () => {
        if(screenSize.width<1350){
        setIsMobile(true)
        return
        }
        setIsMobile(false)
    },[screenSize])

    /* ACTIVATE MODAL NAVBAR: MOBILE VERSION */ 
    function handleNavBar () {
        setTimeout ( () => {
          setIsNavBarActive(!isNavBarActive)
        },150)
        if (!isNavBarActive){
          disableScroll()
          return
        }
        enableScroll()
      }
      
      /* ENABLE AND DISABLE SCROLL WHEN MODAL IS ACTIVE: MOBILE VERSION */ 
      function disableScroll() {
        // Get the current page scroll position
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
        // if any scroll is attempted, set this to the previous value
        window.onscroll = () => {
          window.scrollTo(scrollLeft, scrollTop);
        };
      }

      function enableScroll() {
        window.onscroll = function() {};
    }

  
    /* FUNCTIONS OF LANGUAGE */
    useEffect ( () => {
      if (currentLangSelection === "spanish"){
        setLanguage({...languageES})
      }
      else if (currentLangSelection === "english"){
        setLanguage({...languageEN})
      }
    },[currentLangSelection])

    function handleChangeLanguage(e) {
      // console.log(e.target.value)
      setCurrentLangSelection(e.target.value)
    }

    /* Navigate to */

    function handleNavigate(e) {
      console.log(e.target.value)
      //window.location.href = e.target.value
      
    }
    

    return (
        <DataContext.Provider 
            value={{
              isMobile,
              isNavBarActive,
              handleNavBar,
              language,
              handleChangeLanguage,
              handleNavigate,
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export {DataProvider}
export default DataContext