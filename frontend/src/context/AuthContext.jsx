import { createContext, useContext } from "react";
import axiosInstance from "../lib/axiosInstance.js";
import httpStatus from "http-status";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();

    const signup = async (formData) => {
        try {
            const response = await axiosInstance.post('/auth/signup', formData);
            if (response.status === httpStatus.CONFLICT) {
                toast.error(response.data.message);
            }
            if (response.status === httpStatus.CREATED) {
                toast.success(response.data.message);
                navigate('/');
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in signup: authContext", error.response.data.message);
        }
    }
    const login = async (formData) => {
        try {
            const response = await axiosInstance.post('/auth/login', formData);
            if(response.status === httpStatus.UNAUTHORIZED) {
                toast.error(response.data.message);
            }
            if (response.status === httpStatus.OK) {
                toast.success(response.data.message);
                navigate('/');
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in login: authContext", error.response.data.message);
        }
    }

    const data = {
        signup,
        login
    };

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}