import { MessageSquare, Phone, Video, Gamepad2, Tv } from "lucide-react";
import { useNavigate } from "react-router";

export default function CollaborativeDashboard() {
    const navigate = useNavigate();

    const features = [
        { id: "chat", label: "Chat", icon: MessageSquare, redirect: "/dashboard/chat" },
        { id: "audio", label: "Audio Call", icon: Phone, redirect: "/dashboard/audio" },
        { id: "video", label: "Video Call", icon: Video, redirect: "/dashboard/video" },
        { id: "game", label: "Play Together", icon: Gamepad2, redirect: "/dashboard/game" },
        { id: "watch", label: "Watch Together", icon: Tv, redirect: "/dashboard/watch" },
    ];

    return (
        <div className=" h-screen w-full bg-black overflow-hidden text-white border border-red-700">
            <div className="flex justify-between px-4">
                <div>user1</div>
                <div>user2</div>
            </div>
            <div className="h-[90%] w-full md:w-[90%] flex flex-col justify-center items-center gap-6 px-6 md:mx-auto border border-amber-300">
                <h1 className="text-2xl md:text-3xl font-bold">Collaboration Hub</h1>
                <div className=" flex flex-wrap justify-center gap-5 w-full md:max-w-lg border border-[#1B444B]/70 p-4">
                    {features.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => navigate(f.redirect)}
                            className="flex flex-col items-center justify-center gap-2 w-32 h-32 rounded-xl p-4 bg-[#0C0F13] border border-gray-800 hover:bg-[#12171C] transition ">
                            <f.icon className="size-6" />
                            <span className="text-sm md:text-md">{f.label}</span>
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
}
