import {headers, links} from "../../lang-es.js"
import BlueButton from "./blueButton.jsx"
import SectionHeader from "./sectionHeader.jsx"

const Staff = () => {
  return (
    <section id="staff" className="w-full pt-3 pb-5 px-5 bg-slate-200 text-slate-700">

      <div className="md:w-3/5 mx-auto">

        <SectionHeader 
            title={headers.staff.title}
            text={headers.staff.text}
        />
    
        
        <BlueButton
                linkText={links.toStaff}
        />
      </div>
  </section>
  )
}

export default Staff
