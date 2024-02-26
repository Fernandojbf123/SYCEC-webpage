import SectionHeader from "./sectionHeader.jsx"
import SmallTransparentCard from "./smallTransparentCard.jsx"
import useData from "../hooks/useData";

const Services = () => {

    const {language} = useData();
    const {headers} = language;    

  return (
    <section id="services" className="w-full bg-slate-200 text-slate-300">

        
        <div className="relative px-5 w-full flex justify-center">
            <div className="mx-auto z-10">
                <div className="relative px-2 md:flex md:justify-center">
                    <SectionHeader 
                        title={headers.services.title}
                        text={headers.services.text}
                    />
                </div>

                <div className="container mx-auto mt-16  flex md:flex-row flex-wrap justify-center xs:justify-normal gap-20">

                    {headers.services.list.map ( (element,idx) => (
                        <SmallTransparentCard
                            title = {element}
                            benefit = {headers.services.descriptionOfList[idx]}
                            srcImg = {headers.services.imgSrc[idx]}
                            btnText = {headers.services.linkText}
                            link = {headers.services.link[idx]}
                            key={idx}
                    />
                    ))}
                </div>
            </div>

            <div className="absolute top-0 left-0 z-0  h-full w-full">
                <video 
                    className="object-center object-cover h-full min-h-[750px] w-screen"
                    autoPlay muted loop src="./video.mp4"/>
            </div>
        </div>

  </section>
  )
}

export default Services
