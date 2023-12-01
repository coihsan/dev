import { IconList } from "../constants/Icons.tsx";
import Link from 'next/link'
import Image from 'next/image'
export default function Footer() {
  return (
    <footer className="styleSection">
      <div>
        {IconList.map((icon) =>(
          <link key={icon.id} href={icon.url}>
            <span className="">{icon.svg}</span>
            <span className="hidden">{icon.title}</span>
          </Link>
        ))}
      </div>
    </footer>
  );
}
