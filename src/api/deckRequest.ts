import request from "utils/request";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { Deck } from "types/api";

export const getDeckListRequest = async (
    loginId:string,
    userId?:string,
):Promise<Deck[]> =>{
    let data = JSON.stringify({
        query:`query { 
            DeckList(User_ID:"${userId}){ 
                ID
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
    let deckList:Deck[] = response.data.data.DeckList;
    return deckList;
}