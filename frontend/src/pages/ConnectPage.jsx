import { useState } from 'react';
import Join from '../components/Join.jsx';
import Create from '../components/Create.jsx';
import Particles from '../components/Particles.jsx';

export default function ConnectPage() {

    const [formState, setFormState] = useState(0);

    return (
        <>
            <div className="relative h-screen w-full bg-black text-white p-4 flex justify-center items-center">
                <div className="absolute flex flex-col justify-center items-center w-full min-h-[80vh] rounded-2xl overflow-hidden shadow-xl mx-auto gap-4 z-20">
                    <div className="flex justify-center w-full mx-auto gap-4 p-4">
                        <button
                            className={`px-4 py-2 backdrop-blur-lg rounded-lg transition ${formState === 0 ? "bg-[#2A6C76] text-white" : "bg-transparent text-gray-300 border border-gray-500"}`}
                            onClick={() => setFormState(0)}>Join</button>
                        <button
                            className={`px-4 py-2 backdrop-blur-lg rounded-lg transition ${formState === 1 ? "bg-[#2A6C76] text-white" : "bg-transparent text-gray-300 border border-gray-500"}`}
                            onClick={() => setFormState(1)}>Create</button>
                    </div>
                    <div className="w-half max-w-sm sm:max-w-md p-5 sm:p-6 bg-black rounded-xl shadow-md border border-[#1B444B]/70">
                        {
                            formState === 0 ?
                                <Join/> :
                                <Create/>
                        }
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

            </div >
        </>
    );
}