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
          <div className="pt-[2rem]">
            <h1 className="font-medium text-[1.5rem] pb-[1rem]">Tech Stack</h1>
            <div className="grid grid-cols-5 gap-[10px] max-[600px]:grid-cols-2 w-full">
              {skillList.map((item) => (
                <div className="boxWrapper p-[1px] min-h-[70px] rounded-lg">
                  <div
                    key={item.id}
                    className="flex items-center justify-start gap-2 p-4 min-h-[70px] max-[600px]:flex-col rounded-lg bg-[#141414]"
                  >
                    <Image
                      className="max-w-[40px] max-[600px]:max-w-[25px] max-[600px]:max-h-[25px] max-h-[40px]"
                      src={item.src}
                      width={40}
                      height={40}
                      alt={item.alt}
                    />
                    <span className="leading-none">{item.title}</span>
                  </div>
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
