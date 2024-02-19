import useData from "../hooks/useData"


function Footer () {

    const {language} = useData();
    const {nav, footer} = language;

    return(
        <footer id="footer" className="pt-10 pb-5 w-full bg-slate-800 text-slate-300">
            <div className="h-full flex flex-col gap-5 justify-center items-center">
            
                <nav className="h-full flex items-center justify-center">
                <ul className="flex flex-col md:flex-row gap-3 justify-center items-center text-white">
                    {
                    nav.map( (element,idx) => (
                        <li 
                        key={idx}
                        className=" bg-white rounded-sm text-blue-500 font-bold text-center align-middle px-2 py-1 uppercase"
                        >{element}</li>
                    ))
                    }
                </ul>
                </nav>
                <div className="md:w-1/3 px-5 flex flex-col justify-center items-center">
                <div>{footer.copyRight}</div>
                <div>{footer.privacy}</div>
                <div>Made by: BelloDev</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer