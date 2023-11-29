import Image from "next/image";
import { position } from "../constants/data";
import CalltoAction from "../UI/CalltoAction";
import CopyButton from "../UI/CopyButton";
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
    <section className="relative heroSection w-full h-[100vh]">
      <div className="styleSection w-full h-full justify-evenly max-[600px]:flex-col max-[600px]:items-center">
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
          <div className="max-[600px]:mx-auto w-max bg-gradient-to-r from-[#696969] to-[#525252] rounded-full p-px">
            <h3 className="w-max bg-gradient-to-r from-neutral-700 to-zinc-900 rounded-full px-4 py-1">
              {greeting} 👋🏻
            </h3>
          </div>
          <h2 className="text-7xl max-[600px]:text-6xl font-bold max-[600px]:text-center">
            ˗ˏˋ Ihsan ˎˊ
          </h2>
          <div className="grid grid-cols-2 gap-3 max-[600px]:mx-auto w-full">
            {position.map((index) => (
              <div
                key={index.id}
                className="w-max flex items-center gap-2 bg-[#141414] rounded-full px-4 py-2 "
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
                <h3>{index.title}</h3>
              </div>
            ))}
          </div>
          <div className="flex gap-3 items-center max-[600px]:mx-auto">
            <p>Credentials :</p>
            <div className="flex gap-3 items-center">
              <div className="flex gap-3 items-center">
                <Image
                  src={"/skillshop.svg"}
                  width={40}
                  height={40}
                  alt="skillshop"
                />
                <a href="#">Skillshop</a>
              </div>
              {"/"}
              <div>
                <a href="">Accredible</a>
              </div>
            </div>
          </div>
          <div className="flex gap-3 max-[600px]:mx-auto">
            <CalltoAction />
            <CopyButton
              className="pl-[25px] w-[100%]"
              textButton="E-Mail"
              textCopy="co.ihsan@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
