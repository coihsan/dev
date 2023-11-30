import Image from "next/image";

export default function Experties() {
  return (
    <section className="styleSection">
      <div className="flex items-start">
        <Image
          src={"/terminal.svg"}
          width={40}
          height={40}
          alt="icon terminal"
        />
        <div className="flex flex-col pl-[1rem]">
          <h1 className="headingStyle">Experties</h1>
          <p className="textGray">
            I can handle jobs like a Digital Marketing, Build a Web, and Graphic
            Design in the marketing department with a team or individually.
          </p>
        </div>
      </div>
    </section>
  );
}
