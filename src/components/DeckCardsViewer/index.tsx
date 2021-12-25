import React, { useEffect, useState } from "react";
import {
  DeckCardsViewerContainer,
  CreateDeckCard,
  LoadingSection,
  LoadingLottie,
} from "./Style";
import { getCardInfosRequest } from "api/cardRequest";
import { useCookie } from "hooks";
import { CardInfo, DeckInfo } from "types/api";
import { DeckCard } from "components";
import { animationInfos } from "components/Lottie";

export interface DeckCardsViewerProps {
  mode?: "view" | "edit";
  isLoading?: boolean;
  deckInfos: DeckInfo[];
  onDeckClick: (deckId: string) => void;
  style?: React.CSSProperties;
  className?: string;
}

const DeckCardsViewer = ({
  isLoading,
  mode = "view",
  deckInfos,
  onDeckClick,
  style,
  className,
}: DeckCardsViewerProps) => {
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [cardInfos, setCardInfos] = useState<CardInfo[]>([]);

  const initialCardInfos = (
    keyword?: string | undefined,
    category?: "Role" | "Effect"
  ) => {
    getCardInfosRequest(loginId, keyword, category)
      .then((cardInfos) => setCardInfos([...cardInfos]))
      .catch(console.error);
  };

  useEffect(() => {
    initialCardInfos();
  }, []);

  return (
    <DeckCardsViewerContainer style={style} className={className}>
      {isLoading && (
        <LoadingSection>
          <LoadingLottie autoplay={true} animation={animationInfos.loading} />
        </LoadingSection>
      )}
      {!isLoading && (
        <>
          {deckInfos.length < 4 && mode === "edit" && (
            <CreateDeckCard to="/deckCreate">新增</CreateDeckCard>
          )}
          {deckInfos.map((deckInfo, index) => {
            return (
              <DeckCard
                onClick={() => {
                  onDeckClick(deckInfo.ID);
                }}
                key={index}
                deckInfo={deckInfo}
                cardInfo={cardInfos[0]}
              />
            );
          })}
        </>
      )}
    </DeckCardsViewerContainer>
  );
};

export default DeckCardsViewer;
