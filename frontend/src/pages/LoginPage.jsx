import Footer from "../components/Footer";

export default function LoginPage() {
    return (
        <>
            <div className="h-screen bg-black text-white flex items-center">
                <div className="w-1/2 h-full flex items-center justify-center">
                    {/* Add community section later */}
                </div>

                <div className="w-1/2 h-full flex items-center justify-center">
                    <div className="bg-gray-800 p-10 rounded-2xl shadow-lg w-[70%]">
                        <h1 className="text-3xl font-bold mb-6">Login</h1>

                        <form className="space-y-5">

                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-300">Email</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className="bg-gray-700 p-2 rounded outline-none"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1 text-gray-300">Password</label>
                                <input 
                                    type="password" 
                                    name="password"
                                    className="bg-gray-700 p-2 rounded outline-none"
                                />
                            </div>

                            <button className="bg-[#027FAE] w-full py-3 rounded-lg font-semibold hover:bg-[#0393C9] transition">
                                Login
                            </button>

                        </form>

                        <div className="text-center text-sm text-gray-600 pt-4">
                            <p>Don't have an account? 
                                <span className="font-medium hover:underline"> Sign Up</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}