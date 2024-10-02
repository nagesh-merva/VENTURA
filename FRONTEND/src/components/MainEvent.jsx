import React from 'react'
import { motion } from 'framer-motion'

const mainEvents = [
    {
        imgUrl: "/pitchtank.png",
        name: "PITCH TANK",
        description: "Inspired by the popular show, Pitch Tank invites aspiring entrepreneurs to pitch their innovative ideas to a panel of judges. Teams will have to convince the panel why their product or service is a game- changer.Whether youre starting a tech company or launching a social initiative, this is your platform to shine.",
    },
    {
        imgUrl: "/brandbuilder.png",
        name: "BRAND BUILDER BATTLE",
        description: "In this competition, each team will be allowed to spend Rs. 500 and create an innovative product or service.Teams will then pitch their product to a panel of judges.The competition will focus on three key criteria: profits, innovation, and scalability.The goal is to use the Rs. 500 smartly and develop something that not only generates profit but also demonstrates creative thinking and potential for growth.",
    },
    {
        imgUrl: "/casestudy.png",
        name: "CASE STUDY ",
        description: "In this competition, teams will analyze a failed real-life business example provided by the organizers.Teams will present their findings and provide strategic solutions that could have turned the business around.The key is to think critically and offer practical insights.",
    },
    {
        imgUrl: "/adbattle.png",
        name: "ADVERTISEMENT BATTLE",
        description: "Participants will create a 1.5-minute advertisement based on a given brand.The ad should creatively showcase the brand’s values, products, or services while engaging the target audience.Whether humorous or serious, the ad must convey the brand’s message effectively and within the time limit",
    }
]

const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 150
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.6
        }
    }
}

function MainEventDisplay() {
    return (
        <div className="relative z-40 mx-5 my-10 md:mx-24 md:my-20 px-4 py-8 bg-white/10 border border-gray-300 rounded-lg shadow-md backdrop-blur-lg">
            <ol className="space-y-10 z-50">
                {mainEvents.map((event, index) => (
                    <motion.li
                        key={index}
                        className="relative flex flex-col sm:flex-row items-center mb-8 border border-blue-500/30 p-6 rounded-lg bg-gradient-to-r from-blue-900/60 via-gray-900 to-blue-900/60 backdrop-blur-lg shadow-lg glow-effect"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={cardVariants}
                    >

                        <div className="sm:w-1/4 mb-6 sm:mb-0 sm:mr-8 flex justify-center">
                            <img src={event.imgUrl} alt={event.name} className="rounded-lg w-48 h-48 object-cover shadow-lg border border-white/20" />
                        </div>
                        <div className="sm:w-3/4">
                            <h3 className="text-2xl font-bold text-white">{event.name}</h3>
                            <p className="text-lg text-gray-300 mt-2 mb-4">{event.description}</p>
                            <div className="flex space-x-4">
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md">Register</button>
                                <button className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 shadow-md">View Details</button>
                            </div>
                        </div>

                    </motion.li>
                ))}
            </ol>
        </div>
    )
}

export default MainEventDisplay
