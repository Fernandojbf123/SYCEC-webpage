import {languageES} from "../lang-es.js"
import {languageEN} from "../lang-en.js"
import Header from "./components/header.jsx"
// import Hero from "./components/hero.jsx"
// import AboutUs from "./components/aboutUs.jsx"
// import Staff from "./components/staff.jsx"
// import Services from "./components/services.jsx"
import { useEffect, useState } from "react"

function App() {

  let [language, setLanguage] = useState({...languageES});
  let [currentLangSelection, setCurrentLangSelection] = useState("spanish")

  useEffect ( () => {
    if (currentLangSelection === "spanish"){
      setLanguage({...languageES})
    }
    else if (currentLangSelection === "english"){
      setLanguage({...languageEN})
    }
  },[currentLangSelection])
 
  return (
    <>
      
      <Header
        language={language}
        currentLangSelection={currentLangSelection}
        setCurrentLangSelection={setCurrentLangSelection}/>

      {/* <Hero />  

      <div className="mx-auto flex flex-col md:flex-row">
        <AboutUs />

        <Staff />
      </div>

      <Services /> */}

      
    </>
  )
}

export default App
