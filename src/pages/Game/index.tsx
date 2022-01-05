import React, { useEffect, useState } from "react";
import {
  GameContainer,
  WattingMatchSection,
  Main,
  BackgroundSection,
} from "./Style";
import { useLocation, useNavigate } from "react-router-dom";
import { GameBoard } from "components";
import { useCookie, useGameSocket } from "hooks";
import { getCardInfosRequest } from "api/cardRequest";
import { GameBoardData, SocketRequest } from "types";

const Game = () => {
  const sessionKey = `${process.env.REACT_APP_SESSION_LOGIN_KEY}`;
  const [loginId, setLoginId] = useCookie(sessionKey, "");
  const { socketResponse, setSocketRequest } = useGameSocket(loginId);
  const [isSearching, setIsSearching] = useState(true);
  const [gameBoardData, setGameBoardData] = useState<GameBoardData>();
  const location = useLocation();
  const navigate = useNavigate();

  const getParams = () => {
    let search = location.search;
    let params = new URLSearchParams(search);
    let deckId = params.get("deckId");
    return { deckId };
  };

  const initialGameBoardData = () => {
    getCardInfosRequest(loginId)
      .then((cardInfos) =>
        setGameBoardData({
          Enemy: {
            ID: "DWFWQFWQFWFWQFWQFQWF",
            HP: 4000,
            HandCardsNumber: 3,
            BoardCards: cardInfos.slice(0, 3),
          },
          Self: {
            HP: 4000,
            HandCards: cardInfos.slice(4, 8),
            BoardCards: cardInfos.slice(0, 4),
          },
        })
      )
      .catch(console.error);
  };

  const onCardTrigge = (cardId: string, assert: any) => {
    let data:SocketRequest = {
        cmd:'ASSERT',
        data:{card:cardId,...assert}
    };
    setSocketRequest(data);
  };

  useEffect(() => {
    let { deckId } = getParams();
    if (!deckId) {
      navigate("/gameLobby");
    }
  }, [location]);

  useEffect(() => {
    if (socketResponse?.msg === "PLAYER_FOUND") {
      console.log(JSON.parse(socketResponse.data));
      setIsSearching(false);
      initialGameBoardData();
    }
  }, [socketResponse]);

  return (
    <GameContainer>
      {isSearching && (
        <WattingMatchSection>請稍等 批配對手中 ....</WattingMatchSection>
      )}
      {!isSearching && gameBoardData && (
        <>
          <BackgroundSection>BONK DOGE GAME</BackgroundSection>
          <Main>
            <GameBoard
              gameBoardData={gameBoardData}
              setGameBoardData={setGameBoardData}
              onCardTrigge={onCardTrigge}
            />
          </Main>
        </>
      )}
    </GameContainer>
  );
};

export default Game;
