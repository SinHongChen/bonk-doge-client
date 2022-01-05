import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { DeckInfo } from "types/api";

export const getDeckInfosRequest = async (
    loginId:string,
    userId:string,
):Promise<DeckInfo[]> =>{
    let data = JSON.stringify({
        query:`query { 
            DeckList(User_ID:${userId}){
                ID
                Img_Url
                Name
                Cards
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
    let deckInfos:DeckInfo[] = response.data.data.DeckList;
    return deckInfos;
}

export const getDeckInfoRequest = async (
    loginId:string,
    deckId:string
):Promise<DeckInfo>=>{
    let data = JSON.stringify({
        query:`query { 
            DeckGet(ID:${deckId}){ 
                ID
                Cards
                Name
                CardsInfo {
                    UUID
                    Name
                    Category
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
    let deckInfo:DeckInfo = response.data.data.DeckGet;
    return deckInfo;
}


export const createDeckRequest = async (
    loginId:string,
    userId:string,
    deckName:string,
    cards:string[]
):Promise<string>=>{
    let data = JSON.stringify({
        query: `mutation{
            DeckCreate(User_ID:${userId},Name:"${deckName}",UUID_Array:${JSON.stringify(cards)}){
                ID
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
    let deckId:string = response.data.data.DeckCreate.ID;
    return deckId;
}

export const updateDeckRequest = async (
    loginId:string,
    deckId:string,
    deckName:string,
    cards:string[]
):Promise<string>=>{
    let data = JSON.stringify({
        query: `mutation{
            DeckUpdate(ID:${deckId},Name:"${deckName}",UUID_Array:${JSON.stringify(cards)}){
                ID
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
    let id:string = response.data.data.DeckUpdate.ID;
    return id;
}

export const deleteDeckRequest = async (
    loginId:string,
    deckId:string,
):Promise<AxiosResponse<any>>=>{
    let data = JSON.stringify({
        query: `mutation{
            DeckDelete(ID:"${deckId}")
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


