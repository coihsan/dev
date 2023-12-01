import CalltoAction from "../UI/CalltoAction";
import CopyButton from "../UI/CopyButton";

export default function Contact() {
  return (
    <section className="">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 max-[600px]:px-[1rem]">
        <h1 className="text-center text-4xl max-[600px]:text-2xl font-bold">
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
