import React from 'react'
import ContactImg from '../assets/contact.png'

const ContactSection = () => {
    return (
        <>
            <div className="main-heading text-center mt-20">Contact</div>
            <div className="flex justify-between items-center">
                <div className="left w-1/2 flex justify-center">
                    <img src={ContactImg} alt="" width="50%"/>
                </div>
                <div className="right contact_background py-4 px-6">
                    <form className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">User name</label>
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
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactSection
