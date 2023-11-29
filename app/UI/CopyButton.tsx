"use client";
import React, { useState } from "react";

const CopyButton = ({ textButton, textCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(textCopy).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    });
  };

  return (
    <button
      className="flex w-max shadow-md gap-2 items-center justify-center px-4 py-2 rounded-full  text-neutral-50 font-[500] bg-zinc-50 hover:bg-neutral-200 focus:outline-none"
      onClick={handleCopyClick}
      style={{ color: isCopied ? "#a3a3a3" : "#171717" }}
    >
      <svg
        className="fill-neutral-600"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
      </svg>
      <span>{isCopied ? "Copied" : textButton}</span>
    </button>
  );
};

export default CopyButton;