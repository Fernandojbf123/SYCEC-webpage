import BlueRedirect from "./blueRedirect"

const SmallTransparentCard = ({title, benefit, srcImg, btnText, link}) => {
    return (
      <div id="serviceCard" className="py-6 px-4 min-w-[350px] max-w-[350px] h-[250px] flex flex-col rounded-md bg-gradient-to-r from-gray-50/10 to-white/10 backdrop-blur-sm border
                         hover:bg-green-600   
      ">  
            <figure className="flex justify-center">
              <img    
                  className="w-[100px] aspect-square rounded-full absolute -top-16 border-[5px] bg-slate-200/60"
                  src={srcImg}
                  alt={title}
              />
            </figure>
          
            <div className="relative bottom-0 mt-5 flex flex-col gap-5 [&>h3]:hover:scale-105 [&>p]:hover:scale-105 active:scale-95">
                <h3 className="text-xl font-bold text-slate-200">{title}</h3>
                <p className="text-md text-slate-200">{benefit}</p>
            </div>    

            <div className="mt-5">
                <BlueRedirect
                  btnText={btnText}
                  btnValue={link}
                />
            </div>    
      </div>
    )
  }
  
  export default SmallTransparentCard
  