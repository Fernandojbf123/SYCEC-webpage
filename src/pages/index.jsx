

import Hero from "../components/hero.jsx"
import AboutUs from "../components/aboutUs.jsx"
import Staff from "../components/staff.jsx"
import Services from "../components/services.jsx"


function Index() {
 
  return (
    <>
  
       <Hero />  

       <div className="mx-auto flex flex-col md:flex-row">
        <AboutUs />

         <Staff />
      </div>

      <Services />

      
    </>
  )
}

export default Index
