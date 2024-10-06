import React, { useEffect } from "react"
import { useLocation } from 'react-router-dom'
import NavBar from "../components/NavBar"
import Team from "../components/Team"
import Footer from "../components/Footer"

function TeamPage() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div>
            <NavBar />
            <Team />
            <Footer />
        </div>
    )
}

export default TeamPage