"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Cookies = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  // useEffect(() => {
  //   const isBannerClosed = localStorage.getItem("cookieBannerClosed");
  //   if (isBannerClosed) {
  //     setIsClosed(true);
  //   }
  // }, []);

  // const handleClose = () => {
  //   setIsClosed(true);
  //   localStorage.setItem("cookieBannerClosed", "true");
  // };

  // if (isClosed) {
  //   return null;
  // }

  return (
    <div className="z-50 mx-auto fixed bottom-5 left-5 max-[600px]:left-0 max-[600px]:bottom-0 flex justify-center  w-[30%] max-[600px]:w-full backdrop-blur-lg text-neutral-50 border border-neutral-500 rounded-lg">
      <div className="grid  items-center justify-between gap-5 max-[600px]:flex-col p-5">
        <div className="flex items-center gap-2">
          <p className="max-[600px]:text-[14px] max-[600px]:text-center flex max-[600px]:flex-col ">
            <span className="max-[600px]:text-[4rem]">🍪 </span> This page use
            cookies to provide you with a better browsing experience and to
            analyze our traffic.
          </p>
        </div>
        <button className="px-2 py-1 rounded-md bg-neutral-200 max-[600px]:text-[14px] text-neutral-950 font-medium">
          Okay!
        </button>
      </div>
    </div>
  );
};

export default Cookies;
