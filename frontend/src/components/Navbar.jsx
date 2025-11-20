const Navbar = () => {
  return (
    <nav className="w-3/4 h-16 flex items-center justify-between px-8 mx-auto left-0 right-0 top-10 absolute z-30 rounded-3xl backdrop-blur-xl bg-[#1B444B] border cursor-none">
      <h1 className="text-white text-xl tracking-wide font-semibold">
        <span className="">SoulConnect</span>
      </h1>

      <div className="flex items-center gap-4 ml-auto">
        <button className=" px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] cursor-pointer">
          Login
        </button>

        <button className=" px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] cursor-pointer">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
