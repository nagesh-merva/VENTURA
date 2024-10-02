import { FaBars } from "react-icons/fa6"


function NavBar() {

    return (
        <div className="h-16 w-full z-50 bg-gray-950/90 fixed flex items-center top-0">
            <img src="/ecell.png" alt="ecelllogo" className="h-14 px-2 py-1 w-auto" />
            <FaBars className="absolute right-6 text-white text-xl" />
        </div>
    )
}

export default NavBar