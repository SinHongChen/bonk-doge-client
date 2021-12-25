import { CardInfo } from "types/api";

export default interface DeckInfo{
    ID:string,
    Name:string,
    Cards:string[],
    CardsInfo?:CardInfo[],
}