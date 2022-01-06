import React, { useEffect, useState } from "react";
import {
  GamesLobbyContainer,
  Main,
  DeckCards,
  BackgroundSection,
  TopRankList,
  ShowSelectedDeckSection,
  StartBtn,
  CardListSection,
  SelectedDeckName,
  UnCreateDeckRemindMsg,
  SmallLogo
} from "./Style";
import { PlayerInfo, UserInfo, DeckInfo } from "types";
import { useSelector } from "react-redux";
import { selectUserInfo } from "reducer/userReducer";
import { useCookie } from "hooks";
import { convertUserInfosToPlayerInfos } from "utils/convertors";
import { getUserInfosRequest } from "api/userRequest";
import { getDeckInfosRequest, getDeckInfoRequest } from "api/deckRequest";
import { Link, useNavigate } from "react-router-dom";

const GamesLobby = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [deckInfos, setDeckInfos] = useState<DeckInfo[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [selectedDeckInfo, setSelectedDeckInfo] = useState<
    DeckInfo | undefined
  >();
  const userInfo: UserInfo = useSelector(selectUserInfo);

  const onDeckClick = (deckId: string) => {
    initialSelectedDeckInfo(deckId);
  };

  const initialSelectedDeckInfo = (deckId: string) => {
    setIsSearching(true);
    getDeckInfoRequest(loginId, deckId)
      .then(setSelectedDeckInfo)
      .then(() => {
        setIsSearching(false);
      })
      .catch(console.error);
  };

  const initialDeckInfos = () => {
    getDeckInfosRequest(loginId, userInfo.ID)
      .then(setDeckInfos)
      .catch(console.error);
  };

  const initialPlayers = () => {
    getUserInfosRequest(loginId)
      .then(convertUserInfosToPlayerInfos)
      .then(setPlayers);
  };

  const onStartClick = () => {
    if (selectedDeckInfo?.ID) {
      navigate(`/game?deckId=${selectedDeckInfo?.ID}`);
    } else {
      alert("尚未選擇牌組");
    }
  };

  useEffect(() => {
    if (userInfo?.ID) {
      initialDeckInfos();
      initialPlayers();
    }
  }, [userInfo]);

  return (
    <GamesLobbyContainer>
      <BackgroundSection>BONK DOGE GAME</BackgroundSection>
      <Main>
        {deckInfos.length > 0 ? (
          <DeckCards
            remindMsg={"SELECT"}
            deckInfos={deckInfos}
            onDeckClick={onDeckClick}
          />
        ) : (
          <UnCreateDeckRemindMsg>
            <span>建立牌組才可以進行對戰啦 🤬</span>
            <Link to="/deckCreate">👉👉 來去建立牌組 👈👈</Link>
          </UnCreateDeckRemindMsg>
        )}
        {selectedDeckInfo && selectedDeckInfo?.CardsInfo ? (
          <ShowSelectedDeckSection>
            <SelectedDeckName>
                <SmallLogo/>
                <span>{selectedDeckInfo.Name}</span>
            </SelectedDeckName>
            <CardListSection
              isLoading={isSearching}
              cardInfos={selectedDeckInfo.CardsInfo}
            />
          </ShowSelectedDeckSection>
        ) : (
          <SelectedDeckName>🤬 尚未選擇要對戰的牌組</SelectedDeckName>
        )}

        <TopRankList players={[...players]} />
        <StartBtn onClick={onStartClick}>GAME START !</StartBtn>
      </Main>
    </GamesLobbyContainer>
  );
};

export default GamesLobby;
