import Image from "next/image";
import { position } from "../constants/data";
export default function Hero() {
  const times = new Date().getHours();
  var greeting;

  if (times > 3 && times <= 11) {
    greeting = "Good Morning";
  } else if (times > 12 && times < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <section className="styleSection justify-evenly max-[600px]:flex-col max-[600px]:items-center">
      <div className="boxWrapper">
        <Image
          className="rounded-full max-[600px]:w-[200px]"
          src={"/avatar.jpeg"}
          width={300}
          height={300}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full px-4 py-1">
          {greeting} 👋🏻
        </h3>
        <h2 className="text-7xl max-[600px]:text-4xl font-bold ">
          ˗ˏˋ Ihsan ˎˊ
        </h2>
        {position.map((index) => (
          <div
            key={index.id}
            className="grid grid-cols-2 items-center gap-3 bg-[#141414] rounded-full px-4 py-2 justify-center "
          >
            <svg
              className="rotate-[45deg] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
            </svg>
            <span>{index.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
