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

export default interface CardInfo {
    UUID: string;
    Name: string;
    Category: "Role" | "Effect";
    Img: string;
    Img_Url:string;
    Effect_Assert?: any;
    Effect_Description: string;
    Nature_ID?: number;
    Nature?: Nature;
    Attribute_ID?: number;
    Star?: number;
    Race_ID?: number;
    Race?: Race;
    Attribute?: Attribute;
    Attack?: number;
    Defense?: number;
}
