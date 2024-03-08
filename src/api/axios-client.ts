import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
    baseURL: "https://649a301abf7c145d02389df4.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.response.use(
    (response: AxiosResponse) => response?.data ?? response,
    (error) => Promise.reject(error)
);

export default axiosClient;
