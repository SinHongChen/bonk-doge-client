import request from "utils/AxiosRequest";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { User } from "types";

export const loginRequest = async (name:string,email:string):Promise<User>=>{
    let data = JSON.stringify({
        query: `mutation { 
            UserLogin(Name : "${name}" ,  Email : "${email}" ){
                ID
                Name
                Email
            }
        }`,
        variables: {}
    });
    let config:AxiosRequestConfig = {
        method: 'POST',
        data : data
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let user:User = response.data.data.UserLogin;
    return user;
}

export const updateRequest = async (name:string,email:string):Promise<User>=>{
    let config:AxiosRequestConfig = {
        method:"POST",
        data:JSON.stringify({
            query: `mutation{ userCreate(name:"${name}",email:"${email}") }`,
            variables: {}
        })
    }

    let response:AxiosResponse<User> = await request<User>(config);
    let user:User = response.data;
    return user;
}

export const getUserListRequest  = async ():Promise<User[]>=>{
    let config:AxiosRequestConfig = {
        method:"POST",
        data:JSON.stringify({
            query: `query { 
                UserList {
                    ID
                    Name
                    Email
                }
              }`,
            variables: {}
        })
    }

    let response:AxiosResponse<User[]> = await request<User[]>(config);
    let users:User[] = response.data;
    return users;
}


export const getRequest = async (id:string):Promise<User>=>{
    let config:AxiosRequestConfig = {
        method:"POST",
        data:JSON.stringify({
            query: `query { 
                UserGet( ID : "${id}" ){
                      ID
                      Name
                      Email
                  }
            }`,
            variables: {}
        })
    }

    let response:AxiosResponse<User> = await request<User>(config);
    let user:User = response.data;
    return user;
}
