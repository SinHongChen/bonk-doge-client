import React, { useState,useEffect } from "react";
import {
  BoardContainer,
  EnemyPlace,
  SelfPlace,
  SelfBottomSection,
  PopupFooter,
  EnemyBottomSection,
  SurrenderBtn,
} from "./Style";
import { CardInfo,GameBoardData } from "types";
import { Popup, Button } from "components/Basic";
import { GameCard } from "components";
import BoardCards from "./BoardCards";
import HandCards from "./HandCards";
import PlayerInfobar from "./PlayerInfobar";
import EnemyCards from "./EnemyCards";
import { useNavigate } from "react-router-dom";

export interface BoardProps{
  gameBoardData:GameBoardData,
  setGameBoardData:React.Dispatch<React.SetStateAction<GameBoardData | undefined>>,
  onCardTrigge:(cardId:string,assert:any) => void
}

const Board = ({gameBoardData,setGameBoardData,onCardTrigge}:BoardProps) => {
  const navigate = useNavigate();
  const [enabledPopup, setEnabledPopup] = useState<boolean>(false);
  const [popupCardMode, setPopupCardMode] = useState<
    "board" | "hand" | "enemy"
  >();
  const [selectedCardInfo, setSelectedCardInfo] = useState<CardInfo>();

  const maxBoardCardNumber = 6;

  const attackHandler = (cardInfo:CardInfo)=>{
    let assert = {
      attack: {
        target: cardInfo.UUID
      }
    }
    onCardTrigge(cardInfo.UUID,assert);
  }

  const launchEffectHanlder = (cardInfo:CardInfo)=>{

  }

  const playCardHandler = (cardInfo:CardInfo)=>{
    let data = gameBoardData;
    if(data && data.Self.BoardCards.length < maxBoardCardNumber){
      data.Self.BoardCards.push(cardInfo);
      data.Self.HandCards = data.Self.HandCards.filter((data) => data.UUID !== cardInfo.UUID);
      setGameBoardData(data);
      setEnabledPopup(false);
    }else{
      setEnabledPopup(false);
      alert(`場上卡牌不能超過 ${maxBoardCardNumber} 張`)
    }
  }

  const cardClickHandler = (cardInfo: CardInfo,type:"board" | "hand" | "enemy") => {
    setSelectedCardInfo(cardInfo);
    setPopupCardMode(type);
    setEnabledPopup(true);
  };

  return (
    <BoardContainer>
      <EnemyPlace>
        <EnemyBottomSection>
          <PlayerInfobar
            type="enemy" 
            playerInfo={{hp:4000,name:"陳信宏",pitcure:"https://occ-0-5599-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFN41tH7NkUzMGil3NC18DpDtYZpyCRyCgnoC_wsDDcQHIuCG-mEJ29zR5zBywIj0C_c2N0FDn3cxlqWShRjJGAcbxQ.png?r=d28"}} 
          />
          <EnemyCards cardNumber={3}/>
        </EnemyBottomSection>
        <BoardCards
          cardInofs={gameBoardData?.Enemy.BoardCards ? gameBoardData?.Enemy.BoardCards : []}
          onCardClick={(cardInfo)=>{cardClickHandler(cardInfo,"enemy")}}
        />
      </EnemyPlace>

      <SelfPlace>
        <BoardCards
          cardInofs={gameBoardData?.Self.BoardCards ? gameBoardData?.Self.BoardCards : []}
          onCardClick={(cardInfo)=>{cardClickHandler(cardInfo,"board")}}
        />
        <SelfBottomSection>
          <HandCards cardInfos={gameBoardData?.Self.HandCards ? gameBoardData?.Self.HandCards : []} onCardClick={(cardInfo)=>{cardClickHandler(cardInfo,"hand")}} />
          <PlayerInfobar 
            type="self" 
            playerInfo={{hp:4000,name:"陳信宏",pitcure:"https://occ-0-5599-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFJSe2el5rVnCVz5d1R8pnqYzBiXwEM7ooxTNY1LCrf6HzWO0RCORDzTO9IlOqpmCYCKIVyjPX5xMFw-RLz9WpqYvEg.png?r=93c"}} 
          />
          <SurrenderBtn onClick={()=>{navigate("/")}}>投降 🤕</SurrenderBtn>
        </SelfBottomSection>
      </SelfPlace>
      {selectedCardInfo && enabledPopup && popupCardMode && (
        <Popup
          onClose={() => {
            setEnabledPopup(false);
          }}
        >
          <GameCard cardInfo={selectedCardInfo} />
          <PopupFooter>
            {popupCardMode === "board" && (
              <>
                <Button onClick={()=>{attackHandler(selectedCardInfo)}} type={"submit"}>發動攻擊</Button>
                <Button onClick={()=>{launchEffectHanlder(selectedCardInfo)}} type={"submit"}>發動效果</Button>
              </>
            )}
            {popupCardMode === "hand" && (
              <>
                <Button onClick={()=>{playCardHandler(selectedCardInfo)}} type={"submit"}>出牌</Button>
              </>
            )}
          </PopupFooter>
        </Popup>
      )}
    </BoardContainer>
  );
};

export default Board;
