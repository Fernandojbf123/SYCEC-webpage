import useData from "../hooks/useData";

const Hero = ({}) => {

  const {language} = useData();
  const {headers} = language;

  return (
    <section id="hero" className="w-full min-h-[750px]">

      <div className="relative px-5 w-full flex justify-center">      
        <div className="absolute top-0 left-0 z-0  h-full w-full">
          <video 
            className="object-center object-cover h-full min-h-[750px] w-screen"
            autoPlay muted loop src="./video.mp4"/>
        </div>
      </div>


      <div className="relative mt-20 py-2 h-[300px] h-min-[300px] 
                      md:mt-10 md:py-2 md:h-[600px]">                
        <div className="mx-2 px-5 py-5 rounded-md bg-blue-700/40
                        md:mx-20 md:my-20 md:w-2/5 md:h-[150px] md:flex md:flex-col md:justify-center">
          <h1 className="text-slate-50 text-2xl font-bold">{headers.headerOne.title}</h1>
          <span className="text-white text-xl">{headers.headerOne.text}</span>
        </div>           
      </div>

      {/* <div className="relative py-2 bg-[url('../HERO.webp')] bg-center bg-cover bg-no-repeat
                        h-[300px] h-min-[300px] md:h-[600px]">                
        <div className="mx-2 px-5 py-5 rounded-md bg-blue-700/40
                        md:mx-20 md:my-20 md:w-2/5 md:h-[150px] md:flex md:flex-col md:justify-center">
          <h1 className="text-slate-50 text-2xl font-bold">{headers.headerOne.title}</h1>
          <span className="text-white">{headers.headerOne.text}</span>
        </div>           
      </div> */}
    </section>
  )
}

export default Hero
