import { useState } from 'react';
import toast from 'react-hot-toast';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CommunitySection from '../components/CommunitySection.jsx';

export default function LoginPage() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const validateForm = () => {
        if(!formData.email.trim()) {
            toast.error("Email is required");
            return false;
        }
        if(!formData.password) {
            toast.error("Password is required");
            return false;
        }
        if(!/\S+@\S+\.\S+/.test(formData.email)) {
            toast.error("Invalid email format");
            return false;
        }
        if(formData.password.length < 8) {
            toast.error("Password must be at least 8 characters");
            return false;
        }
        return true;
     }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if(isValid == true) {
            toast.success("Login successful!");
        }
    }   

    return (
        <>
            <div className="min-h-screen w-full bg-black text-white p-4 flex justify-center items-center">
                <div className="flex flex-col lg:flex-row w-full max-w-6xl min-h-[80vh] rounded-2xl overflow-hidden shadow-xl mx-auto">

                    <CommunitySection />

                    <div className="w-full lg:w-7/12 bg-black flex flex-col justify-center 
                    items-center gap-6 p-4 sm:p-8 md:p-12 border border-[#1B444B]/70">
                        <h2 className="text-2xl sm:text-3xl font-bold">Welcome Back</h2>

                        <div className="w-full max-w-sm sm:max-w-md p-5 sm:p-6
                        bg-linear-to-br from-[#1E5A63] via-[#123A40] to-[#082024]
                        rounded-xl shadow-md border border-[#1B444B]/70">

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <EmailOutlinedIcon /> Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                        bg-black/20 text-white shadow-sm
                                        focus:outline-none focus:ring-2 focus:ring-[#007A8F] focus:border-[#007A8F] 
                                        transition-all"
                                        placeholder="your@email.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <LockOutlinedIcon /> Password
                                        </span>
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg
                                        bg-black/20 text-white shadow-sm
                                        focus:outline-none focus:ring-2 focus:ring-[#007A8F] focus:border-[#007A8F] 
                                        transition-all"
                                        placeholder="••••••••"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg shadow-sm text-sm font-medium text-white
                                    bg-[#0AA5BF] hover:bg-[#088EA5] 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0AA5BF]
                                    transition-all hover:scale-[1.02]"
                                >
                                    Login
                                </button>

                            </form>
                        </div>

                        <p className="text-center text-sm text-gray-400">
                            Don’t have an account?
                            <span className="text-[#0AA5BF] font-medium hover:underline"> Sign Up</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}