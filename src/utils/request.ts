import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";


export const apiInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: { 
        'Content-Type': 'application/json'
    }
});

const request = <T>(requestConfig: AxiosRequestConfig)
    : Promise<AxiosResponse<T>> => {
    return apiInstance.request<T>(requestConfig);
};

export default request;