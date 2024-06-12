import React from "react";
import homeImg from "../assets/home.png";
import { motion } from "framer-motion";
const HomeSection = () => {
  return (
    <section id="home">
    <div className="flex-col flex md:flex-row items-center h-[90vh] justify-around pt-3">
      <div className="left flex flex-col items-center w-full md:max-w-[500px]">
        <div className="main-heading">Repair it</div>
        <div className="home-sub-heading my-4 text-center">
          Efficient and Affordable Electronic Repairs Delivered to Your Doorstep
          in Just<span className="text-[#ec0e4f]  text-2xl font-bold"> One Day! </span>
        </div>
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0 0 15px #fff",
          }}
          className="home-more-info-btn border border-[#fff] rounded-full px-4 py-3 cursor-pointer"
        >
          More Info
        </motion.div>
      </div>
      <motion.div
        className="right h-1/2 order-first md:order-last"
        animate={{ y: ["0%", "-10%", "0%"] }}
        transition={{
          y: { duration: 2, repeat: Infinity },
        }}
      >
        <img src={homeImg} alt="" className="h-full" />
      </motion.div>
    </div>
    </section>
  );
};

export default HomeSection;
