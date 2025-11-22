export default function CommunitySection() {
    return (
        <>
            <div className="
                w-full lg:w-5/12 
                bg-linear-to-br from-[#1E5A63] via-[#123A40] to-[#082024]
                flex flex-col gap-6 justify-center text-center items-center
                p-8 md:p-12 relative overflow-hidden
            ">

                {/* Animated background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#00E5FF] 
                        animate-[float_6s_ease-in-out_infinite]"></div>

                    <div className="absolute top-1/2 right-20 w-24 h-24 rounded-full bg-[#00D4F5] 
                        animate-[float_7s_ease-in-out_infinite_1s]"></div>

                    <div className="absolute bottom-10 left-1/3 w-20 h-20 rounded-full bg-[#009EB8] 
                        animate-[float_5s_ease-in-out_infinite_2s]"></div>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">
                    Join our <span className="text-[#00E5FF]">community</span>
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-gray-300 relative z-10 max-w-md">
                    Connect with our fast-growing community and stay updated with new
                    releases, announcements, and exclusive insights.
                </p>

                <button className="
                    relative z-10 px-8 py-3 rounded-full font-semibold bg-[#0AA5BF] text-white hover:bg-[#088EA5] transition-all duration-300 hover:scale-105 ">
                    <a 
                        href="https://t.me/soulConnect07" 
                        className="flex items-center gap-2"
                    >
                        <span>Join Now</span>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 
                                010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 
                                110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                        </svg>
                    </a>
                </button>
            </div>
        </>
    );
}