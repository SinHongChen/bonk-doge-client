import React from 'react';

import { 
    GameCardContainer,
    Image,
    Header,
    DisplayNamebar,
    Content,
    RaceInfobar,
    EffectDescriptionbar,
    Abilitybar,
    NatureInfobar
} from "./Style";
import { CardInfo } from "types/api";

import Starbar from "./Starbar";
import RaceIcon from "./RaceIcon";

export interface GameCardProps {
    card:CardInfo,
    style?:React.CSSProperties,
    className?:string
}

const GameCard = ({card,style,className}:GameCardProps) => {
    const dispatchTheme = (categoryName:string)=>{
        switch(categoryName){
            case "Role":
                return "DeepSpace";
            case "Effect":
                return "PurpleWhite";
            default:
                throw Error();
        }
    }

    return (
        <GameCardContainer className={className} style={style} theme={dispatchTheme(card.Category)}>
            <Header>
                <DisplayNamebar>{card.Name}</DisplayNamebar>
                {card.Category === "Role" &&
                    <RaceIcon raceName={card.Attribute?.Name}/>
                }
            </Header>

            {card.Category === "Role" ?
                <Starbar number={card.Star ? card.Star : 0}/> : 
                <NatureInfobar>【{card.Nature?.Name}】</NatureInfobar>
            }
            
            <Image imgSrc={card.Img_Url}/>
            <Content>
                {card.Category === "Role" &&
                    <RaceInfobar>
                        {card.Race?.Name}
                    </RaceInfobar>
                }

                <EffectDescriptionbar>
                    {card.Effect_Description}
                </EffectDescriptionbar>

                {card.Category === "Role" && 
                    <Abilitybar>
                        {`ATK/${card.Attack} DEF/${card.Defense}`}
                    </Abilitybar>
                }

            </Content>
        </GameCardContainer>
    )
}

export default GameCard
