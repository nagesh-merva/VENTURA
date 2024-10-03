import React, { Suspense } from 'react'
import NavBar from "../components/NavBar"
import MainScreen from "../components/MainScreen"
import EventTimeline from "../components/TimeLine"
import MainEventDisplay from "../components/MainEvent"
import Footer from "../components/Footer"
import LoadingScreen from '../components/LoadingScreen'

function IndexPage() {

    return (
        <div className=" h-svh w-full ">
            <Suspense fallback={<LoadingScreen />}>
                <NavBar />
                <MainScreen />
                <EventTimeline />
                <MainEventDisplay />
                <Footer />
            </Suspense>
        </div>
    )
}

export default IndexPage