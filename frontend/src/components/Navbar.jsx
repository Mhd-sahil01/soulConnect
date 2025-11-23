import { useState } from "react";

const Navbar = () => {
  const [openConnect, setOpenConnect] = useState(false);
  const [openAccess, setOpenAccess] = useState(false);

  return (
    <nav className="w-3/4 h-16 hidden md:flex items-center justify-between px-8 mx-auto left-0 right-0 top-10 absolute z-30 rounded-3xl backdrop-blur-xl bg-[#1B444B] border">
      <h1 className="text-white text-xl tracking-wide font-semibold">
        <span className="">SoulConnect</span>
      </h1>

      <div className="flex items-center gap-4 ml-auto">
        <div className="relative">
          <button
            onClick={() => {
              setOpenConnect(!openConnect);
              setOpenAccess(false);
            }}
            className="px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] transition-all duration-300 hover:scale-105"
          >Connect</button>
          {openConnect && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1B444B] text-white rounded-xl shadow-lg border border-white/10 p-2">
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Join Room</button>
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Create Room</button>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            onClick={() => {
              setOpenAccess(!openAccess);
              setOpenConnect(false);
            }}
            className="px-5 py-2 text-white font-semibold rounded-full bg-[#2A6C76] hover:bg-[#358A96] transition-all duration-300 hover:scale-105"
          >
            Access
          </button>

          {openAccess && (
            <div className="absolute right-0 mt-2 w-40 bg-[#1B444B] text-white rounded-xl shadow-lg border border-white/10 p-2">
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Login</button>
              <button className="w-full text-left px-3 py-2 hover:bg-[#2A6C76] rounded-lg">Sign Up</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
