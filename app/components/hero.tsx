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
    <section className="styleSection flex items-center max-[600px]:flex-col">
      <div>
        <Image
          className=""
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
          <div className="flex items-center">
            <span>Digital Marketing</span>
          </div>
          <span> Frontend Dev</span>
        </div>
      </div>
    </section>
  );
}
