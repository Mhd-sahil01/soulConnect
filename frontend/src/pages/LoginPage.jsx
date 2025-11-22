import Footer from "../components/Footer";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function LoginPage() {
    return (
        <>
            <div className="h-full relative overflow-x-hidden bg-black text-white p-4">
                <div className="flex flex-col lg:flex-row h-[80vh] rounded-2xl shadow-xl max-w-6xl">

                  {/* for Community Section  */}

                    <div className="w-full lg:w-7/12 bg-black flex flex-col justify-center items-center gap-4 p-5 md:p-12 border border-[#1B444B]/70">
                        <h2 className="text-3xl font-bold text-white">Welcome Back</h2>

                        <div className="w-full max-w-md p-6 
                            bg-linear-to-br from-[#1E5A63] via-[#123A40] to-[#082024] 
                            rounded-lg shadow-md border border-[#1B444B]/70">

                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <EmailOutlinedIcon /> Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                            shadow-sm focus:outline-none focus:ring-2 
                                            focus:ring-[#007A8F] focus:border-[#007A8F] transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="password" className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <LockOutlinedIcon /> Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                                            shadow-sm focus:outline-none focus:ring-2 
                                            focus:ring-[#007A8F] focus:border-[#007A8F] transition-all"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm 
                                        text-sm font-medium text-white 
                                        bg-[#0AA5BF] hover:bg-[#088EA5] 
                                        focus:outline-none focus:ring-2 focus:ring-offset-2 
                                        focus:ring-[#0AA5BF] transition-all hover:scale-[1.02]"
                                >
                                    Login
                                </button>
                            </form>
                        </div>
                        <div className="text-center text-sm text-gray-600">
                            <p>Don’t have an account?
                                <span className="text-[#0AA5BF] font-medium hover:underline"> Sign Up</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}