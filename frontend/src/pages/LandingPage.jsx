import Particles from '../components/Particles.jsx';

export default function LandingPage() {
  return (
    <div className="relative w-full h-screen bg-black">
            <Particles
                particleColors={['#027FAE', '#027FAE']}
                particleCount={300}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={130}
                moveParticlesOnHover={true}
                alphaParticles={false}
            />
        </div>
  )
}