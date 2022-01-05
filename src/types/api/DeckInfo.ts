import { CardInfo } from "types/api";

export default interface DeckInfo{
    ID:string,
    Img_Url:string,
    Name:string,
    Cards:string[],
    CardsInfo?:CardInfo[],
}