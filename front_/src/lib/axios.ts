import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://backend_api.test/api/v1",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export default axiosInstance;

