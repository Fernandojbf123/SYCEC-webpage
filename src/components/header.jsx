import MobileNavBar from "./mobileNavBar"
import HamburgerMenu from "./hamburgerMenu"
import useData from "../hooks/useData";



const Header = ({}) => {
  
  const {isMobile, isNavBarActive, handleNavBar, language} = useData();
  
  const {nav} = language;




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
            <div id="mobileBar" className="w-full">
              
              <div className="flex flex-row">
              
                <div className="w-full">
                  <HamburgerMenu 
                    handleNavBar={handleNavBar}/>

                  <MobileNavBar 
                    isNavBarActive={isNavBarActive}
                    handleNavBar={handleNavBar}/>
                </div>

              </div>
            </div>

          ):(
          
            // Desktop
            
            <div className="flex-grow">

               {/* language Selector*/}
              <div className="flex justify-end"> 
                  {/* <div className="flex flex-row gap-x-2">
                    <div className="flex justify-center items-center active:scale-90 transition ease-in-out">
                      <div className="relative">
                        <button 
                            value={"spanish"}
                            onClick={e => handleChangeLanguage(e)}
                            className="px-2 py-1 rounded-md text-white bg-blue-700 hover:bg-blue-800"
                              >{"Es"}
                        </button>
                        <span className="absolute flex h-3 w-3 top-0 right-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center active:scale-90 transition ease-in-out">
                      <div className="relative">
                        <button 
                            value={"english"}
                            onClick={e => handleChangeLanguage(e)}
                            className="px-2 py-1 rounded-md text-white bg-blue-700 hover:bg-blue-800"
                              >{"En"}
                        </button>
                        <span className="absolute flex h-3 w-3 top-0 right-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                      </div>
                    </div>
                  </div> */}
              </div>

              <nav className="flex items-center justify-center">
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


