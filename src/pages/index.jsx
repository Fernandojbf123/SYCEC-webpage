

import Hero from "../components/hero.jsx"
import AboutUs from "../components/aboutUs.jsx"
import Staff from "../components/staff.jsx"
import Services from "../components/services.jsx"
import Experience from "../components/experience.jsx"


function Index() {
 
  return (
    <>
  
       <Hero />  

       <div className="mx-0 px-0 flex flex-col md:flex-row">
        <AboutUs />

         <Staff />
      </div>

      <Services />
      
      <Experience />
      
    </>
  )
}

export default Index
