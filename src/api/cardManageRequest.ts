import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { 
    RoleCardCreateInfo,
    EffectCardCreateInfo,
    Attribute,
    Nature,
    Race
} from "types/api";

export const testUploadRequest = async (
    loginId:string,
    name:string,
    imageFile:File,
):Promise<any> =>{
    var formData = new FormData();
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            testUpload(Name:"${name}",Img:$file)
        }`,
        variables: {}
    });
    
    formData.append("operations", operations);

    const map = {
        "0": ["variables.file"]
    };
    formData.append("map", JSON.stringify(map));
    formData.append("0",imageFile);
    
    let config:AxiosRequestConfig = {
        method:"POST",
        data:formData,
        headers: { 
            'Content-Type': 'multipart/form-data',
            "session-id":loginId,
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    return response;
}


export const roleCardCreateRequest = async (
    loginId:string,
    roleCardCreateInfo:RoleCardCreateInfo
):Promise<any> =>{
    var formData = new FormData();
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            RoleCardCreate(
                Name:"${roleCardCreateInfo.Name}",
                Img:$file,
                Attribute_ID:"${roleCardCreateInfo.Attribute_ID}",
                Star: "${roleCardCreateInfo.Star}",
                Race_ID: "${roleCardCreateInfo.Race_ID}",
                Effect_Assert: "${roleCardCreateInfo.Effect_Assert}",
                Effect_Description: "${roleCardCreateInfo.Effect_Description}",
                Attack: "${roleCardCreateInfo.Attack}",
                Defense: "${roleCardCreateInfo.Defense}",
            )
        }`,
        variables: {}
    });
    
    formData.append("operations", operations);

    const map = {
        "0": ["variables.file"]
    };
    formData.append("map", JSON.stringify(map));
    formData.append("0",roleCardCreateInfo.ImgFile);
    
    let config:AxiosRequestConfig = {
        method:"POST",
        data:formData,
        headers: { 
            'Content-Type': 'multipart/form-data',
            "session-id":loginId,
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    return response;
}


export const effectCardCreateRequest = async (
    loginId:string,
    effectCardCreateInfo:EffectCardCreateInfo
):Promise<any> =>{
    var formData = new FormData();
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            EffectCardCreate(
                Name: "${effectCardCreateInfo.Name}"
                Img: $file
                Nature_ID: "${effectCardCreateInfo.Nature_ID}"
                Effect_Assert: "${effectCardCreateInfo.Effect_Assert}"
                Effect_Description: "${effectCardCreateInfo.Effect_Description}"
            )
        }`,
        variables: {}
    });
    
    formData.append("operations", operations);

    const map = {
        "0": ["variables.file"]
    };
    formData.append("map", JSON.stringify(map));
    formData.append("0",effectCardCreateInfo.ImgFile);
    
    let config:AxiosRequestConfig = {
        method:"POST",
        data:formData,
        headers: { 
            'Content-Type': 'multipart/form-data',
            "session-id":loginId,
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    return response;
}

export const getNatureList = async (
    loginId:string
):Promise<Nature[]>=>{
    let data = JSON.stringify({
        query: `query {
            NatureList{
                ID
                Name
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
    let natureList:Nature[] = response.data.data.NatureList;
    return natureList;
}

export const getAttributeList = async (
    loginId:string
):Promise<Attribute[]>=>{
    let data = JSON.stringify({
        query: `query {
            AttributeList{
                ID
                Name
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
    let attributeList:Attribute[] = response.data.data.AttributeList;
    return attributeList;
}

export const getRaceList = async (
    loginId:string
):Promise<Race[]>=>{
    let data = JSON.stringify({
        query: `query {
            RaceList{
                ID
                Name
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
    let raceList:Race[] = response.data.data.RaceList;
    return raceList;
}

