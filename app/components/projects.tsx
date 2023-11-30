import Image from "next/image";
import { ProjectList } from "../constants/indexProjects";
export default function Projects() {
  return (
    <section className="relative bg-[url('/shades.svg')] bg-contain bg-no-repeat bg-center w-full">
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
            <div className="pt-[2rem] grid grid-cols-2 gap-[10px]">
              {ProjectList.map((ProjectList) => (
                <div key={ProjectList.id} className="boxWrapper rounded-lg">
                  <div className="rounded-lg p-3 flex items-start gap-3 bg-[#121212]">
                    <Image
                      className="rounded-lg"
                      src={ProjectList.imageLink}
                      height={250}
                      width={250}
                      alt="image"
                    />
                    <div>
                      <h2>{ProjectList.nameOfProjects}</h2>
                      <span>{ProjectList.codeProject}</span>
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
