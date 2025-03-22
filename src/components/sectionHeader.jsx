
const SectionHeader = ({title,text}) => {
  return (
    <header>
        <h2 
          className="w-full py-3 my- px-3 mb-5
                    md:w-[1/3] md:max-w-[400px] md:mx-auto
                    flex justify-center items-center text-xl text-slate-700 font-bold uppercase rounded-md bg-green-500 ">{title}</h2>
        <span className="h-[100px] text-xl">{text}</span>
    </header>
  )
}

export default SectionHeader
