import React, { useState } from 'react'
import ContactImg from '../assets/contact.svg'
import { IoCall } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { motion } from 'framer-motion'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactSection = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
        'g-recaptcha-response': ''
    })
    const submitData = () => {
        grecaptcha.ready(function () {
            grecaptcha.execute('6Lc2pfcpAAAAANHxr3sjAXauuiAoojrVDbD4vJKW', { action: 'submit' }).
                then(function (token) {
                    //setData({ ...data, 'g-recaptcha-response': token })
                    console.log(data)
                    if (data.name == '') {
                        callError("Name feild cannot be empty")
                    }
                    else if (data.email == '') {
                        callError("Email feild cannot be empty")
                    }
                    else if (data.mobile == '') {
                        callError("Mobile number feild cannot be empty")
                        if (data.mobile.length > 12 || data.mobile.length < 10) {
                            callError("Minimum length of number must be between 10 to 12 digits")
                        }
                    }
                    fetchAPI(token);
                });
        });
    }
    const fetchAPI = async (token) => {
        var response = await fetch("https://include.ethiccraft.com/api/contactUs", {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: 'POST',
            body: JSON.stringify({ ...data, 'g-recaptcha-response': token })
        })
        var data1 = await response.json();
        console.log(data1)
    }
    const callError = (message) => {
        toast.error(message, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }
    return (
        <section id='contact'>
            <div className="main-heading text-center mt-20 ">Contact</div>
            <div className="flex justify-between items-center flex-wrap">
                <div className="left md:mt-0 mt-10 w-full md:w-1/2 flex items-center flex-col md:order-first order-last">
                    <img src={ContactImg} alt=""  className='w-full md:w-2/3 ps-10'/>
                    <div className="mobile-number flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap md:mt-0 -mt-10">
                        <motion.a
                            href="tel:+918849207626"
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0 0 15px #bcd90c",
                                boxShadow: "0 0 15px #bcd90c",
                            }} className="number-one flex gap-2 items-center hover:border border-[#bcd90c] p-3 cursor-pointer">
                            <IoCall color='#bcd90c' />+91 88492 07626
                        </motion.a>
                        <motion.a
                            href="tel:+919558992374"
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0 0 15px #bcd90c",
                                boxShadow: "0 0 15px #bcd90c",
                            }} className="number-two flex gap-2 items-center hover:border border-[#bcd90c] p-3 cursor-pointer">
                            <IoCall color='#bcd90c' /> +91 95589 92374
                        </motion.a>
                        <motion.a
                            href="tel:+919016704057"
                            whileHover={{
                                scale: 1.1,
                                textShadow: "0 0 15px #bcd90c",
                                boxShadow: "0 0 15px #bcd90c",
                            }} className="number-two flex gap-2 items-center hover:border border-[#bcd90c] p-3 cursor-pointer">
                            <IoCall color='#bcd90c' /> +91 90167 04057
                        </motion.a>
                        <motion.a 
                        href="https://wa.me/+91884920766?text=Hello,\nI%20have%20a%20service%20request.%20(Our%20person%20will%20call%20you)"
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0 0 15px #bcd90c",
                            boxShadow: "0 0 15px #bcd90c",
                        }} className="whatsapp flex gap-2 items-center hover:border border-[#bcd90c] p-2 cursor-pointer">
                            <IoLogoWhatsapp color='#bcd90c' /> Connect us through whatsapp
                        </motion.a>
                    </div>


                </div>
                <div className="right contact_background py-4 px-6 w-full lg:w-[40%]">
                    <div className="w-full flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Name</label>
                            <input
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                                value={data.name}
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Email</label>
                            <input
                                type="email"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Mobile number</label>
                            <input
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="mobile"
                                value={data.mobile}
                                onChange={(e) => setData({ ...data, mobile: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="">Message (optional)</label>
                            <textarea
                                type="text"
                                className="bg-white mb-3 rounded-md ps-5 text-black lg:px-3 py-2 text-blue font-bold"
                                name="name"
                                rows={2}
                                value={data.message}
                                onChange={(e) => setData({ ...data, message: e.target.value })}
                            />
                        </div>
                        <div className="flex">
                            <motion.input whileHover={{
                                scale: 1.01,
                                boxShadow: "0 0 10px #bcd90c",
                            }} type="button" value="Submit" onClick={submitData} className='bg-[#bcd90c] text-black font-bold px-4 py-2 rounded-lg cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default ContactSection
