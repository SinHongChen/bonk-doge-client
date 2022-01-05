export interface Nature {
    ID: string;
    Name: string;
}

export interface Race {
    ID: string;
    Name: string;
}

export interface Attribute {
    ID: string;
    Name: string;
}

export interface EffectCardInfo{
    Name: string,
    ImgFile: File,
    Nature_ID: string,
    Effect_Assert: string,
    Effect_Description: string
}

export interface RoleCardInfo{
    Name:string,
    ImgFile:File,
    Attribute_ID:string,
    Star:string,
    Race_ID:string,
    Effect_Assert:string,
    Effect_Description:string,
    Attack:string,
    Defense:string
}

export default interface CardInfo {
    UUID: string;
    Name: string;
    Category: "Role" | "Effect";
    Img_Url:string;
    Effect_Assert?: any;
    Effect_Description: string;
    Nature_ID?: string;
    Nature?: Nature;
    Attribute_ID?: string;
    Star?: string;
    Race_ID?: string;
    Race?: Race;
    Attribute?: Attribute;
    Attack?: string;
    Defense?: string;
}

