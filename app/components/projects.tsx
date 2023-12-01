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

          <div className="pl-[3.7rem] max-[600px]:pl-[3.1rem]">
            <div className="pt-[2rem] grid grid-cols-2 gap-[10px] max-[600px]:grid-cols-1">
              {ProjectList.map((ProjectList) => (
                <div
                  key={ProjectList.id}
                  className="boxWrapper rounded-[20px] p-[1px]"
                >
                  <div className="rounded-[20px] p-3 flex items-start gap-3 bg-[#121212] max-[600px]:flex-col w-full overflow-hidden">
                    <img
                      className="rounded-[20px] max-w-[250px] max-[600px]:w-[full] object-contain h-full"
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
                          className="text-[14px] relative flex after:absolute after:content-[url('/arrow-right.svg')] after:right-[10px] pl-3 pr-8 py-1 rounded-full hover:bg-[#474747] bg-[#262626] transition-color ease-in-out duration-500"
                          href="#"
                        >
                          Live Preview
                        </a>
                        <a href="#">
                          <Image
                            src={"/download.svg"}
                            width={22}
                            height={22}
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
