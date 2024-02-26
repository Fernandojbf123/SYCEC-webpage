import useScreenSize from "../hooks/useScreenSize"
import { useState, useEffect } from "react"

const Carousel = ({imagesSrc, imagesDate, imagesTitle, imagesDescription}) => {

    //imagesSrc is an array of path
    //imagesDate is an array of dates
    //imagesTitle is an array of Titles
    //imagesDescription is an array of descriptions

    const screenSize = useScreenSize()
    const [isMobile, setIsMobile] = useState(false);

    const [currentIdx, setCurrentIdx] = useState(0);

    let numberOfImages = imagesSrc.length;

    /* GET SIZE OF SCREEN */ 
    useEffect( () => {
        if(screenSize.width<1350){
        setIsMobile(true)
        return
        }
        setIsMobile(false)
    },[screenSize])

    function handleChangeImage (e) {

        const counter = currentIdx + Number(e.target.value);
        if (counter > numberOfImages-1){
            setCurrentIdx(0)
            return
        }
        else if (counter < 0) {
            setCurrentIdx(numberOfImages-1)
            return
        }

        setCurrentIdx ( () => currentIdx + Number(e.target.value))
    }

    function handleClickImgSelector(e) {
        setCurrentIdx(Number(e.target.value))
    }


  return (
    <div className="w-full h-full flex md:flex-row justify-center items-center">
                
                {isMobile ? (
                    //MOBILE VERSION
                    <div className="p-5 w-full h-full flex flex-col">         
                        <div className="h-[50vw] w-full">
                            
                            <article className="relative w-full h-full">
                                <div id="imgBox" className="absolute w-full h-full">
                                    <img
                                        className="w-full h-full" 
                                        src={imagesSrc[currentIdx]} 
                                        alt="" 
                                        />
                                </div>

                                <div id="buttonsBox" className="absolute w-full h-full ">
                                    <div id="leftBtnContainer" className="absolute w-full h-full flex items-center justify-start">
                                        <button
                                            value={Number(-1)}
                                            onClick={e => handleChangeImage(e)} 
                                            className="h-[50px] w-[50px] text-slate-200 text-2xl font-black bg-green-500 rounded-full active:scale-90" >
                                        {"<"}
                                        </button>
                                    </div>

                                    <div id="rightBtnContainer" className="absolute w-full h-full flex items-center justify-end">
                                        <button 
                                            value={Number(+1)}
                                            onClick={e => handleChangeImage(e)}
                                            className="h-[50px] w-[50px] text-slate-200 text-2xl font-black  bg-green-500 rounded-full active:scale-90" >
                                        {">"}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <footer className="relative h-full m-3 flex gap-3">
                            <article className="w-full flex flex-col justify-center items-center">
                                <p className="text-md text-slate-200">{imagesDate[currentIdx]}</p>
                                <h3 className="text-2xl font-bold text-slate-200">{imagesTitle[currentIdx]}</h3>
                                <p className="text-slate-200">{imagesDescription[currentIdx]}</p>
                            </article>
                        </footer>
                        
                    
                    </div>

                ):(
                    //PC VERSION
                    <>
                        <div className="p-5 flex justify-center items-center active:scale-90">
                            <button 
                                value={Number(-1)}
                                onClick={e => handleChangeImage(e)}
                                className="w-[50px] h-[50px] text-slate-200 text-2xl font-black  bg-green-500 rounded-full" >
                            {"<"}
                            </button>
                        </div>


                        <div id="img_text_container" className="w-full h-full p-5 flex flex-col justify-center items-center">
                            <div className="w-full min-h-full flex flex-row items-center justify-center">
                                <article className="w-1/2 h-full flex justify-center items-center">
                                    <img 
                                        src={imagesSrc[currentIdx]} 
                                        alt="decoration image" 
                                        className="h-full rounded-md"/>
                                </article>

                                <article className="w-1/2 flex flex-col justify-center ml-5">
                                    <p className="text-xl text-slate-200">{imagesDate[currentIdx]}</p>
                                    <h3 className="text-5xl font-bold text-slate-200">{imagesTitle[currentIdx]}</h3>
                                    <p className="text-slate-200">{imagesDescription[currentIdx]}</p>
                                </article>
                            </div>
                            <footer className="mt-3">
                                
                                <ul className="flex flex-row gap-2">
                                    {imagesSrc.map( (element,idx) => (
                                        <li key={idx}>
                                            <button 
                                                className={`h-[10px] w-[20px] p-1 rounded-md bg-slate-200/15 ${currentIdx === idx && '!bg-slate-100'  } hover:scale-110 active:bg-slate-100 active:scale-110  `}  
                                                value={Number(idx)}
                                                onClick={e => handleClickImgSelector(e)}
                                            ></button>
                                        </li>
                                    ))}
                                    <li>

                                    </li>

                                </ul>
                                
                            </footer>
                        </div>


                        <div className="p-5 flex justify-center items-center active:scale-90">
                            <button 
                                value={Number(+1)}
                                onClick={e => handleChangeImage(e)}
                                className="w-[50px] h-[50px] text-slate-200 text-2xl font-black  bg-green-500 rounded-full" >
                            {">"}
                            </button>
                        </div>
                    </>
                )}
    </div>
                
  )
}

export default Carousel
