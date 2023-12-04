"use client";
import React, { useState, useEffect } from "react";

export default function Cookies() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClose, setIsClose] = useState(false);

  const handleClose = () => {
    setIsClose(true);
  };
  return (
    <div className={"z-50 p-5 fixed bottom-0 mx-auto w-[80%] max-h-[200px] max-[600px]:w-full bg-[#09090b] border rounded-lg ${isClose ? translate-y} translate-0 "}>
      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          {/* <svg
          className="fill-white"
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="55"
          viewBox="0 0 24 24"
        >
          <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.938.005-.034.016-.134.017-.168a.998.998 0 0 0-1.254-1.006A3.002 3.002 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM8.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-2 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm3 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.5-6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
        </svg> */}
          <p className="max-[600px]:text-[12px]">
            We use cookies to provide you with a better browsing experience and
            to analyze our traffic.
          </p>
        </div>
        <button
          onClick={() => handleClose}
          className={
            "px-2 py-1 rounded-md bg-white text-neutral-950 max-[600px]:text-[12px] font-medium"
          }
        >
          Close
        </button>
      </div>
    </div>
  );
}
