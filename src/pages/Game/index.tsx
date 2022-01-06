import React, { useEffect, useState } from "react";
import {
  GameContainer,
  WattingMatchSection,
  Main,
  BackgroundSection,
  MatchAnimation,
  InitialGameInfoSection
} from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import GameBoard,{ GameBoardData } from "components/GameBoard";
import { Button } from "components/Basic";
import { animationInfos } from "components/Lottie";
import { useCookie, useGameSocket } from "hooks";
import { getCardInfosRequest } from "api/cardRequest";
import { useSelector } from "react-redux";
import { selectUserInfo } from "reducer/userReducer";
import { 
  SocketRequest,
  SocketResponse,
  CardInfo,
  GameInfo,
  GameOverInfo,
  PlayerFoundInfo,
  UserInfo
 } from "types";

const Game = () => {
  const sessionKey = `${process.env.REACT_APP_SESSION_LOGIN_KEY}`;
  const [loginId, setLoginId] = useCookie(sessionKey, "");
  const { socketResponse, setSocketRequest } = useGameSocket(loginId);
  const [stage, setStage] = useState<"FOUND_PLAYER" | "INIT_GAMEINFO" | "FINISH">("FOUND_PLAYER");
  const [gameBoardData, setGameBoardData] = useState<GameBoardData>();
  const [cardInfos,setCardInfos] = useState<CardInfo[]>([]);
  const location = useLocation();
  const navigate = useNavigate();
  const userInfo: UserInfo = useSelector(selectUserInfo);

  const getParams = () => {
    let search = location.search;
    let params = new URLSearchParams(search);
    let deckId = params.get("deckId");
    return { deckId };
  };

  const initialCardInfos = () => {
    getCardInfosRequest(loginId)
      .then(setCardInfos)
      .catch(console.error);
  };

  // socket request 初始化牌組資訊
  const initialGameDeck = (deckId:string)=>{
    let data:SocketRequest = {
        cmd:'INIT',
        data: { deck:deckId }
    };
    setSocketRequest(data);
  }

  // socket request 抽牌
  const takeCard = ()=>{
    let data:SocketRequest = {
      cmd:'TAKE_CARD',
      data:{}
    };
    setSocketRequest(data);
  }

  // socket request 出牌
  const putCard = (cardId:string)=>{
    let data:SocketRequest = {
      cmd:'PUT_CARD',
      data:{card:cardId}
    };
    setSocketRequest(data);
  }

  // socket request 投降
  const surrender = ()=>{
    console.log("投降")
    let data:SocketRequest = {
      cmd:'SURRENDER',
      data:{}
    };
    setSocketRequest(data);
  }

  // socket request 卡牌發動效果或是攻擊
  const cardAssert = (cardId: string, assert: any) => {
    let data:SocketRequest = {
        cmd:'ASSERT',
        data:{card:cardId,...assert}
    };
    setSocketRequest(data);
  };

  const dispatchResponseHandler = (socketResponse:SocketResponse | undefined)=>{
    switch(socketResponse?.msg){
      case "PLAYER_FOUND":
        playerFoundHandler(socketResponse?.data);
        break;
      case "PLAYER_ALREADY_IN_QUEUE":
        navigate("/gameLobby");
        break;
      case "GAME_INFO":
        updateGameInfo(socketResponse.data);
        break;
      case "GAME_OVER":
        gameOverHandler(socketResponse?.data);
        break;
      default :
        break ;
    }
  }

  const updateGameInfo = (gameInfo:GameInfo)=>{
    console.table(gameInfo);
    setGameBoardData(convertGameInfoToGameBoardData(gameInfo));
    setStage("FINISH");
  }

  const gameOverHandler = (data:GameOverInfo)=>{
    switch(data.reason){
      case "QUIT":
        navigate("/gameLobby");
        break;
      case "SURRENDER":
        navigate("/gameLobby");
        break;
      default:
        throw Error("GAME_OVER 不正常結束");
    }
  }

  const playerFoundHandler = (data:PlayerFoundInfo)=>{
    let { deckId } = getParams();
    if (!deckId) {
      navigate("/gameLobby");
      return;
    }
    else{
      setStage("INIT_GAMEINFO");
      initialCardInfos();
      initialGameDeck(deckId);
    }
  }

  const convertGameInfoToGameBoardData = (gameInfo:GameInfo):GameBoardData=>{
    console.log(`userId : ${userInfo.ID}`);
    return {
      currentRound:gameInfo.currentPlayer == userInfo.ID ? "SELF" : "ENEMY",
      enemy:{
        hp:gameInfo.enemy.hp,
        remainingCardsNumber:gameInfo.enemy.remainingCardsNumber,
        handCardsNumber:gameInfo.enemy.handCardsNumber,
        boardCardInfos:convertCardsToCardInfos(gameInfo.enemy.boardCards)
      },
      self:{
        hp:gameInfo.self.hp,
        remainingCardsNumber:gameInfo.self.remainingCardsNumber,
        handCardInfos:convertCardsToCardInfos(gameInfo.self.handCards),
        boardCardInfos:convertCardsToCardInfos(gameInfo.self.boardCards)
      }
    }
  }

  const convertCardsToCardInfos = (cards:string[]):CardInfo[]=>{
    return cards.reduce((acc:CardInfo[],cardId:string)=>{
      let cardInfo = cardInfos.find((cardInfo)=>cardInfo.UUID === cardId);
      if(cardInfo) return [...acc,cardInfo];
      else { return acc }
    },[]);
  }

  const cancelGameHandler = ()=>{
    navigate("/gameLobby");
  }

  useEffect(() => {
      dispatchResponseHandler(socketResponse);
  }, [socketResponse]);

  return (
    <GameContainer>
      {stage === "FOUND_PLAYER" && (
        <WattingMatchSection>
          <MatchAnimation animation={animationInfos.match} autoplay={true}/>
          <Button type={"submit"} onClick={cancelGameHandler}>CANCEL GAME</Button>
        </WattingMatchSection>
      )}
      {stage === "INIT_GAMEINFO" && (
        <InitialGameInfoSection>初始化遊戲資料 ...</InitialGameInfoSection>
      )}
      {stage === "FINISH" && gameBoardData && (
        <>
          <BackgroundSection>BONK DOGE GAME</BackgroundSection>
          <Main>
            <GameBoard
              gameBoardData={gameBoardData}
              onRoundOver={()=>{}}
              setGameBoardData={setGameBoardData}
              onCardAssert={cardAssert}
              onSurrender={surrender}
              onTakeCard={takeCard}
              onPutCard={putCard}
            />
          </Main>
        </>
      )}
    </GameContainer>
  );
};

export default Game;
