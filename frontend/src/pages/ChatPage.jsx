import Particles from "../components/Particles.jsx";

export default function ChatPage() {
  return (
    <>
      <div className="relative h-screen w-full bg-black overflow-hidden text-white">
        <div className="absolute h-[80vh] w-[85vw] bg-[#0C0F13]/60 backdrop-blur-lg border border-[#1B444B]  rounded-xl z-20 inset-0 m-auto">
          <div>
            // edit later
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
