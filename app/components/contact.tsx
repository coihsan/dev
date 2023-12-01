import CalltoAction from "../UI/CalltoAction";
import CopyButton from "../UI/CopyButton";

export default function Contact() {
  return (
    <section className="relative bg-[url('/circlelight.svg')] bg-contain max-[600px]:bg-cover bg-no-repeat bg-top w-[100vw]  max-[600px]:py-[4rem] py-[7rem]">
      <div className="max-w-[667px] mx-auto flex flex-col items-center gap-8 max-[600px]:px-[1rem] pt-[4rem]">
        <h1 className="text-center text-[2.3rem] max-[600px]:text-[1.5rem] leading-tight font-bold">
          If my profile aligns with your organizational objectives, I am excited
          about the opportunity to join your team and make a positive impact.
        </h1>
        <div className="flex gap-3 max-[600px]:mx-auto">
          <CalltoAction />
          <CopyButton
            className="pl-[25px] w-[100%]"
            textButton="E-Mail"
            textCopy="co.ihsan@gmail.com"
          />
        </div>
      </div>
    </section>
  );
}
