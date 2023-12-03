import Image from "next/image";
import { ProjectList } from "../constants/indexProjects";
import ReadMoreOverlay from "../UI/ReadMoreOverlay";
export default function Projects() {
  return (
    <section className="relative  w-full">
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

          <div className="pl-[3.7rem] max-[600px]:pl-[2rem] w-full">
            <div className="pt-[2rem] grid grid-cols-2 gap-3 max-[600px]:grid-cols-1 w-full">
              {ProjectList.map((ProjectList) => (
                <div
                  key={ProjectList.id}
                  className="boxWrapper rounded-[20px] p-px w-full"
                >
                  <div className="rounded-[20px] group p-4 flex flex-col items-start gap-3 boxFill bg-[#121212] w-full overflow-hidden">
                    <div className="group overflow-hidden rounded-[20px]">
                      <Image
                        className="rounded-[20px] max-w-full object-contain h-full group-hover:scale-[1.1] transition-transform ease-in-out duration-300"
                        src={ProjectList.imageLink}
                        width={500}
                        height={200}
                        alt="image"
                      />
                    </div>
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
                      <div className="flex items-center justify-start gap-2 w-full">
                        <a
                          className="gap-2 flex px-4 py-1 rounded-full hover:bg-[#474747] bg-[#262626] transition-colors ease-in-out duration-500"
                          href={ProjectList.urlPreview}
                        >
                          <span className="">Live Preview</span>
                          <Image
                            src={"/arrow-right.svg"}
                            width={18}
                            height={18}
                            alt="icon"
                          />
                        </a>
                        <a
                          href={ProjectList.urlDownload}
                          className="gap-2 px-4 py-1 w-max flex items-center rounded-full hover:bg-[#474747] bg-[#262626] transition-colors ease-in-out duration-500"
                        >
                          <span className="text-[14px]">ZIP</span>
                          <Image
                            className=""
                            src={"/download.svg"}
                            width={12}
                            height={12}
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
      <ReadMoreOverlay />
    </section>
  );
}
