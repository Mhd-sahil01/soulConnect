import { useState } from 'react';
import toast from 'react-hot-toast';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CommunitySection from '../components/CommunitySection.jsx';
import { useAuthContext } from '../context/AuthContext.jsx';
import { Link } from 'react-router';

export default function SignupPage() {

    const { signup, isSignin } = useAuthContext();

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        nickname: "",
        password: ""
    });

    // Validate form inputs
    const validateForm = () => {
        if(!formData.email.trim()) {
            toast.error("Email is required");
            return false;
        }
        if(!formData.username.trim()) {
            toast.error("Username is required");
            return false;
        }
        if(!formData.nickname.trim()) {
            toast.error("Nickname is required");
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
            signup(formData);
        }
    }

    return (
        <>
            <div className="min-h-screen relative overflow-x-hidden bg-black text-white p-4">
                <div className="flex flex-col lg:flex-row min-h-[85vh] rounded-2xl overflow-hidden shadow-xl max-w-6xl mx-auto">
                                 
                    <CommunitySection />

                    <div className="w-full lg:w-7/12 bg-black flex flex-col justify-center items-center gap-4 p-6 sm:p-10 md:p-12 border border-[#1B444B]/70">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Create Account</h2>

                        <div className="w-full max-w-md p-6 bg-linear-to-br from-[#1E5A63] via-[#123A40] to-[#082024] rounded-lg shadow-md border border-[#1B444B]/70 ">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <EmailOutlinedIcon /> Email
                                        </span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="signup-input"
                                        placeholder="your@email.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="username" className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <PersonOutlineOutlinedIcon /> Username
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        className="signup-input"
                                        placeholder="username"
                                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="nickname" className="block text-sm font-medium text-white">
                                        <span className="flex items-center gap-2">
                                            <PersonOutlineOutlinedIcon /> Nickname
                                        </span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nickname"
                                        className="signup-input"
                                        placeholder="nickname"
                                        onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
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
                                        className="signup-input"
                                        placeholder="••••••••"
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    />
                                </div>

                                <button type="submit"
                                    className=" w-full py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-[#0AA5BF] hover:bg-[#088EA5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0AA5BF] transition-all hover:scale-[1.02]"
                                    disabled={isSignin}>
                                    {isSignin ? 'Signing Up...' : 'Sign Up'}
                                </button>
                            </form>
                        </div>
                        <div className="text-center text-sm text-gray-500">
                            <p>
                                Already have an account?
                                <Link to="/login" className="text-[#0AA5BF] font-medium hover:underline cursor-pointer">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}