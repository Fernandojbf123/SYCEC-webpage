import {nav} from "../../lang-es.js"
import useScreenSize from "../hooks/useScreenSize"
import { useEffect, useState } from "react"
import MobileNavBar from "./mobileNavBar"
// import NavBar from "./navBar"
// import LogoSection from "./logoSection"
 import HamburgerMenu from "./hamburgerMenu"


const Header = () => {

  const screenSize = useScreenSize()
  const [isMobile, setIsMobile] = useState(false);
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  useEffect( () => {
    if(screenSize.width<1350){
      setIsMobile(true)
      return
    }
    setIsMobile(false)
  },[screenSize])

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


  return (
    <header className="w-full flex bg-slate-800
                        md:flex-row">
      
          <div className="md:w-1/3 py-3">
            <div className="flex flex-col gap-1 text-white ">       
              <img 
                src="./SYCEC-logo.webp" 
                alt="SYCEC logo"
                className="w-[200px] h-[70px]"
                ></img>
              <div className="flex gap-2 mx-2 px-2">
                <img 
                  src="./gmail.png" 
                  alt="ico1" 
                  className="w-[20px] h-[20px] bg-white"/>
                <span>ventas.servicios@sycec.com.mx</span>
              </div>
              <div className="flex gap-2 mx-2 px-2">
                <img 
                  src="./celphone.png" 
                  alt="contacto" 
                  className="w-[20px] h-[20px] bg-white"
                  />
                <span>+52 938 1180 023</span>
              </div>
            </div>
          </div>


          {/* Mobile */}
          {isMobile ? (
          <div className="w-full">
            <HamburgerMenu 
              handleNavBar={handleNavBar}/>

            <MobileNavBar 
              isNavBarActive={isNavBarActive}
              handleNavBar={handleNavBar}/>
          </div>

        ):(
          
          <div className="flex-grow">
            <nav className="h-full flex items-center justify-center">
              <ul className="flex flex-col md:flex-row gap-3 justify-center items-center text-white">
                {
                  nav.map( (element,idx) => (
                    <li 
                      key={idx}
                      className=" bg-white rounded-sm text-blue-500 font-bold text-center align-middle px-2 py-1 uppercase"
                      >{element}</li>
                  ))
                }
              </ul>
            </nav>
          </div>
            
          
        )}
          

      </header>
  )
}

export default Header
