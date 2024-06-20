import React from 'react'

const FooterSection = () => {
    return (
        <div>
            <footer className="rounded-lg shadow m-4 bg-gray-800 mt-20">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center text-white">© 2024 Repair It. All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
                        <li>
                            <a href="#home" className="hover:text-[#ec0e4f] me-4 md:me-6">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-[#ec0e4f] me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#our-services" className="hover:text-[#ec0e4f] me-4 md:me-6">Services</a>
                        </li>
                        <li>
                            <a href="#steps-of-service" className="hover:text-[#ec0e4f] me-4 md:me-6">Steps of service</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default FooterSection
