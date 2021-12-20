import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance } from "axios";


export const apiInstance: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: { 
        'Content-Type': 'application/json'
    }
});

export const createUploadSigleFileForm = (operations:string,file:File):FormData=>{
    let formData = new FormData();
    formData.append("operations", operations);

    const map = {
        "0": ["variables.file"]
    };
    formData.append("map", JSON.stringify(map));
    formData.append("0",file);
    return formData;
}

const request = <T>(requestConfig: AxiosRequestConfig)
    : Promise<AxiosResponse<T>> => {
    return apiInstance.request<T>(requestConfig);
};

export default request;