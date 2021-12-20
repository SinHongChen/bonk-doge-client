import request,{ createUploadSigleFileForm } from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { 
    CardInfo,
    RoleCardInfo,
    EffectCardInfo,
    Attribute,
    Nature,
    Race
} from "types/api";

//TODO: 沒有拿取單一卡片的 api 

/**
 * 取得多張卡片,可能包含了 Role 跟 Effect 兩種卡牌種類
 * @param loginId 
 * @param keyword 關鍵字
 * @param category 卡牌種類 Role:角色卡 Effect:效果卡
 * @returns 
 */
export const getCardInfosRequest = async (
    loginId:string,
    keyword?:string,
    category?:"Role" | "Effect",
):Promise<CardInfo[]> =>{
    let data = JSON.stringify({
        query:`query { 
            CardList(Keyword:"${keyword ? keyword : ""}",Category:"${category ? category : ""}"){ 
                UUID
                Name
                Category
                Img
                Img_Url
                Effect_Assert
                Effect_Description
                Nature_ID
                Nature{
                    ID 
                    Name
                }
                Attribute_ID
                Star
                Race_ID
                Race{
                    ID 
                    Name
                }
                Attribute{
                    ID 
                    Name
                }
                Attack
                Defense
            }
        }`,
        variables: {}
    });
    
    let config:AxiosRequestConfig = {
        method:"POST",
        data:data,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":loginId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let cardInfos:CardInfo[] = response.data.data.CardList;
    return cardInfos;
}

export const getCardInfoRequest = async (
    loginId:string,
    cardId:string
):Promise<CardInfo> =>{
    let data = JSON.stringify({
        query:`query { 
            CardGet(UUID:"${cardId}"){ 
                UUID
                Name
                Category
                Img
                Img_Url
                Effect_Assert
                Effect_Description
                Nature_ID
                Nature{
                    ID 
                    Name
                }
                Attribute_ID
                Star
                Race_ID
                Race{
                    ID 
                    Name
                }
                Attribute{
                    ID 
                    Name
                }
                Attack
                Defense
            }
        }`,
        variables: {}
    });
    
    let config:AxiosRequestConfig = {
        method:"POST",
        data:data,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":loginId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let cardInfo:CardInfo = response.data.data.CardGet;
    return cardInfo;
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

//#region 卡片管理 API

export const createRoleCardRequest = async (
    loginId:string,
    roleCardInfo:RoleCardInfo
):Promise<AxiosResponse<any>> =>{
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            RoleCardCreate(
                Name:"${roleCardInfo.Name}",
                Img:$file,
                Attribute_ID:"${roleCardInfo.Attribute_ID}",
                Star: "${roleCardInfo.Star}",
                Race_ID: "${roleCardInfo.Race_ID}",
                Effect_Assert: "${roleCardInfo.Effect_Assert}",
                Effect_Description: "${roleCardInfo.Effect_Description}",
                Attack: "${roleCardInfo.Attack}",
                Defense: "${roleCardInfo.Defense}",
            )
        }`,
        variables: {}
    });
    let formData = createUploadSigleFileForm(operations,roleCardInfo.ImgFile);
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

export const createEffectCardRequest = async (
    loginId:string,
    effectCardInfo:EffectCardInfo
):Promise<AxiosResponse<any>> =>{
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            EffectCardCreate(
                Name: "${effectCardInfo.Name}"
                Img: $file
                Nature_ID: "${effectCardInfo.Nature_ID}"
                Effect_Assert: "${effectCardInfo.Effect_Assert}"
                Effect_Description: "${effectCardInfo.Effect_Description}"
            )
        }`,
        variables: {}
    });
    
    let formData = createUploadSigleFileForm(operations,effectCardInfo.ImgFile);
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

export const updateRoleCardRequest = async (
    loginId:string,
    cardId:string,
    roleCardInfo:RoleCardInfo
):Promise<AxiosResponse<any>> =>{
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            RoleCardUpdate(
                UUID:"${cardId}",
                Name:"${roleCardInfo.Name}",
                Img:$file,
                Attribute_ID:"${roleCardInfo.Attribute_ID}",
                Star: "${roleCardInfo.Star}",
                Race_ID: "${roleCardInfo.Race_ID}",
                Effect_Assert: "${roleCardInfo.Effect_Assert}",
                Effect_Description: "${roleCardInfo.Effect_Description}",
                Attack: "${roleCardInfo.Attack}",
                Defense: "${roleCardInfo.Defense}",
            )
        }`,
        variables: {}
    });
    let formData = createUploadSigleFileForm(operations,roleCardInfo.ImgFile);
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
 
export const updateEffectCardRequest = async (
    loginId:string,
    cardId:string,
    effectCardInfo:EffectCardInfo
):Promise<AxiosResponse<any>> =>{
    let operations = JSON.stringify({
        query:`mutation($file:Upload!) { 
            EffectCardUpdate(
                UUID:"${cardId}",
                Name: "${effectCardInfo.Name}"
                Img: $file
                Nature_ID: "${effectCardInfo.Nature_ID}"
                Effect_Assert: "${effectCardInfo.Effect_Assert}"
                Effect_Description: "${effectCardInfo.Effect_Description}"
            )
        }`,
        variables: {}
    });
    
    let formData = createUploadSigleFileForm(operations,effectCardInfo.ImgFile);
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

//TODO: 刪除卡片只要一個 api 就好

export const deleteCardRequest = async (
    loginId:string,
    cardId:string
):Promise<AxiosResponse<any>> =>{
    let operations = JSON.stringify({
        query:`mutation { 
            CardDelete(
                UUID:"${cardId}"
            )
        }`,
        variables: {}
    });
    
    let config:AxiosRequestConfig = {
        method:"POST",
        data:operations,
        headers: { 
            'Content-Type': 'application/json',
            "session-id":loginId,
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    return response;
}

//#endregion
