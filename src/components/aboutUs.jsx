import SectionHeader from "./sectionHeader.jsx"
import useData from "../hooks/useData";
import BlueRedirect from "./blueRedirect.jsx";

const AboutUs = () => {

    const {language} = useData();
    const {headers, links, linksText} = language;

  return (
    <section id="aboutUs" className="w-full py-3 bg-slate-600 text-slate-300">
        <div className="w-full h-full flex justify center items-center">
            <div className="md:w-3/5 mx-auto pt-3 pb-5 px-5">
            
                <SectionHeader 
                    title={headers.aboutUs.title}
                    text={headers.aboutUs.text}
                />
                
                <div className="px-10 mt-3 w-full">
                    <ul className="text-xl">
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
        </div>
  </section>
  )
}

export default AboutUs
