import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { UserLogin } from "types/api";

/**
 * 取得 google oauth code 後丟給後端進行登入驗證
 * @param code 
 * @returns 
 */
export const loginRequest = async (code:string):Promise<UserLogin>=>{
    let data = JSON.stringify({
        query: `mutation{
            UserLogin(Code:"${code}"){
                ID
                Name
                Email
                Picture_Url
                Session_ID
            }
        }`,
        variables: {}
    });
    let config:AxiosRequestConfig = {
        method: 'POST',
        data : data,
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let user:UserLogin = response.data.data.UserLogin;
    return user;
}

