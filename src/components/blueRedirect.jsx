import { Link } from "react-router-dom"

const BlueRedirect = ({btnValue, btnText}) => {
  return (
    <div className="flex justify-center items-center active:scale-90 transition ease-in-out">
        <div className="relative">
            <div className="px-3 py-3 rounded-md text-white bg-blue-700 hover:bg-blue-800">
            <Link 
                to={btnValue}
            >{btnText}
            </Link>
            </div>

            <span className="absolute flex h-3 w-3 top-0 right-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </div>

    </div>
  )
}

export default BlueRedirect
