import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../lib/axiosInstance.js"
import httpStatus from "http-status";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const ConnectContext = createContext({});
export const useConnectContext = () => useContext(ConnectContext);

export const ConnectProvider = ({ children }) => {

    const navigate = useNavigate();
    const [pair, setPair] = useState(null);

    const createPair = async () => {
        try {
            const response = await axiosInstance.post("/pair/create");
            if (response.status == httpStatus.CONFLICT) {
                toast.error(response.data.message);
            }
            if (response.status == httpStatus.CREATED) {
                setPair(response.data.newPair);
                let pairID = response.data.newPair.pairId;
                checkPair(pairID);
                localStorage.setItem("pairId", pairID);
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in createPair: ConnectContext", error.response.data.message);
        }
    }

    const joinPair = async (pairId) => {
        try {
            const response = await axiosInstance.post(`/pair/join/${pairId}`);
            if (response.status == httpStatus.NOT_FOUND ||
                response.status == httpStatus.BAD_REQUEST ||
                response.status == httpStatus.CONFLICT) {
                toast.error(response.data.message);
            }
            if (response.status == httpStatus.OK) {
                setPair(response.data.findPair);
                console.log(response.data.findPair);
                localStorage.setItem("pairId", response.data.findPair.pairId);
                navigate("/dashboard");
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in joinPair: ConnectContext", error.response.data.message);
        }
    }

    const checkPair = async (pairId) => {
        const interval = setInterval(async () => {
            try {
                const response = await axiosInstance.get(`/pair/check/${pairId}`);
                if (response.status == httpStatus.OK) {
                    setPair(response.data.findPair);
                    clearInterval(interval);
                    navigate("/dashboard");
                }
            } catch (error) {
                // toast.error("Internal Server Error");
                console.log("Error in checkPair: ConnectContext", error.response.data.message);
            }
        }, 2000);
    }

    const data = {
        createPair,
        pair,
        joinPair,
        checkPair,
    }

    return (
        <ConnectContext.Provider value={data}>
            {children}
        </ConnectContext.Provider>
    )
}