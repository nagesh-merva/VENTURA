import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import mainEvents from "../js/MainEvents.js"

function MainEventDisplay() {
    const eventRefs = useRef([])

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach((entry) => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('animate-fade-in-up')
    //             } else {
    //                 entry.target.classList.remove('animate-fade-in-up')
    //             }
    //         })
    //     }, {
    //         threshold: 0.15,
    //     })

    //     eventRefs.current.forEach((ref) => {
    //         if (ref) observer.observe(ref)
    //     });

    //     return () => {
    //         eventRefs.current.forEach((ref) => {
    //             if (ref) observer.unobserve(ref)
    //         })
    //     }
    // }, [])

    return (
        <div className="relative z-40 mx-5 my-10 md:mx-24 md:my-20 px-4 py-8 bg-white/10 border border-gray-300 rounded-lg shadow-md backdrop-blur-lg">
            <h1 className="text-4xl font-bold text-blue-500 mb-8">EVENTS</h1>
            <ol className="space-y-10 z-50">
                {mainEvents.map((event, index) => (
                    <li
                        key={index}
                        ref={(el) => (eventRefs.current[index] = el)}
                        className="relative flex flex-col sm:flex-row items-center mb-8 border bg-blue-500/10 border-blue-500 p-6 rounded-lg transform translate-y-8"
                    >
                        <div className="sm:w-1/4 mb-6 sm:mb-0 sm:mr-8 flex justify-center">
                            <img src={event.imgUrl} alt={event.name} className="rounded-lg w-48 h-48 object-cover shadow-lg border border-white/20" />
                        </div>
                        <div className="sm:w-3/4">
                            <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                            <p className="text-lg text-gray-300 mt-2 mb-4">{event.description}</p>
                            <div className="flex space-x-4">
                                {event.link && (
                                    <a href={event.link} className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md">Register</a>
                                )}
                                <Link to={`/event-details/${event.name}`} className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 shadow-md">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default MainEventDisplay