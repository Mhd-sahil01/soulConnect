import { MessageSquare, Phone, Video, Gamepad2, Tv } from "lucide-react";
import { useNavigate } from "react-router";
import UserProfile from "../components/UserProfile";
import Particles from "../components/Particles";
import { useConnectContext } from "../context/ConnectContext";

export default function Dashboard() {
    const navigate = useNavigate();
    const { pair } = useConnectContext();

    const features = [
        { id: "chat", label: "Chat", icon: MessageSquare, redirect: "/dashboard/chat" },
        { id: "audio", label: "Audio Call", icon: Phone, redirect: "/dashboard/audio" },
        { id: "video", label: "Video Call", icon: Video, redirect: "/dashboard/video" },
        { id: "game", label: "Play Together", icon: Gamepad2, redirect: "/dashboard/game" },
        { id: "watch", label: "Watch Together", icon: Tv, redirect: "/dashboard/watch" },
    ];

    return (
        <>
            <div className="relative h-screen w-full bg-black overflow-hidden text-white">
                <div className="fixed right-0 left-0 flex justify-between  p-4 z-30">
                    <UserProfile user={pair.user1.nickname} />
                    <UserProfile user={pair.user2.nickname} />
                </div>
                <div className="absolute h-[90%] w-full flex flex-col justify-center items-center gap-6 px-6 mx-auto z-30">
                    <h1 className="text-2xl md:text-3xl font-bold hover:scale-105 transition-all duration-200">Together Zone</h1>
                    <div className=" flex flex-wrap justify-center gap-5 w-full md:max-w-lg p-4">
                        {features.map((f) => (
                            <button
                                key={f.id}
                                onClick={() => navigate(f.redirect)}
                                className="flex flex-col items-center justify-center gap-2 w-32 h-32 rounded-xl p-4 bg-[#0C0F13] border border-gray-800 hover:bg-[#12171C] hover:scale-105 transition ">
                                <f.icon className="size-6" />
                                <span className="text-sm md:text-md">{f.label}</span>
                            </button>
                        ))}
                    </div>

                </div>
                <Particles className="absolute inset-0 z-0"
                    particleColors={['#00FFFF', '#00FFFF']}
                    particleCount={280}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={80}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                />
            </div>
        </>
    );
}
