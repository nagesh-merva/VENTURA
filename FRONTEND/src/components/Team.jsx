import React from 'react'
import TeamCard from './MemberCard';

const teamData = {
    faculty: [
        { name: "DR. Aisha Fernandes", role: "Faculty Coordinator", img: "/aishamaam.jpg", linkedin: '', whatsapp: '9822121460' },
        { name: "Dr. Ganesh Hedge", role: "Faculty Coordinator", img: "/drsmith.jpg", linkedin: '', whatsapp: '9420978458' },
        { name: "Dr. Ganesh Manerkar", role: "Faculty Coordinator", img: "/drsmith.jpg", linkedin: '', whatsapp: '9422443586' },
    ],
    // students: [
    //     { name: "John Doe", role: "Student Coordinator", img: "/johndoe.jpg", linkedin: '', whatsapp: '' },
    // ],
    council: [
        { name: "Manoj Paschapur", role: "Ecell President", img: "/manoj.jpg", linkedin: '', whatsapp: '7769879833' },
        { name: "Ahmed ", role: "Ecell Vice President", img: "/ahmed.jpg", linkedin: '', whatsapp: '7774881382' },
        { name: "Yash Palan ", role: "Ecell Treasurer", img: "/yash.jpg", linkedin: '', whatsapp: '7040910033' },
        { name: "Shubham Vaiude", role: "Event Head", img: "/shubham.jpg", linkedin: '', whatsapp: '8605517107' },
        { name: "Tasneem ", role: "Marketing Head", img: "/janeroe.jpg", linkedin: '', whatsapp: '9011783766' },
        { name: "Irshad ", role: "Assistant Marketing Head", img: "/janeroe.jpg", linkedin: '', whatsapp: '' },
        { name: "Johan Fernandes ", role: "Startup Head", img: "/janeroe.jpg", linkedin: 'https://www.linkedin.com/in/johan-fernandes-2607b9270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', whatsapp: '9527722619' },
        { name: "Nagesh Merva ", role: "Technical Head", img: "/nagesh.jpg", linkedin: 'https://www.linkedin.com/in/nagesh-merva-8b2b57289', whatsapp: '7264833272' },
        { name: "Bhuvanshika", role: "PR Head", img: "/bhuvanshika.jpg", linkedin: '', whatsapp: '8793112169' },
    ],
    developers: [
        { name: "Nagesh Merva ", role: "Technical Head", img: "/nagesh.jpg", linkedin: 'www.linkedin.com/in/nagesh-merva-8b2b57289', whatsapp: '7264833272' },
    ],
    sponsors: [
        { name: "Jagat Shah", role: "Mentor", img: "/jagatshah.png", linkedin: '', whatsapp: '' },
        { name: "Vibrant Goa Foundation", role: "Sponsor", img: "/vibrantgoa.png", linkedin: '', whatsapp: '' },
    ]
}

function Team() {
    return (
        <div className="container mx-auto mt-20 px-1 py-10">
            <h1 className="text-4xl font-bold text-center text-white pb-4 mb-4 mx-5 md:mx-32 border-b-2 border-blue-500">Meet The Organisers</h1>
            <Section title="Sponsors & Mentors" members={teamData.sponsors} />
            <Section title="Faculty Coordinators" members={teamData.faculty} />
            {/* <Section title="Student Coordinators" members={teamData.students} /> */}
            <Section title="Council" members={teamData.council} />
            <Section title="Developers" members={teamData.developers} />
        </div>
    );
}

function Section({ title, members }) {
    return (
        <div className="mb-10 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-white font-semibold mb-6">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full px-14 md:px-20 gap-8">
                {members.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </div>
    )
}


export default Team
