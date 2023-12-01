import Image from "next/image";
import { ResumeData } from "../constants/data";
export default function Resume() {
  return (
    <section className="relative bg-[url('/shades.svg')] bg-[center_top_-4rem] bg-contain bg-no-repeat w-full max-[600px]:py-[4rem] py-[7rem]">
      <div className="styleSection ">
        <div className="flex flex-col relative">
          <div className="flex items-center sideLine ">
            <Image
              className="align-baseline max-[600px]:w-[30px]"
              src={"/codehistory.svg"}
              width={40}
              height={40}
              alt="icon terminal"
            />
            <h3 className="headingStyle align-baseline pl-[1rem]">
              My Journey
            </h3>

            {/* start content */}
            <div>
              {ResumeData.map((list) => (
                <div>
                  <span>{list.year}</span>
                  <h2>{list.company}</h2>
                  <p>{list.position}</p>
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
