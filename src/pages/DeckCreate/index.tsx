import React, { useEffect, useState } from "react";
import {
  DeckCreateContainer,
  DeckToolbar,
  Header,
  UploadingAnimation,
  UploadingSection,
  ErrorMsg
} from "./Style";
import { GameCardsViewer } from "components";
import { Input } from "components/Basic";
import { SelectCardInfos } from "components/GameCardsViewer";
import { getCardInfosRequest } from "api/cardRequest";
import { createDeckRequest } from "api/deckRequest";
import { CardInfo, UserInfo } from "types";
import { useCookie } from "hooks";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "reducer/userReducer";
import { useNavigate } from "react-router-dom";
import { animationInfos } from "components/Lottie";

const DeckCreate = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useCookie("login-id", "");
  const userInfo: UserInfo = useSelector(selectUserInfo);

  const [cardInfos, setCardInfos] = useState<CardInfo[]>([]);
  const [selectCardInfos, setSelectCardInfos] = useState<SelectCardInfos[]>([]);

  const [isSearching, setIsSearching] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [enabledErrorMsg, setEnabledErrorMsg] = useState(false);

  const deckNameRef = useRef<HTMLInputElement>(null);

  const validate = (cards: string[], deckName: string) => {
    if (deckName.length > 0 && cards.length > 0 && cards.length < 40) {
      return true;
    }
    return false;
  };

  const getCreateDeckParam = () => {
    let cards = selectCardInfos
      .filter((data) => data.isSelected)
      .map((data) => data.UUID);
    let deckName = deckNameRef.current?.value ? deckNameRef.current?.value : "";
    return {
      cards: cards,
      deckName: deckName,
    };
  };

  const initialCardInfos = () => {
    setIsSearching(true);
    getCardInfosRequest(loginId)
      .then(setCardInfos)
      .then(() => {
        setIsSearching(false);
      })
      .catch(console.error);
  };

  const createDeck = async (deckName: string, cards: string[]) => {
    setIsUploading(true);
    createDeckRequest(loginId, userInfo.ID, deckName, cards)
      .then((deckId) => {
        setIsUploading(false);
        navigate(`/deck/${deckId}`);
      })
      .catch((error) => {
        setIsUploading(false);
        console.error(error);
      });
  };

  const onSubmitHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
    let { cards, deckName } = getCreateDeckParam();
    if (validate(cards, deckName)) {
      createDeck(deckName, cards);
    } else {
       setEnabledErrorMsg(true);
    }
  };

  useEffect(() => {
    initialCardInfos();
  }, []);

  return (
    <DeckCreateContainer>
      {isUploading && (
        <UploadingSection>
          <UploadingAnimation
            autoplay={true}
            animation={animationInfos.loading2}
          />
        </UploadingSection>
      )}
      {!isUploading && (
        <>
          <Header>
            <Input
              valueRef={deckNameRef}
              placeholder={"牌組名稱"}
            />
            <DeckToolbar
              onCancel={() => {
                navigate(`/deck`);
              }}
              onSubmit={onSubmitHandler}
            />
          </Header>
          {enabledErrorMsg &&
            <ErrorMsg>* 請至少選擇一張卡牌,牌組名稱至少大於一個字</ErrorMsg>
          }
          <GameCardsViewer
            onSelectedChange={setSelectCardInfos}
            enableEdit={true}
            isLoading={isSearching}
            cardInfos={cardInfos}
          />
        </>
      )}
    </DeckCreateContainer>
  );
};

export default DeckCreate;
