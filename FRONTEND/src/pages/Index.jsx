import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NavBar from "../components/NavBar"
import MainScreen from "../components/MainScreen"
import EventTimeline from "../components/TimeLine"
import MainEventDisplay from "../components/MainEvent"
import Footer from "../components/Footer"

function IndexPage() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <div className=" h-svh w-full ">
            <NavBar />
            <MainScreen />
            <EventTimeline />
            <MainEventDisplay />
            <Footer />
        </div>
    )
}

export default IndexPage