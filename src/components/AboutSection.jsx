import React from "react";
import AboutImg from "../assets/about.png";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <div>
      <div className="main-heading text-center ">About</div>
      <div className="flex justify-around items-center">
        <motion.div
          className="left"
          animate={{ x: ["0%", "-10%", "0%"], y: ["0%", "-10%", "0%"] }}
          transition={{
            x: { duration: 2, repeat: Infinity, repeatDelay: 0.5 },
            y: { duration: 2, repeat: Infinity },
          }}
        >
          <img src={AboutImg} alt="" />
        </motion.div>
        <div className="right w-full md:max-w-[500px] text-lg">
          We offer lightning-fast, affordable electronic repairs with guaranteed <span className="text-[#ec0e4f]  text-xl font-bold">one-day delivery</span>. Trust our experts for seamless service and
          unbeatable convenience. Your satisfaction, our mission.
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
