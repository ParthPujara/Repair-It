import React from 'react'
import Step1Img from '../assets/step1.png'
import Step2Img from '../assets/step2.png'
import Step3Img from '../assets/step3.png'
import { motion } from 'framer-motion'

const StepsSection = () => {
    return (
        <section id='steps-of-service' className="pt-24">
            <div className="main-heading text-center mb-12">Steps of Service</div>
            <ol className="relative border-s border-gray-200 max-w-[550px] md:mx-auto ms-20">
                <li className="mb-20 md:mb-40 ms-24 md:ms-36 flex flex-col justify-center">
                    <motion.span whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px #fff",
                    }} className="absolute flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full -start-16 md:-start-20 ring-8 ring-white overflow-hidden">
                        <img src={Step1Img} alt="" />
                    </motion.span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">Contact us</h3>
                    <p className="mb-4 text-base font-normal text-white ">Reach out to us via phone, email, or our website to schedule a pickup for your damaged device.</p>
                </li>
                <li className="mb-20 md:mb-40 ms-24 md:ms-36 flex flex-col justify-center">
                    <motion.span whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px #fff",
                    }} className="absolute flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full -start-16 md:-start-20 ring-8 ring-white overflow-hidden">
                        <img src={Step2Img} alt="" className='absolute top-4' />
                    </motion.span>
                    <h3 className="mb-1 text-lg font-semibold text-white">Free Diagnostic & Quote</h3>

                    <p className="text-base font-normal text-white">Our experts will assess your device and provide a detailed repair quote, ensuring transparency and affordability.</p>
                </li>
                <li className="ms-24 md:ms-36 flex flex-col justify-center">
                    <motion.span whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px #fff",
                    }} className="absolute flex items-center justify-center w-32 h-32 md:w-40 md:h-40 bg-blue-100 rounded-full -start-16 md:-start-20 ring-8 ring-white overflow-hidden">
                        <img src={Step3Img} alt="" />
                    </motion.span>
                    <h3 className="mb-1 text-lg font-semibold dark:text-white">Expert Repair & Delivery</h3>
                    <p className="text-base font-normal text-white">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </section>
    )
}

export default StepsSection
