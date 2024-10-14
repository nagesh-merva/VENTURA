import React from 'react';

const events = [
    {
        title: "Events Registrations",
        date: "Starts on October 7, 2024"
    },
    {
        title: "Pitchers Arena Events and BBB",
        date: "Starts on October 17, 2024"
    },
    {
        title: "Ecell Inaugration, Failure Forensics and Talk",
        date: "Starts on October 18, 2024"
    },
    {
        title: "Feature & Award ceremony at Vibrant Goa",
        date: "Starts on November 8, 2024"
    }
];

function EventTimeline() {
    return (
        <div className="relative z-40 mx-5 my-10 md:mx-24 md:my-20 px-4 py-8 backdrop-blur-lg bg-white/10 border border-glow border-white/30 rounded-lg shadow-md">
            <ol className="items-center sm:flex">
                {events.map((event, index) => (
                    <li key={index} className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full ring-0 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            {index < events.length - 1 && (
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                            )}
                        </div>
                        <div className="mt-3 pl-3 md:pl-8 sm:pe-8 border-l-2 border-blue-900">
                            <h3 className="text-xl md:3xl font-semibold text-gray-100 py-1 md:py-3">{event.title}</h3>
                            <time className="block mb-2 text-lg ms:text-xl font-normal leading-none text-gray-300 ">{event.date}</time>
                        </div>
                    </li>
                ))}
            </ol>
            <div class="flex justify-center mt-8">
                <a href="/ventura.pdf" download="ventura.pdf" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
                    Download Brochure
                </a>
            </div>
        </div>
    );
}

export default EventTimeline;
