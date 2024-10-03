import React from 'react'
import NavBar from "../components/NavBar"
import MainScreen from "../components/MainScreen"
import EventTimeline from "../components/TimeLine"
import MainEventDisplay from "../components/MainEvent"
import Footer from "../components/Footer"

function IndexPage() {

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