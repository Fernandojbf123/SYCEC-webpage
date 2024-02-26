import useData from "../hooks/useData"
import Carousel from "./carousel";
import SectionHeader from "./sectionHeader"

const Experience = () => {

    const {language} = useData();
    const {headers} = language;

  return (

    <section id="experience" className="w-full">
        <div className='flex flex-col justify-center items-center bg-slate-600'>
            
            <div className="mt-5 px-5 text-slate-200">
                <SectionHeader 
                    title={headers.experience.title}
                    text={headers.experience.text}
                />
            </div>

            <div className="w-full 2xl:h-[80vh]">
                <Carousel 
                    imagesSrc={headers.experience.imagesSrc}
                    imagesDate={headers.experience.imagesDate}
                    imagesTitle={headers.experience.imagesTitle}
                    imagesDescription={headers.experience.imagesDescription}
                    />
            </div>
        </div>

    </section>
  )
}

export default Experience
