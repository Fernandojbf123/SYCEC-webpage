import MobileNavBar from "./mobileNavBar"
import HamburgerMenu from "./hamburgerMenu"
import useData from "../hooks/useData";

import { HashLink } from "react-router-hash-link"
import { useLocation } from "react-router-dom"

import BlueButton from "./blueButton"

const Header = ({ }) => {

  const { isMobile, isNavBarActive, handleNavBar, language, handleChangeLanguage } = useData()
  const { nav, navLink } = language;
  
  const location = useLocation()
  const { pathname } = location;

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
              className="w-[20px] h-[20px] bg-white" />
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
        <div id="mobileBar" className="w-full">

          <div className="flex flex-row">

            <div className="w-full fixed top-0 right-0 z-20">
              <HamburgerMenu
                handleNavBar={handleNavBar} />

              <MobileNavBar
                isNavBarActive={isNavBarActive}
                handleNavBar={handleNavBar} />
            </div>

          </div>
        </div>

      ) : (

        // Desktop

        <div className="flex-grow">

          {/* language Selector*/}
          <div className="flex justify-end">
            <select 
              name="selectedLanguage" 
              className="w-[100px] h-[30px] px-2 py-1 text-slate-200 bg-slate-800 rounded-md [&>option]:hover:bg-green-500"
              onChange={e => handleChangeLanguage(e)}
              >
              <option value={"spanish"}>{"Español"}</option>
              <option value={"english"}>{"English"}</option>
            </select>
            {/* <BlueButton 
              btnText={"Español"}
              btnValue={"spanish"}
              btnOnClick={handleChangeLanguage}
            />

            <BlueButton 
              btnText={"English"}
              btnValue={"english"}
              btnOnClick={handleChangeLanguage}
            /> */}
          </div>

          <nav className="flex items-center justify-center">
            <ul className="flex flex-col md:flex-row gap-3 justify-center items-center text-white">
              {
                nav.map((element, idx) => (
                  // <li 
                  //   key={idx}
                  //   className=" bg-white rounded-sm text-blue-500 font-bold text-center align-middle px-2 py-1 uppercase"
                  //   >{element}</li>
                  <HashLink
                    key={element}
                    id={element}
                    smooth to={`/#${navLink[idx]}`}
                    className="[&>li]:active:bg-green-500 [&>li]:active:scale-95 [&>li]:hover:bg-green-500">

                    <li className={`px-2 text-slate-200 border-slate-400 border flex rounded-md ${pathname === "/" && " !text-slate-800 !bg-green-500"}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                      {element}<span className="text-slate-200"></span>
                    </li>
                  </HashLink>
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

