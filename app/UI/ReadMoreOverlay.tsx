import { Link } from "next/link";
export default function ReadMoreOverlay() {
  return (
    <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-b from-[#0b0b0b] to-transparent">
      <Link
        className="px-4 py-2 rounded-full bg-[#f0f0f0] text-[#121212]"
        src={"/projects"}
      >
        Index
      </Link>
    </div>
  );
}
