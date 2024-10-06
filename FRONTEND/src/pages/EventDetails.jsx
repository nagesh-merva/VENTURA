import React from 'react'
import { useParams } from 'react-router-dom'
import mainEvents from '../js/MainEvents'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import TeamCard from '../components/MemberCard'

function EventDetails() {
    const { eventId } = useParams()
    const event = mainEvents.find(e => e.name === decodeURIComponent(eventId))

    if (!event) {
        return <h2 className="text-2xl text-white text-center mt-10">Event not found</h2>
    }

    return (
        <div className="relative max-w-4xl mx-auto px-6 py-20">
            <NavBar />
            <div className='bg-white/10 px-6 py-12 border border-gray-300 rounded-lg shadow-md backdrop-blur-lg'>

                <div className="flex justify-center mb-6">
                    <img src={event.imgUrl} alt={event.name} className="w-32 h-auto rounded-lg shadow-lg" />
                </div>

                <h1 className="text-4xl font-bold text-blue-500 mb-4 text-center">{event.name}</h1>

                <p className="text-lg text-gray-300 mb-6">{event.description}</p>

                <p className="text-lg text-gray-300 mb-4"><strong>Time:</strong> {event.timing}</p>
                <p className="text-lg text-gray-300 mb-4"><strong>Location:</strong> {event.location}</p>

                {event.prize && (<p className="text-lg text-gray-300 mb-6"><strong>Prize:</strong> {event.prize}</p>)}

                {event.name === "Engineers to Entrepreneurs" ? (
                    <h3 className="text-2xl font-bold text-white mb-4">It will cover</h3>
                ) : (
                    <h3 className="text-2xl font-bold text-white mb-4">Rules</h3>
                )}
                <ul className="text-lg text-gray-300 list-disc ml-6 mb-6">
                    {event.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>

                <h3 className="text-2xl font-bold text-white mb-4">Coordinators</h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 w-full px-5 md:px-20 gap-8">
                    {event.coordinators.map((coordinator, index) => (
                        <TeamCard key={index} member={coordinator} />
                    ))}
                </ul>

            </div>

            <button className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-5/6 bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-blue-700">
                Register
            </button>
            <Footer />
        </div>
    )
}

export default EventDetails