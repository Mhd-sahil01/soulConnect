import Particles from '../components/Particles.jsx';
import Navbar from '../components/Navbar.jsx';
import Carousel from '../components/Carousel.jsx';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="relative h-screen w-full bg-black overflow-hidden">
                <div className="w-screen h-screen md:h-[80vh] absolute flex flex-col md:flex-row items-center justify-center md:mt-20 px-10 gap-9 md:gap-5 z-20">
                    <div className="flex flex-col justify-center item-center md:items-start ml-5 md:ml-10 md:max-w-xl">
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Feel Close, No Matter the Distance</h1>
                        <p className="text-md md:text-lg text-gray-300"> SoulConnect lets you call, chat, and watch videos together.</p>
                        <p className="text-md md:text-lg text-gray-300 mb-4"> Making long-distance feel effortless</p>
                        <button className="px-6 py-3 bg-[#027FAE] text-white font-semibold rounded-full hover:bg-[#0393C9] transition-all duration-300 hover:scale-105"> Connect Now </button>
                    </div>

                    <div className="flex justify-center items-center">
                        <Carousel
                            baseWidth={300}
                            autoplay={true}
                            autoplayDelay={3000}
                            pauseOnHover={true}
                            loop={true}
                            round={false}
                        />
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
    )
}