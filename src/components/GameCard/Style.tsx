import styled from "styled-components";
import { ScrollbarCss } from "styles/Scrollbar";

const themesBgColor = {
    DeepSpace : "var(--deep-space)",
    PurpleWhite : "var(--purple-white)",
    Decent : "var(--decent)",
    Sunkist : "var(--sunkist)",
    SeaBlue:"var(--sea-blue)"
}

const getCardBgColor = (theme:"DeepSpace" | "Decent" | "PurpleWhite" | "Sunkist" | "SeaBlue")=>{
    switch(theme){
        case "DeepSpace":
            return themesBgColor.DeepSpace;
        case "Decent":
            return themesBgColor.Decent;
        case "PurpleWhite":
            return themesBgColor.PurpleWhite;
        case "Sunkist":
            return themesBgColor.Sunkist;
        case "SeaBlue":
            return themesBgColor.SeaBlue;
        default:
            throw Error();  
    }
}


export interface GameCardContainerProps {
    theme:"DeepSpace" | "Decent" | "PurpleWhite" | "Sunkist" | "SeaBlue",
}

export const GameCardContainer = styled.div<GameCardContainerProps>`
    box-shadow: 1px 1px 5px 1px rgba(100,100,100,0.1);
    border-radius: 0.2em;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 10px;
    box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.7);
    color: white;
    width: 260px;
    height:  415px;
    background: ${props=> getCardBgColor(props.theme)};
    position: relative;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    box-shadow: 2px 2px 8px 1px rgba(0,0,0,0.6);
    padding: 5px 8px;
    border-radius: 0.2em;
`

export const DisplayNamebar = styled.h5`
    letter-spacing: 1px;
    color: white;
    padding:0px;
    margin:0px;
    font-weight: bold;
    font-size:13px;
`

export const NatureInfobar = styled.div`
    height: 15px;
    width: 100%;
    text-align: right;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
`

export interface ImageProps {
    imgSrc:string
}

export const Image = styled.div<ImageProps>`
    width: 100%;
    min-height: 180px;
    position: relative;
    display: block;
    background-image: ${props => `url(${props.imgSrc})`};
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 0.2em;
    box-shadow: 1px 1px 3px 1px rgba(50,50,50,0.6);
`

export const RaceInfobar = styled.div`
    font-size: 0.8em;
`

export const EffectDescriptionbar = styled.div`
    font-size: 12px;
    min-height: 60px;
    max-height: 60px;
    overflow: auto;
    text-indent: 28px;
    ${ScrollbarCss};
    ::-webkit-scrollbar {
        width: 5px;
    }
`

export const Abilitybar = styled.h5`
    text-align: right;
    border-top: 1px solid white;
    padding-top: 8px;
    font-size: 1em;
    color:var(--text-color-1);
    font-weight: bold;
`


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    grid-gap: 6px;
    padding: 8px;
    border-radius: 0.2em;
    background-color: rgba(0, 0, 0, 0.2);
    transition:all 0.5s linear;
    height: 140px;
    &:hover{
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
    }
`