import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { 
    CardInfo,
    Attribute,
    Nature,
    Race
} from "types/api";

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

