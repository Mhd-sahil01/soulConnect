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
    // const [user1, setUser1] = useState(null);
    // const [user2, setUser2] = useState(null);

    // useEffect(() => {
    //     console.log("user1 = ", user1);
    //     console.log("user2 = ", user2);
    //     if (user1 && user2) {
    //         navigate("/dashboard");
    //     }
    // }, [user1, user2])

    const createPair = async () => {
        try {
            const response = await axiosInstance.post("/pair/create");
            if (response.status == httpStatus.CONFLICT) {
                toast.error(response.data.message);
            }
            if (response.status == httpStatus.CREATED) {
                setPair(response.data.newPair);
                console.log(response.data.newPair);
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
                toast.success(response.data.message);
            }
        } catch (error) {
            toast.error("Internal Server Error");
            console.log("Error in joinPair: ConnectContext", error.response.data.message);
        }
    }

    const data = {
        createPair,
        pair,
        joinPair,
    }

    return (
        <ConnectContext.Provider value={data}>
            {children}
        </ConnectContext.Provider>
    )
}