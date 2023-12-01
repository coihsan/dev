import Image from "next/image";
import { ProjectList } from "../constants/indexProjects";
export default function Projects() {
  return (
    <section className="relative bg-[url('/shades.svg')] bg-[center_top_-4rem] bg-contain bg-no-repeat w-full">
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

          <div className="pl-[3.7rem] max-[600px]:pl-[3.1rem] w-full">
            <div className="pt-[2rem] grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 w-full">
              {ProjectList.map((ProjectList) => (
                <div
                  key={ProjectList.id}
                  className="boxWrapper rounded-[20px] p-px w-full"
                >
                  <div className="rounded-[20px] group p-4 flex flex-col items-start gap-3 boxFill bg-[#121212] w-full overflow-hidden">
                    <img
                      className="rounded-[20px] max-w-full object-contain h-full"
                      src={ProjectList.imageLink}
                      alt="image"
                    />
                    <div className="flex flex-col gap-3">
                      <h2 className="text-[1rem] font-bold">
                        {ProjectList.nameOfProjects}
                      </h2>
                      <p className="text-[14px] flex items-center gap-2">
                        <Image
                          src={"/developer_guide.svg"}
                          width={18}
                          height={18}
                          alt="developer guide"
                        />
                        <span>{ProjectList.codeProject}</span>
                      </p>
                      <div className="flex items-center gap-3">
                        <a
                          className="gap-2 flex px-4 py-1 rounded-full hover:bg-[#474747] bg-[#262626] transition-color ease-in-out duration-500"
                          href="#"
                        >
                          <span className="text-[14px] ">Live Preview</span>
                          <Image
                            src={"/arrow-right.svg"}
                            width={18}
                            height={18}
                            alt="icon"
                          />
                        </a>
                        <a
                          href="#"
                          className="gap-2 px-4 py-1 flex items-center rounded-full hover:bg-[#474747] bg-[#262626] transition-color ease-in-out duration-500"
                        >
                          <span className="text-[14px]">Download ZIP</span>
                          <Image
                            className=""
                            src={"/download.svg"}
                            width={18}
                            height={18}
                            alt="github"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
}
