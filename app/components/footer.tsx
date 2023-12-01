import { IconList } from "../constants/Icons.tsx";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="styleSection mx-auto flex flex-col items-center">
      <div className="flex items-center gap-3">
        {IconList.map((icon) => (
          <Link key={icon.id} href={icon.url}>
            <div className="w-[32px] h-[32px]">{icon.svg}</div>
            <span className="hidden">{icon.title}</span>
          </Link>
        ))}
      </div>
      <p>Developed by coihsan</p>
    </footer>
  );
}
