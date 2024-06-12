import React from 'react'
import ContactImg from '../assets/contact.png'
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import {motion} from 'framer-motion'
const ContactSection = () => {
    return (
        <section id='contact'>
            <div className="main-heading text-center mt-20 ">Contact</div>
            <div className="flex justify-between items-center">
                <div className="left w-1/2 flex items-center flex-col">
                    <img src={ContactImg} alt="" width="50%" />
                    <div className="mobile-number flex justify-center items-center flex-col gap-4">
                        <motion.div whileHover={{
                            scale: 1.1,
                            textShadow: "0 0 15px #bcd90c",
                            boxShadow: "0 0 15px #bcd90c",
                        }} className="number-one flex gap-2 items-center hover:border border-[#bcd90c] p-3 cursor-pointer">
                            <IoCall color='#bcd90c' /> +91 88492 07626
                        </motion.div>
                        <motion.div whileHover={{
                            scale: 1.1,
                            textShadow: "0 0 15px #bcd90c",
                            boxShadow: "0 0 15px #bcd90c",
                        }} className="number-two flex gap-2 items-center hover:border border-[#bcd90c] p-3 cursor-pointer">
                            <IoCall color='#bcd90c' /> +91 95589 92374
                        </motion.div>
                        <motion.div whileHover={{
                            scale: 1.1,
                            textShadow: "0 0 15px #bcd90c",
                            boxShadow: "0 0 15px #bcd90c",
                        }} className="whatsapp flex gap-2 items-center hover:border border-[#bcd90c] p-3 cursor-pointer">
                            <IoLogoWhatsapp color='#bcd90c' /> Connect us through whatsapp
                        </motion.div>
                    </div>

                </div>
                <div className="right contact_background py-4 px-6 w-[40%]">
                    <form className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Mobile number</label>
                            <input
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Message (optional)</label>
                            <textarea
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                                rows={2}
                            />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
