import {headers} from "../../lang-es.js"

const Hero = () => {

  return (
    <section id="hero" className="w-full">
                  
        <div className="py-2 bg-[url('../HERO.webp')] bg-center bg-cover bg-no-repeat
                        h-[300px] h-min-[300px] md:h-[600px]">                
          <div className="mx-2 px-5 py-5 rounded-md bg-blue-700/40
                          md:mx-20 md:my-20 md:w-2/5 md:h-[150px] md:flex md:flex-col md:justify-center">
            <h1 className="text-slate-50 text-2xl font-bold">{headers.headerOne.title}</h1>
            <span className="text-white">{headers.headerOne.text}</span>
          </div>           
        </div>

      </section>
  )
}

export default Hero
