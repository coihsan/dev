import Image from "next/image";
import { skillList, commonjob } from "../constants/data";
export default function Experties() {
  return (
    <section className="relative bg-[url('/grid.svg')] max-[600px]:bg-[center_top_2rem] max-[600px]:bg-[length:795px_400px] bg-contain bg-no-repeat bg-center w-full max-[600px]:py-[4rem]">
      <div className="styleSection ">
        <div className="flex flex-col relative">
          <div className="flex items-center sideLine ">
            <Image
              className="align-baseline max-[600px]:w-[30px]"
              src={"/terminal.svg"}
              width={40}
              height={40}
              alt="icon terminal"
            />
            <h3 className="headingStyle align-baseline pl-[1rem]">Experties</h3>
          </div>

          <div className="pl-[3.7rem] max-[600px]:pl-[2rem]">
            <span className="text-[#E3E3E3] max-w-3xl">
              I can handle jobs like a Digital Marketing, Build a Web, and
              Graphic Design in the marketing department with a team or
              individually.
            </span>
            <div className="pt-[2rem]">
              <h1 className="font-medium text-[1.5rem] pb-[1rem]">
                Tech Stack
              </h1>
              <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  max-[600px]:grid-cols-2 gap-[10px] w-full">
                {skillList.map((item) => (
                  <div
                    key={item.id}
                    className="boxWrapper p-px group rounded-[15px] transition-colors duration-500 ease-linear"
                  >
                    <div className="flex items-center boxFill justify-start gap-4 p-4 h-[81px] max-[600px]:flex-col rounded-[15px] bg-[#121212]">
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
            <div className="pt-[2rem]">
              <h1 className="font-medium text-[1.5rem] pb-[1rem]">
                Skills & Platform
              </h1>
              <div className="flex items-center flex-wrap gap-[10px] w-full">
                {commonjob.map((items) => (
                  <div
                    key={items.id}
                    className="boxWrapper group p-px rounded-full"
                  >
                    <div className="flex items-center boxFill justify-start gap-2 px-4 py-2 rounded-full bg-[#121212]">
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
