import { io } from "socket.io-client";
import { CardInfo,SocketResponse, } from "types";

const url = process.env.REACT_APP_SOCKET_URL;


export interface EmemyInfo{
    userId:string,
    boardCards:CardInfo[],
    handCardsNumber:number,
    remainingCardsNumber:number,
    hp:number
}

export interface SelfInfo{
    boardCards:CardInfo[],
    handCards:CardInfo[],
    remainingCardsNumber:number
    hp:number
}

export interface GameBoardData {
    enemy:EmemyInfo,
    self:SelfInfo
}

const realUrl = `${process.env.REACT_APP_SOCKET_URL}`

export default class SocketConnect{
    socket:any;

    constructor(loginId:string){
        this.socket = io(`${realUrl}`,{
            extraHeaders: {
                "session-id":loginId
            }
        });

        this.socket.emit("playerQueue");

        this.socket.on("playerQueue",(data:any)=>{
            let res:SocketResponse = JSON.parse(data);
            if(res.msg === "PLAYER_FOUND"){
            }else{
            }
        });

        this.socket.on("connect", () => {
            console.log("connect success");
        });
    
        this.socket.on("disconnect", (reason:any) => {
            console.log(reason)
        });
    }
}

/**
 *
 * TODO: socket on("game is over") 持續監聽遊戲是否結束
 *
 * {
 *  state:boolean
 * }
 *
 * TODO: socket on("refresh game board") 持續監聽場上變更
 *
{
 enemy:{
    boardCards:cards[], // 場地上的卡牌ID 
    handCardsNumber:number, // 手牌數量,不用知道對方手牌
    remainingCardsNumber:number, // 剩餘卡牌數量
    hp:number // 血量
 },
 self:{
    boardCards:cards[], // 場地上的卡牌ID 
    handCards:cards[], // 手上的卡牌ID
    remainingCardsNumber:number, // 剩餘卡牌數量
    hp:number // 血量
 }
}
 *
 * TODO: socket emit("take a card") 抽取一張卡牌
 *
 * TODO: socket emit("launch card effect") 發動效果
 *
 * {
 *  cardId:string
 * }
 *
 * TODO: socket emit("card attack") 卡牌發動攻擊
 *
 * {
 *  cardId:string,
 *  attackTargetId:string
 * }
 */



