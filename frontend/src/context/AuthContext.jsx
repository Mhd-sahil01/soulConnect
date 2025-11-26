import { createContext, useContext, useState } from "react";
import axiosInstance from "../lib/axiosInstance.js";
import httpStatus from "http-status";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    const [isSignin, setIsSignin] = useState(false);

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get('/auth/check');
            setUser(response.data.user);
        } catch (error) {
            console.log("Error in checkAuth: authContext", error.response.data.message);
        } finally {
            setIsCheckingAuth(false);
        }
    }

    const signup = async (formData) => {
        try {
            setIsSignin(true);
            const response = await axiosInstance.post('/auth/signup', formData);
            if (response.status === httpStatus.CONFLICT) {
                toast.error(response.data.message);
            }
            if (response.status === httpStatus.CREATED) {
                setUser(response.data.user);
                toast.success(response.data.message);
                navigate('/');
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in signup: authContext", error.response.data.message);
        } finally {
            setIsSignin(false);
        }
    }

    const login = async (formData) => {
        try {
            setIsLogin(true);
            const response = await axiosInstance.post('/auth/login', formData);
            if (response.status === httpStatus.UNAUTHORIZED) {
                toast.error(response.data.message);
            }
            if (response.status === httpStatus.OK) {
                setUser(response.data.user);
                toast.success(response.data.message);
                navigate('/');
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in login: authContext", error.response.data.message);
        } finally {
            setIsLogin(false);
        }
    }

    const logout = async () => {
        try {
            const response = await axiosInstance.post('/auth/logout');
            if (response.status === httpStatus.OK) {
                setUser(null);
                toast.success(response.data.message);
                navigate('/');
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in logout: authContext", error.response.data.message);
        }
    }

    const data = {
        checkAuth,
        signup,
        login,
        logout,
        user,
        isCheckingAuth,
        isLogin,
        isSignin
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}