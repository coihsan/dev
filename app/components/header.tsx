export default function Header() {
  return (
    <header className="flex items-center justify-end max-w-screen-lg px-[2rem] pt-[2rem] w-full mx-auto ">
      <div className="bg-zinc-800 rounded-full w-max flex items-center gap-3 px-4 py-2">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
        </div>
        <h4 className="font-medium max-[600px]:text-[12px]">
          Available for Freelance Projects
        </h4>
      </div>
    </header>
  );
}
