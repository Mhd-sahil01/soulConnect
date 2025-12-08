import { createContext, useContext, useState } from "react";
import axiosInstance from "../lib/axiosInstance.js"
import httpStatus from "http-status";
import toast from "react-hot-toast";

export const ConnectContext = createContext({});
export const useConnectContext = () => useContext(ConnectContext);

export const ConnectProvider = ({ children }) => {

    const [pair, setPair] = useState({});

    const createPair = async () => {
        try {
            const response = await axiosInstance.post("/pair/create");
            if(response.status == httpStatus.CONFLICT){
                toast.error(response.data.message);
            }
            if(response.status == httpStatus.CREATED){
                setPair(response.data);
                toast.success(response.data.message);
                navigate('/dashboard');
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in createPair: ConnectContext", error.response.data.message);
        }
    }

    const data = {
        createPair,
        pair
    }

    return (
        <ConnectContext.Provider value={data}>
            {children}
        </ConnectContext.Provider>
    )
}