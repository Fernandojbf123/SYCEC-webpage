import SectionHeader from "./sectionHeader.jsx"
import useData from "../hooks/useData";
import BlueRedirect from "./blueRedirect.jsx";

const AboutUs = () => {

    const {language} = useData();
    const {headers, links, linksText} = language;

  return (
    <section id="aboutUs" className="w-full pt-3 pb-5 px-5 bg-slate-600 text-slate-300">

        <div className="md:w-3/5 mx-auto">
        
            <SectionHeader 
                title={headers.aboutUs.title}
                text={headers.aboutUs.text}
            />
            
            <div className="px-5 mt-3 w-full">
                <ul className="">
                    {headers.aboutUs.list.map ((element,idx)=> (
                        <li 
                        className="list-disc"
                        key={idx}>{element}</li>
                    ))}
                </ul>
                
                <div className="mt-6 mb-3">
                    <BlueRedirect
                        btnText={linksText.toAboutUs}
                        btnValue={links.toAboutUs}
                    />
                </div>
                
            </div>
        </div>
  </section>
  )
}

export default AboutUs
