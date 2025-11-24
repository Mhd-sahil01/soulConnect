import { useState } from "react";

const Navbar = () => {
  const [openExplore, setOpenExplore] = useState(false);

  return (
    <nav className="w-[90%] md:w-[85%] h-16 flex items-center justify-between p-6 md:px-8 mx-auto mt-4 left-0 right-0 top-0 fixed z-30  backdrop-blur-xl rounded-3xl bg-[#1B444B]/70">
      <h1 className="text-white text-xl tracking-wide font-semibold">
        <span className="">SoulConnect</span>
      </h1>

      <div className="flex items-center gap-4 ml-auto">
        <button className="px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] transition-all duration-300 hover:scale-105 hidden md:block"> Join </button>
        <button className="px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] transition-all duration-300 hover:scale-105 hidden md:block"> Create </button>
        <button className="px-5 py-2 text-white font-semibold rounded-full bg-[#027FAE] hover:bg-[#0393C9] transition-all duration-300 hover:scale-105 hidden md:block"> Sign In </button>
        <div className="relative block md:hidden">
          <button
            onClick={() => {
              setOpenExplore(!openExplore);
            }}
            className="px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] transition-all duration-300 hover:scale-105"
          >Explore </button>
          {openExplore && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1B444B] text-white rounded-xl shadow-lg border border-white/10 p-2">
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Join Room</button>
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Create Room</button>
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Sign In</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
