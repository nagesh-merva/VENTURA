import { FaBars } from "react-icons/fa6"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function NavBar() {
    const [showDropdown, setShowDropdown] = useState(false)
    const navigate = useNavigate()

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown)
    }

    const handleHomeClick = () => {
        navigate("/")
    }

    const handleTeamClick = () => {
        navigate("/team")
    }

    return (
        <div className="h-16 w-full z-50 bg-gray-950/90 fixed flex items-center top-0 left-0">
            <img src="/ecell.jpg" alt="ecelllogo" className="h-14 px-2 py-1 w-auto" />
            <FaBars
                className="absolute right-6 text-white text-xl cursor-pointer"
                onClick={handleDropdownClick}
            />
            {showDropdown && (
                <div className="absolute right-0 top-16 bg-gray-950/90 w-full py-2">
                    <ul className="text-white font-sans font-bold space-y-2">
                        <li className=" hover:underline decoration-blue-600 text-center" onClick={handleHomeClick}>Home</li>
                        <li className=" hover:underline decoration-blue-600 text-center" onClick={handleTeamClick}>Organisers</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default NavBar