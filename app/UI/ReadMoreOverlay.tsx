import Link from "next/link";
export default function ReadMoreOverlay() {
  return (
    <div className="flex justify-center items-end mx-auto absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-[#0b0b0b] to-transparent">
      <div>
        <Link
          className="px-4 py-2 rounded-full bg-[#f0f0f0] text-[#121212] w-max"
          href={"/projects"}
        >
          Index
        </Link>
      </div>
    </div>
  );
}
