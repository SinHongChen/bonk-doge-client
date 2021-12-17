import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { CardInfo } from "types/api";

export const getCardInfosRequest = async (
    sessionId:string,
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
            "session-id":sessionId
        }
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let cardInfos:CardInfo[] = response.data.data.CardList;
    return cardInfos;
}