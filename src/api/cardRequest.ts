import request from "utils/AxiosRequest";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { CardInfo } from "types";

export const getCardInfosRequest = async (
    keyword?:string,
    category?:"Role" | "Effect"
)=>{
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
        data:data
    }
    let response:AxiosResponse<any> = await request<any>(config);
    let cardInfos:CardInfo[] = response.data.data.CardList;
    return cardInfos;
}