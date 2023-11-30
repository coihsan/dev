import Image from "next/image";
import { skillList } from "../constants/data";
export default function Experties() {
  return (
    <section className="styleSection">
      <div className="flex flex-col relative">
        <div className="flex items-center sideLine ">
          <Image
            className="align-baseline"
            src={"/terminal.svg"}
            width={40}
            height={40}
            alt="icon terminal"
          />
          <h3 className="headingStyle align-baseline pl-[1rem]">Experties</h3>
        </div>

        <div className="pl-[3.7rem]">
          <span className="text-[#E3E3E3] max-w-3xl">
            I can handle jobs like a Digital Marketing, Build a Web, and Graphic
            Design in the marketing department with a team or individually.
          </span>
          <div>
            <h1 className="font-medium text-[2rem]">Tech Stack</h1>
            <div className="grid grid-cols-5 gap-[10px]">
              {skillList.map((item) => (
                <div key={item.id} className="flex items-center gap-3 ">
                  <Image src={item.src} width={40} height={40} alt={item.alt} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* end content */}
        </div>
      </div>
    </section>
  );
}
