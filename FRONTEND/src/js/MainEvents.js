const mainEvents = [
    {
        imgUrl: "/pitchtank.png",
        name: "Pitcher's Arena",
        description: "Inspired by the popular show, Pitch Tank invites aspiring entrepreneurs to pitch their innovative ideas to a panel of judges. Teams will have to convince the panel why their product or service is a game-changer. Whether you're starting a tech company or launching a social initiative, this is your platform to shine.",
        rules: [
            "Each team must consist of 2-5 members.",
            "The pitch presentation must not exceed 10 minutes.",
            "Teams must submit their pitch decks 24 hours before the event.",
            "Judging criteria: Innovation, Feasibility, Market Potential."
        ],
        coordinators: [
            { name: "John Doe", contact: "+91 9876543210" },
            { name: "Jane Smith", contact: "+91 8765432109" }
        ],
        timing: "10:00 AM - 1:00 PM",
        location: "Auditorium Hall 1",
        prize: "₹50,000 for the winning team"
    },
    {
        imgUrl: "/brandbuilder.png",
        name: "Brand Builder Battle",
        description: "In this competition, each team will be allowed to spend Rs. 500 and create an innovative product or service. Teams will then pitch their product to a panel of judges. The competition will focus on three key criteria: profits, innovation, and scalability. The goal is to use the Rs. 500 smartly and develop something that not only generates profit but also demonstrates creative thinking and potential for growth.",
        rules: [
            "Teams must consist of 3-5 members.",
            "The product should be physically demonstrated during the pitch.",
            "All materials for the product should be bought within the Rs. 500 limit.",
            "Judging criteria: Innovation, Profit Generation, Scalability."
        ],
        coordinators: [
            { name: "Ahmed ", role: "Ecell Vice President", img: "/ahmed.jpg", linkedin: '', whatsapp: '7774881382' },
            { name: "Nagesh Merva ", role: "Technical Head", img: "/nagesh.jpg", linkedin: 'https://www.linkedin.com/in/nagesh-merva-8b2b57289', whatsapp: '7264833272' },
            { name: "Tasneem ", role: "Marketing Head", img: "/janeroe.jpg", linkedin: '', whatsapp: '9011783766' },
        ],
        timing: "2:00 PM - 5:00 PM",
        location: "Exhibition Hall B",
        prize: "₹25,000 for the winning team"
    },
    {
        imgUrl: "/casestudy.png",
        name: "Failure Forensics",
        description: "In this competition, teams will analyze a failed real-life business example provided by the organizers. Teams will present their findings and provide strategic solutions that could have turned the business around. The key is to think critically and offer practical insights.",
        rules: [
            "Teams can consist of 2-4 members.",
            "The case study analysis must be submitted in PDF format 12 hours before the presentation.",
            "Each team will have 15 minutes for their presentation followed by a Q&A.",
            "Judging criteria: Critical Thinking, Feasibility, Presentation."
        ],
        coordinators: [
            { name: "Alok Sharma", whatsapp: "+91 8899001122" },
            { name: "Meera Gupta", whatsapp: "+91 7766554433" }
        ],
        timing: "11:00 AM - 1:30 PM",
        location: "Conference Room 2",
        prize: "₹30,000 for the winning team"
    },
    {
        imgUrl: "/adbattle.png",
        name: "Market Up",
        description: "Participants will create a 1.5-minute advertisement based on a given brand. The ad should creatively showcase the brand’s values, products, or services while engaging the target audience. Whether humorous or serious, the ad must convey the brand’s message effectively and within the time limit.",
        rules: [
            "Teams can consist of up to 3 members.",
            "The ad must not exceed 1.5 minutes in length.",
            "Judging criteria: Creativity, Brand Alignment, Audience Engagement."
        ],
        coordinators: [
            { name: "Aman Verma", whatsapp: "+91 9999887766" },
            { name: "Sonia Reddy", whatsapp: "+91 9876543211" }
        ],
        timing: "3:00 PM - 5:30 PM",
        location: "Auditorium Hall 2",
        prize: "₹20,000 for the winning team"
    },
    {
        imgUrl: "/talk.png",
        name: "Engineers to Entrepreneurs",
        description: "The talk on 'Engineers to Entrepreneurs' will focus on the transformative journey from technical expertise to entrepreneurial leadership. Hosted by a prominent speaker and entrepreneur from the Vibrant Goa Foundation, the event will highlight the mindset shifts, skills, and innovative thinking needed to transition from being an engineer to an entrepreneur.",
        rules: [
            "Real-life experiences from Goa's thriving entrepreneurial ecosystem.",
            "The importance of problem-solving, adaptability, and business acumen.",
            "Insights on leveraging an engineering background for tech-driven startups and sustainable innovation.",
            "Networking and mentorship opportunities within Goa's entrepreneurial landscape."
        ],
        coordinators: [
            { name: "Johan Fernandes ", role: "Startup Head", img: "/janeroe.jpg", linkedin: 'https://www.linkedin.com/in/johan-fernandes-2607b9270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', whatsapp: '9527722619' },
        ],
        timing: "3:00 PM - 5:30 PM",
        location: "Auditorium Hall 2",
    }
];

export default mainEvents;
