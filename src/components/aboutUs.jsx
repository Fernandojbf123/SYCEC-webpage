import {headers, links} from "../../lang-es.js"
import BlueButton from "./blueButton.jsx"
import SectionHeader from "./sectionHeader.jsx"

const AboutUs = () => {
  return (
    <section id="aboutUs" className="w-full pt-3 pb-5 px-5 bg-slate-600 text-slate-300">

        <div className="md:w-3/5 mx-auto">
        
            <SectionHeader 
                title={headers.aboutUs.title}
                text={headers.aboutUs.text}
            />
            
            <div className="px-5 mt-3 w-full">
                <ul>
                    {headers.aboutUs.list.map ((element,idx)=> (
                        <li 
                        className="list-disc"
                        key={idx}>{element}</li>
                    ))}
                </ul>
                
                <BlueButton
                    linkText={links.toMision}
                />
                
            </div>
        </div>
  </section>
  )
}

export default AboutUs
