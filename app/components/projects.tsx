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
              src={"/terminal.svg"}
              width={40}
              height={40}
              alt="icon terminal"
            />
            <h3 className="headingStyle align-baseline pl-[1rem]">Experties</h3>
          </div>

          <div className="pl-[3.7rem] max-[600px]:pl-[3.1rem]">
            <div className="pt-[2rem]">
              {ProjectList.map((ProjectList) => (
                <div>
                  <h2>{ProjectList.nameOfProjects}</h2>
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
