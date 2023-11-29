import Image from "next/image";

export default function Hero() {
  const times = new Date().getHours();
  var greeting;

  if (times > 3 && times <= 11) {
    greeting = "good morning";
  } else if (times > 12 && times < 17) {
    greeting = "good afternoon";
  } else {
    greeting = "good evening";
  }
  return (
    <section className="styleSection justify-evenly max-[600px]:flex-col ">
      <div className="boxWrapper">
        <Image
          className="rounded-lg"
          src={"/avatar.jpeg"}
          width={300}
          height={300}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3>{greeting}</h3>
        <h2 className="text-7xl font-bold">˗ˏˋ Ihsan ˎˊ</h2>
        <div>
          <div className="flex items-center bg-[#141414]">
            <span>Digital Marketing</span>
          </div>
          <div className="flex items-center bg-[#141414]">
            <span>Frontend Dev</span>
          </div>
        </div>
      </div>
    </section>
  );
}
