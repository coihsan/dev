"use client";
import CalltoAction from "../UI/CalltoAction";
import CopyButton from "../UI/CopyButton";
import Footer from "../components/footer";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <section className="relative  before:-z-10 px-[2rem] py-[7rem]">
      <motion.div
        className="max-w-[667px] mx-auto flex flex-col items-center gap-8 max-[1068px]:pt-[7rem] lg:pt-[15rem] max-[600px]:pt-[3rem]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-[2.2rem] max-[600px]:text-[1.3rem] leading-tight font-bold">
          In need of a designer/developer?
        </h1>
        <div className="flex items-center gap-2">
          <svg
            className="fill-[#f0f0f0]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M21 10a3.58 3.58 0 0 0-1.8-3 3.66 3.66 0 0 0-3.63-3.13 3.86 3.86 0 0 0-1 .13 3.7 3.7 0 0 0-5.11 0 3.86 3.86 0 0 0-1-.13A3.66 3.66 0 0 0 4.81 7 3.58 3.58 0 0 0 3 10a1 1 0 0 0-1 1 10 10 0 0 0 5 8.66V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1.34A10 10 0 0 0 22 11a1 1 0 0 0-1-1zM5 10a1.59 1.59 0 0 1 1.11-1.39l.83-.26-.16-.85a1.64 1.64 0 0 1 1.66-1.62 1.78 1.78 0 0 1 .83.2l.81.45.5-.77a1.71 1.71 0 0 1 2.84 0l.5.77.81-.45a1.78 1.78 0 0 1 .83-.2 1.65 1.65 0 0 1 1.67 1.6l-.16.85.82.28A1.59 1.59 0 0 1 19 10z"></path>
          </svg>
          <span className="font-semibold">1 Spot remaining</span>
        </div>
        <div className="flex gap-3 max-[600px]:mx-auto">
          <CalltoAction />
          <CopyButton
            className={"pl-[25px] w-[100%]"}
            textButton="E-Mail"
            textCopy="co.ihsan@gmail.com"
          />
        </div>
        <Footer />
      </motion.div>
    </section>
  );
}
