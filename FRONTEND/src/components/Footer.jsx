import React from 'react';

function Footer() {
    return (
        <footer className="absolute left-0 w-full bg-black z-40 text-white py-10 px-5 sm:px-20">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/gec.png" alt="College Logo" className="w-32 h-32 object-contain mb-4" />
                        <h2 className="text-2xl font-bold">Goa College of Engineering</h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                        <p>Email: <a href="mailto:ecellofgec@gmail.com" className="text-blue-500 hover:underline">ecellofgec@gmail.com</a></p>
                        <p>Whatsapp: <a href="https://wa.me/7769879833" className="text-blue-500 hover:underline">Manoj Paschapur</a></p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://www.instagram.com/ecell_of_gec/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noreferrer">
                                <img src="/instagram.png" alt="Instagram" className="w-8 h-8" />
                            </a>
                            <a href="https://wa.me/7264833272" target="_blank" rel="noreferrer">
                                <img src="/whatsapp.png" alt="whatsapp" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Our Sponsors</h3>
                    <div className="flex flex-wrap justify-center space-x-4">
                        <img src="/vibrantgoa.png" alt="Sponsor 1" className="w-24 h-24 object-contain mb-4" />
                        <img src="/gec.png" alt="Sponsor 2" className="w-24 h-24 object-contain mb-4" />
                        <img src="/sponsored company logo/armines.jpg" alt="Sponsor 3" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/blackbean.png" alt="Sponsor 4" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/bluefort.jpg" alt="Sponsor 5" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/eduadvise.png" alt="Sponsor 6" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/ELEVA.jpg" alt="Sponsor 7" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/engageHR.png" alt="Sponsor 8" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/EPkamatgroup.png" alt="Sponsor 9" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/finishingtouch.png" alt="Sponsor 10" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/gmizarhak.jpeg" alt="Sponsor 11" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/infinity3D.png" alt="Sponsor 12" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/patelcosmetics.jpg" alt="Sponsor 13" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/powertrac.png" alt="Sponsor 14" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/SpatialCraft.png" alt="Sponsor 15" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/TELHADO.jpg" alt="Sponsor 16" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/upgrade.jpg" alt="Sponsor 17" className="w-24 h-24 bg-white object-contain mb-4" />
                        <img src="/sponsored company logo/veezomotors.png" alt="Sponsor 18" className="w-24 h-24 bg-white object-contain mb-4" />
                    </div>
                </div>
                <div className="w-full h-64">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.1493359515825!2d73.97759237458774!3d15.422489256427948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba554c97cb79%3A0xb258ca176c4668ac!2sGoa%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1727856883159!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="College Location"
                    ></iframe>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center">
                <p>&copy; 2024 ECELL. All rights reserved.</p>
                <p className="text-sm mt-1">
                    Designed by <a href="https://www.linkedin.com/in/nagesh-merva-8b2b57289" className="text-blue-500 hover:underline">Nagesh Merva</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
