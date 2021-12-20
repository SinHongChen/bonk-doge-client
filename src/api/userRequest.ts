import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { UserInfo } from "types/api";

export const getUserInfoRequest = async (loginId:string):Promise<UserInfo>=>{
    let data = JSON.stringify({
        query: `query {
            UserInfo{
                ID
                Name
                Email
                Picture_Url
                Victory
                Defeat
            }
        }`,
        variables: {}
    });
    let config:AxiosRequestConfig = {
        method: 'POST',
        data : data,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":loginId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let user:UserInfo = response.data.data.UserInfo;
    return user;
}

export const getUserInfosRequest = async (loginId:string):Promise<UserInfo[]>=>{
    let data = JSON.stringify({
        query: `query {
            UserList{
                ID
                Name
                Victory
                Defeat
            }
        }`,
        variables: {}
    });
    let config:AxiosRequestConfig = {
        method: 'POST',
        data : data,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":loginId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let userInfos:UserInfo[] = response.data.data.UserList;
    return userInfos;
}

export const logoutRequest = async (loginId:string) => {
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
            "session-id":loginId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    return response;
}