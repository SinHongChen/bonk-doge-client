import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { UserInfo } from "types/api";

export const getUserInfoRequest = async (sessionId:string):Promise<UserInfo>=>{
    let data = JSON.stringify({
        query: `query {
            UserInfo{
                ID
                Name
                Email
                Picture_Url
            }
        }`,
        variables: {}
    });
    let config:AxiosRequestConfig = {
        method: 'POST',
        data : data,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":sessionId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let user:UserInfo = response.data.data.UserInfo;
    return user;
}

export const logoutRequest = async (sessionId:string) => {
    let data = JSON.stringify({
        query: `mutation {
            UserLogout
        }`,
        variables: {}
    });
    let config:AxiosRequestConfig = {
        method: 'POST',
        data : data,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":sessionId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    return response;
}