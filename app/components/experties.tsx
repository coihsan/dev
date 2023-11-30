import Image from "next/image";
import { skillList, commonjob } from "../constants/data";
export default function Experties() {
  return (
    <section className="relative bg-[url('/grid.svg')] max-[600px]:bg-[center_top_2rem] max-[600px]:bg-[length:795px_400px] bg-contain bg-no-repeat bg-center w-full max-[600px]:py-[4rem] py-[7rem]">
      <div className="styleSection ">
        <div className="flex flex-col relative">
          <div className="flex items-center sideLine ">
            <Image
              className="align-baseline max-[600px]:w-[30px]"
              src={"/developertv.svg"}
              width={40}
              height={40}
              alt="icon terminal"
            />
            <h3 className="headingStyle align-baseline pl-[1rem]">
              Code for Fun
            </h3>
          </div>

          <div className="pl-[3.7rem] max-[600px]:pl-[3.1rem]">
            <span className="text-[#E3E3E3] max-w-3xl">
              I can handle jobs like a Digital Marketing, Build a Web, and
              Graphic Design in the marketing department with a team or
              individually.
            </span>
            <div className="pt-[2rem]">
              <h1 className="font-medium text-[1.5rem] pb-[1rem]">
                Tech Stack
              </h1>
              <div className="grid grid-cols-5 gap-[10px] max-[600px]:grid-cols-2 w-full">
                {skillList.map((item) => (
                  <div className="boxWrapper p-[1px] h-[70px] rounded-lg">
                    <div
                      key={item.id}
                      className="flex items-center justify-start gap-2 p-4 h-[70px] max-[600px]:flex-col rounded-lg bg-[#141414]"
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
            {/* end */}
            <div className="relative w-full h-[2px] bg-gradient-to-l from-transparent via-neutral-700 to-transparent my-[3rem] before:absolute before:w-full before:h-[2px] before:bg-gradient-to-l before:from-transparent before:via-neutral-600 before:to-transparent before:z-[-2] before:blur-sm"></div>
            <div className="">
              <h1 className="font-medium text-[1.5rem] pb-[1rem]">
                Skills & Platform
              </h1>
              <div className="flex items-center flex-wrap gap-[10px] w-full">
                {commonjob.map((items) => (
                  <div className="boxWrapper p-[1px] rounded-full">
                    <div
                      key={items.id}
                      className="flex items-center justify-start gap-2 px-4 py-2 rounded-full bg-[#141414]"
                    >
                      <span className="leading-none">{items.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
}
