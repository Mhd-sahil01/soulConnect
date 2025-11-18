import Particles from '../components/Particles.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="relative w-full h-screen bg-black">
                <Particles
                    particleColors={['#00FFFF', '#00FFFF']}
                    particleCount={280}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={120}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                />
            </div>
            <Footer />
        </>
    )
}