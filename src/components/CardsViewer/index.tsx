import React from 'react'

import { GameCard } from "components";
import { CardsViewerContainer,LoadingSection,LottieStyle,EmptySection } from "./Style";
import { CardInfo } from "types/api";
import Lottie,{ animationInfos } from "components/Lottie";
import { useNavigate } from "react-router-dom";

export interface DeckProps {
    cards:CardInfo[],
    viewMode?:"list" | "grid",
    isLoading?:boolean
}

const CardsViewer = ({cards,viewMode="grid",isLoading = true}:DeckProps) => {
    const navigate = useNavigate();

    const onCardClickHandler = (cardId:string)=>{
        navigate(`/editCard/${cardId}`)
    }

    return (
        <>
            {isLoading && <LoadingSection><Lottie autoplay={true} style={LottieStyle} animation={animationInfos.loading}/></LoadingSection>}
            {!isLoading && cards.length > 0 &&
                <CardsViewerContainer>   
                    {cards.map((card,index)=>{
                        return ( 
                            <GameCard onClick={()=>{onCardClickHandler(card.UUID)}} key={index} card={card}/>
                        )
                    })}
                </CardsViewerContainer>
            }
            {!isLoading && cards.length <= 0 &&
                <EmptySection>   
                    Empty
                </EmptySection>
            }
        </>

    )
}

export default CardsViewer
