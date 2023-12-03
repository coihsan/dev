"use client";

import Image from "next/image";
import { position } from "../constants/data";
import CalltoAction from "../UI/CalltoAction";
import CopyButton from "../UI/CopyButton";
import { motion } from "framer-motion";
// import { container, item } from "../constants/animate";
const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export default function Hero() {
  const times = new Date().getHours();
  var greeting;

  if (!(times > 3 && times < 12)) {
    greeting = "Good Morning";
  } else if (!(times >= 12 && times < 17)) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <section className="relative  w-full h-[100%]">
      <div className="styleSection max-[600px]:py-[4rem] py-[7rem] flex items-center justify-start max-[600px]:flex-col max-[600px]:justify-center max-[600px]:items-center">
        <motion.div
          className="rounded-[54px] relative"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <Image
            className="rounded-[54px] max-[600px]:w-[200px] backdrop-grayscale"
            src={"/avatar.jpeg"}
            width={350}
            height={350}
            alt="avatar"
          />
        </motion.div>
        <div className="pl-[3rem] flex flex-col gap-3 max-[600px]:pl-[0rem] ">
          <motion.span
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 2 }}
            className="max-[600px]:mx-auto w-max bg-neutral-800 rounded-full px-4 py-1 font-medium"
          >
            {greeting} 👋🏻
          </motion.span>
          <div>
            <motion.h2
              className="text-7xl max-[600px]:text-6xl py-[2rem] font-bold max-[600px]:text-center"
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4, duration: 2 }}
            >
              ˗ˏˋ Ihsan ˎˊ
            </motion.h2>
          </div>
          <div className="flex items-center gap-3 max-[600px]:mx-auto">
            {position.map((index) => (
              <motion.div
                variants={item}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.6 }}
                key={index.id}
                className="flex items-center gap-2 font-medium px-3 py-1 bg-[#000] rounded-full"
              >
                <Image src={index.svg} width={30} height={30} alt="icon" />
                <h3>{index.title}</h3>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex gap-3 items-center max-[600px]:mx-auto max-[390px]:flex-col"
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <p>Credentials :</p>
            <div className="flex gap-3 items-center">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/skillshop.svg"}
                  width={40}
                  height={40}
                  alt="skillshop"
                />
                <motion.a
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                  className="hover:underline"
                  target="_blank"
                  href="https://skillshop.exceedlms.com/profiles/038b28dd54cb4f11bd4668684c05e95f"
                >
                  Skillshop
                </motion.a>
              </div>
              {"/"}
              <div>
                <motion.a
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.9 }}
                  className="hover:underline"
                  target="_blank"
                  href="https://scl.io/49LUWUx"
                >
                  Accredible
                </motion.a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1 }}
            className="flex gap-3 max-[600px]:mx-auto pt-[1rem]"
          >
            <CalltoAction />
            <CopyButton
              className="pl-[25px] w-[100%]"
              textButton="E-Mail"
              textCopy="co.ihsan@gmail.com"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
