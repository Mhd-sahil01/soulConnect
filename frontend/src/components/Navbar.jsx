const Navbar = () => {
  return (
    <nav className="w-3/4 h-16 flex items-center justify-between px-8 mx-auto left-0 right-0 top-10 absolute z-20 rounded-3xl backdrop-blur-xl bg-[#1B444B]/70 border border-white/10 shadow-[0_0_20px_rgba(0,255,200,0.15)]">
      <h1 className="text-white text-xl tracking-wide font-semibold">
        <span className="">SoulConnect</span>
      </h1>

      <div className="flex items-center gap-4 ml-auto">
        <button className=" px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] ">
          Login
        </button>

        <button className=" px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96]">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
