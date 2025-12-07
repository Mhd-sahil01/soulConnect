import Particles from "../components/Particles.jsx";

export default function ChatPage() {
  const leftCurveTail = {
    content: '""',
    position: "absolute",
    bottom: "0px",
    left: "-22px",
    width: "40px",
    height: "25px",
    background: "radial-gradient(25px at top left, #0000 99%, #00A3FF 102%)"
  };

  const rightCurveTail = {
    content: '""',
    position: "absolute",
    bottom: "0px",
    right: "-22px",
    width: "40px",
    height: "25px",
    background: "radial-gradient(25px at top right, #0000 99%, #7A5AF5 102%)"
  };
  return (
    <>
      <div className="relative h-screen w-full bg-black overflow-hidden text-white">
        <div className="fixed text-3xl font-bold p-2 z-30">SoulConncet</div>
        <div className="fixed h-[80vh] w-[85vw] bg-[#0C0F13]/60 backdrop-blur-lg border border-[#1B444B]  rounded-xl z-20 inset-0 m-auto px-2">
          <div className="space-y-6 w-full h-full overflow-y-auto no-scrollbar pt-5 pb-20 px-4">
            {/* Chat Start */}
            <div className="flex justify-start w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#00A3FF] text-white text-sm">
                hey joy fsv s Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid omnis sequi aut, cupiditate deleniti. Hic placeat voluptas accusantium, odit repudiandae dolorem quae?
                <span className="block text-[10px] text-white/70 mt-1">12:15pm</span>
                <span style={leftCurveTail}></span>
              </div>
            </div>
            <div className="flex justify-start w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#00A3FF] text-white text-sm">
                hey joy fsv s Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid omnis sequi aut, cupiditate deleniti. Hic placeat voluptas accusantium, odit repudiandae dolorem quae?
                <span className="block text-[10px] text-white/70 mt-1">12:15pm</span>
                <span style={leftCurveTail}></span>
              </div>
            </div>
            <div className="flex justify-start w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#00A3FF] text-white text-sm">
                hey joy fsv s Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aliquid omnis sequi aut, cupiditate deleniti. Hic placeat voluptas accusantium, odit repudiandae dolorem quae?
                <span className="block text-[10px] text-white/70 mt-1">12:15pm</span>
                <span style={leftCurveTail}></span>
              </div>
            </div>

            {/* Chat End */}
            <div className="flex justify-end w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#7A5AF5] text-white text-sm">
                hello ratial how are you fsns s bskb Lorem ipsum dolor sit amet.
                <span className="block text-[10px] text-white/70 mt-1">12:18pm</span>
                <span style={rightCurveTail}></span>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#7A5AF5] text-white text-sm">
                hello ratial how are you fsns s bskb Lorem ipsum dolor sit amet.
                <span className="block text-[10px] text-white/70 mt-1">12:18pm</span>
                <span style={rightCurveTail}></span>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#7A5AF5] text-white text-sm">
                hello ratial how are you fsns s bskb Lorem ipsum dolor sit amet.
                <span className="block text-[10px] text-white/70 mt-1">12:18pm</span>
                <span style={rightCurveTail}></span>
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="relative max-w-xs md:max-w-sm p-3 rounded-2xl bg-[#7A5AF5] text-white text-sm">
                hello ratial how are you fsns s bskb Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure modi quisquam aspernatur quis? Praesentium exercitationem at eaque autem sequi sunt.
                <span className="block text-[10px] text-white/70 mt-1">12:18pm</span>
                <span style={rightCurveTail}></span>
              </div>
            </div>
          </div>
          {/* chat input */}
          <div className="absolute bg-[#0C0F13] w-[83vw] bottom-0 p-2">
            <form className="flex gap-5 px-4 py-1">
              <input className="chat-input" type="text" />
              <button className="px-6 py-3 md:w-max bg-[#027FAE] hover:bg-[#0393C9] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">Send</button>
            </form>
          </div>
        </div>
        <Particles className="absolute inset-0 z-0"
          particleColors={['#00FFFF', '#00FFFF']}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
        />
      </div>
    </>
  )
}
