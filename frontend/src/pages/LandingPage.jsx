import Particles from '../components/Particles.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Carousel from '../components/Carousel.jsx';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="relative h-screen w-full bg-black overflow-hidden">
                <div className="flex flex-col w-screen h-[75vh] items-center justify-center absolute z-20">
                    <h1 className="text-4xl font-bold text-white mb-4">Feel Close, No Matter the Distance</h1>
                    <p className="text-lg text-gray-300">SoulConnect lets you call, chat, and watch videos together.</p>
                    <p className="text-lg text-gray-300">Making long-distance feel effortless</p>
                    <button className="mt-4 px-6 py-3 bg-[#027FAE] text-white font-semibold rounded-full hover:bg-[#0393C9] transition duration-300">Connect Now</button>
                </div>

                <div className="absolute h-screen flex items-center justify-around inset-0 mt-40 z-20">
                    <Carousel 
                        baseWidth={300}
                        autoplay={true}
                        autoplayDelay={3000}
                        pauseOnHover={true}
                        loop={true}
                        round={false}
                    />
                    <div className=" bg-black bg-opacity-50 border border-white rounded-xl flex items-center justify-center p-6">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">Why SoulConnect?</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>High-quality video and audio calls</li>
                                <li>Seamless chat functionality</li>
                                <li>Watch videos together in real-time</li>
                                <li>User-friendly interface</li>
                                <li>Secure and private connections</li>
                            </ul>
                        </div>
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
            <Footer />
        </>
    )
}