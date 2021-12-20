import {
    UserInfo,
    PlayerInfo,
} from "types";
import {
    RoleCardInfo,
    EffectCardInfo
} from "types/api";

export const convertUserInfoToPlayerInfo = (userInfo: UserInfo): PlayerInfo => {
    return {
        ID: userInfo.ID,
        Name: userInfo.Name,
        Victory: userInfo.Victory,
        Defeat: userInfo.Defeat
    }
}

export const convertUserInfosToPlayerInfos = (userInfos: UserInfo[]): PlayerInfo[] => {
    return userInfos.map((userInfo: UserInfo): PlayerInfo => {
        return {
            ID: userInfo.ID,
            Name: userInfo.Name,
            Victory: userInfo.Victory,
            Defeat: userInfo.Defeat
        }
    })
}

export const convertFormValuesToRoleCardInfo = (values: any): RoleCardInfo => {
    return {
        Name: values.name,
        ImgFile: values.upload[0].originFileObj,
        Attribute_ID: values.attribute,
        Star: values.star,
        Race_ID: values.race,
        Effect_Assert: values.effectAssert,
        Effect_Description: values.effectDescription,
        Attack: values.attack,
        Defense: values.defense,
    }
}

export const convertFormValuesToEffectCardInfo = (values: any): EffectCardInfo => {
    return {
        Name: values.name,
        ImgFile: values.upload[0].originFileObj,
        Effect_Assert: values.effectAssert,
        Effect_Description: values.effectDescription,
        Nature_ID: values.nature
    }
}