export default function Header() {
  return (
    <header className="absolute flex items-center justify-center gap-3 max-w-screen-lg max-[600px]:px-[2rem] py-[2rem] w-full mx-auto left-0">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-neutral-50"></span>
      </div>
      <h4>Available for Freelance Projects</h4>
    </header>
  );
}
