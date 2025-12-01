import Particles from '../components/Particles.jsx';
import Navbar from '../components/Navbar.jsx';
import Carousel from '../components/Carousel.jsx';
import { useNavigate } from 'react-router';

export default function LandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="relative h-screen w-full bg-black overflow-hidden">
                <div className="absolute h-[90%] w-full md:w-[90%] flex flex-col md:flex-row justify-center items-center gap-4 px-6 top-0 bottom-0 my-auto md:left-0 md:right-0 md:mx-auto z-20">
                    <div className="flex flex-col max-w-xl border p-5 z-20">
                        <h1 className="hover-glow text-2xl md:text-4xl font-bold text-white mb-4">Feel Close, No Matter the Distance</h1>
                        <p className="text-md md:text-lg text-gray-300"> SoulConnect lets you call, chat, and watch videos together.</p>
                        <p className="text-sm md:text-lg text-gray-300 mb-4"> Making long-distance feel effortless</p>
                        <button className="px-6 py-3 md:w-max bg-[#027FAE] hover:bg-[#0393C9] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                        onClick={() => navigate('/connect')}
                        > Connect Now </button>
                    </div>

                    <div className="flex justify-center w-fit items-center">
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