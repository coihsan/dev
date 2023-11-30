import Image from "next/image";

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
          <p>
            nulla cursus magna, nec finibus augue felis nec lectus. Vivamus
            fringilla non libero at egestas. Proin et dui et erat rhoncus
            lacinia. Donec feugiat arcu est, eu rhoncus eros pretium ut. Duis
            aliquam vehicula massa eu pulvinar. Aenean faucibus mauris a urna
            posuere mollis. Aenean non laoreet diam. Praesent quis sollicitudin
            leo, vitae lobortis metus. In quis imperdiet orci, et eleifend
            justo. Nunc vel consectetur dolor. Pellentesque vel sem nisl.
            Suspendisse varius vehicula arcu ut ultrices. Integer nec nisl
            venenatis, consequat diam eu, hendrerit purus. Donec elementum velit
            non urna consectetur, id fermentum justo ultricies. Donec volutpat
            sed justo eget luctus. Morbi tincidunt at lectus eu tincidunt. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
            semper metus id lobortis. Pellentesque sed urna ut massa feugiat
            viverra. Pellentesque vulputate quam non enim rutrum sodales sit
            amet at orci. Nunc blandit neque sit amet velit laoreet feugiat.
            Suspendisse metus nunc, malesuada non sapien et, aliquet mollis
            odio. Sed sem neque, fringilla eu velit sed, egestas ullamcorper
            purus. Mauris vel cursus lectus. Nunc vitae diam ac erat luctus
            rhoncus eget et libero. Donec ac vestibulum sem. Cras nunc ipsum,
            elementum viverra efficitur at, convallis non mauris. Fusce
            imperdiet mauris nisl, vel bibendum felis ultrices in.
          </p>
        </div>
      </div>
    </section>
  );
}
