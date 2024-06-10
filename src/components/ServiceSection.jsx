import React from "react";
import Service1 from "../assets/service 1.png";
import Service2 from "../assets/service 2.png";
import Service3 from "../assets/service 3.png";
import { motion } from "framer-motion";

const ServiceSection = () => {
  return (
    <div>
      <div className="main-heading text-center">Our Services </div>

      <div className="flex gap-5 justify-around lg:flex-nowrap flex-wrap px-4">
        <motion.div
          whileHover={{
            scale: 1.01,
            textShadow: "0 0 15px #fff",
            boxShadow: "0 0 15px #fff",
          }}
          className="p-4 flex flex-col items-center border rounded-3xl"
        >
          <img src={Service1} alt="" className="" />
          Got a gadget glitch? From shattered screens to faulty wiring,we fix it
          all. Fast, affordable, and reliable—bringing your devices back to life
          in no time!
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.01,
            textShadow: "0 0 15px #fff",
            boxShadow: "0 0 15px #fff",
          }}
          className="p-4 flex flex-col items-center border rounded-3xl"
        >
          <img src={Service2} alt="" />
          Trust our experts! We diagnose and fix any electronic issue swiftly
          and efficiently. From cracked screens to faulty wiring, we bring your
          device back to perfect condition in no time!
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.01,
            textShadow: "0 0 15px #fff",
            boxShadow: "0 0 15px #fff",
          }}
          className="p-4 flex flex-col items-center border rounded-3xl"
        >
          <img src={Service3} alt="" />
          Your device deserves the best care! Our expert repairs will have your
          gadgets feeling brand new and loved again. Fast, reliable, and done
          right!
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;
