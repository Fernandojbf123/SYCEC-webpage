import BlueButton from "./blueButton.jsx"
import SectionHeader from "./sectionHeader.jsx"
import useData from "../hooks/useData";
import BlueRedirect from "./blueRedirect.jsx";


const Staff = () => {

  const {language} = useData();
  const {headers, links, linksText} = language;


  return (
    <section id="staff" className="w-full pt-3 pb-5 px-5 bg-slate-200 text-slate-700">

      <div className="md:w-3/5 mx-auto">

        <SectionHeader 
            title={headers.staff.title}
            text={headers.staff.text}
        />
    
        <div className="mt-6 mb-3">
          <BlueRedirect
                  btnText={linksText.toStaff}
                  btnValue={links.toStaff}
          />
        </div>
      </div>
  </section>
  )
}

export default Staff
