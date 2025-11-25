import { createContext, useContext } from "react";
import axiosInstance from "../lib/axiosInstance.js";

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const signup = async (formData) => {
        try {
            const response = await axiosInstance.post('/auth/signup', formData);
            if(response.status === httpStatus.CREATED) {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log("Error in signup: authContext", error.response.data.message);
        }
    }
    const login = async () => {
        try {
            const response = await axiosInstance.post('/auth/login', formData);
            if(response.status === httpStatus.OK) {
                console.log(response.data.message);
            }
        } catch (error) {
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