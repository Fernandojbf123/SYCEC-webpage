import BlueButton from "./blueButton.jsx"
import SectionHeader from "./sectionHeader.jsx"
import useData from "../hooks/useData";
import BlueRedirect from "./blueRedirect.jsx";


const Staff = () => {

  const {language} = useData();
  const {headers, links, linksText} = language;


  return (
    <section id="staff" className="w-full py-3 bg-slate-200 text-slate-700">

      <div className="md:w-3/5 mx-auto pt-3 pb-5 px-5">

        <SectionHeader 
            title={headers.staff.title}
            text={headers.staff.text}
        />
    
        <div className="py-5 h-[300px] w-full flex justify-center">
          <figure className="mt-5 relative w-[300px] h-full flex flex-col justify-center items-center rounded-md">
            <img className = "w-[300px] h-[300px] rounded-2xl"
              src="../staff/staff.gif" 
              alt="algo" />

            <div className="absolute h-[300px] w-full px-5">
              <div className="h-[200px]"></div>
              <div className="px-2 rounded-md bg-gradient-to-r from-green-500/50 to-green-500/40 backdrop-blur-sm border">
                <p className="text-slate-50 text-2xl font-bold">Dr. Santiago Reinosa</p>
                <p className="text-slate-100 text-md font-bold">Especialista en modelación de derrames de hidrocarburos</p>
              </div>
            </div>

          </figure>          
        </div>

        <div className="mt-10">
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
// Specialized in software solutions and providing a quality service for my clients
// Experienced web developer skilled in building web pages & web applications using TOP TIER TECHS to fullfil your company needs