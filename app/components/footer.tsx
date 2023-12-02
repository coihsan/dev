import { IconList } from "../constants/Icons.tsx";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="styleSection mx-auto flex flex-col items-center">
      <div className="flex items-center gap-3">
        {IconList.map((icon) => (
          <Link className="relative" key={icon.id} href={icon.url}>
            <div className="group w-[32px] h-[32px]">{icon.svg}</div>
            <span className="hidden opacity-00 absolute top-0 bg-neutral-50 p-4 text-neutral-900 group-hover:block group-hover:opacity-1">
              {icon.title}
            </span>
          </Link>
        ))}
      </div>
      <p>
        Developed by <strong>coihsan</strong>
      </p>
    </footer>
  );
}
