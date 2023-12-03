import CalltoAction from "../UI/CalltoAction";
import CopyButton from "../UI/CopyButton";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <section className="relative  before:-z-10 px-[2rem] py-[7rem]">
      <div className="max-w-[667px] mx-auto flex flex-col items-center gap-8  pt-[13rem] max-[600px]:pt-[1rem]">
        <h1 className="text-center text-[2.2rem] max-[600px]:text-[1.3rem] leading-tight font-bold">
          If my profile aligns with your organizational objectives, I am excited
          about the opportunity to join your team and make a positive impact.
        </h1>
        <div className="flex gap-3 max-[600px]:mx-auto">
          <CalltoAction />
          <CopyButton
            className={"pl-[25px] w-[100%]"}
            textButton="E-Mail"
            textCopy="co.ihsan@gmail.com"
          />
        </div>
        <Footer />
      </div>
    </section>
  );
}
