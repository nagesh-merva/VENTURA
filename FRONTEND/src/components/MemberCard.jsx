function TeamCard({ member }) {
    const whatsappLink = member.whatsapp ? `https://wa.me/${member.whatsapp}` : null;

    return (
        <div className="bg-white border-glow p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
            <img src={member.img} alt={member.name} className="w-44 h-44 rounded-full border-4 border-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
            <p className="text-center text-gray-600">{member.role}</p>
            <div className='flex space-x-5'>
                {whatsappLink && (
                    <a href={whatsappLink} className="text-blue-500 hover:underline pt-2">
                        <img src="/whatsapp.png" alt="whatsapp" className="w-8 h-8 " />
                    </a>
                )}
                {member.linkedin && (
                    <a href={member.linkedin} className="text-blue-500 hover:underline pt-2">
                        <img src="/linkedin.png" alt="linkedin" className="w-8 h-8 " />
                    </a>
                )}
            </div>
        </div>
    );
}

export default TeamCard
