import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";

export const baseURL = "https://doge.jack27.me";

export const apiInstance: AxiosInstance = axios.create({
    baseURL: baseURL,
    headers: { 
        'Content-Type': 'application/json'
    }
});

const request = <T>(requestConfig: AxiosRequestConfig)
    : Promise<AxiosResponse<T>> => {
    return apiInstance.request<T>(requestConfig);
};

export default request;