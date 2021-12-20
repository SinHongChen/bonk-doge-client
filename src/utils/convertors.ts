import {
    UserInfo,
    PlayerInfo
} from "types";

export const convertUserInfoToPlayerInfo = (userInfo:UserInfo):PlayerInfo=>{
    return {
        ID: userInfo.ID,
        Name: userInfo.Name,
        Victory: userInfo.Victory,
        Defeat: userInfo.Defeat
    }
}

export const convertUserInfosToPlayerInfos = (userInfos:UserInfo[]):PlayerInfo[]=>{
    return userInfos.map((userInfo:UserInfo):PlayerInfo=>{
        return {
            ID: userInfo.ID,
            Name: userInfo.Name,
            Victory: userInfo.Victory,
            Defeat: userInfo.Defeat
        }
    })
}