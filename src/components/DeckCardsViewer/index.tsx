import React from "react";
import {
  DeckCardsViewerContainer,
  CreateDeckCard,
  LoadingSection,
  LoadingLottie,
  GridViewSection,
  ScrollViewSection,
} from "./Style";
import { DeckInfo } from "types/api";
import { DeckCard } from "components";
import { animationInfos } from "components/Lottie";

export interface DeckCardsViewerProps {
  mode?: "gridView" | "edit" | "scrollView";
  isLoading?: boolean;
  deckInfos: DeckInfo[];
  onDeckClick: (deckId: string) => void;
  style?: React.CSSProperties;
  className?: string;
  remindMsg?:string;
}

const DeckCardsViewer = ({
  isLoading,
  mode = "gridView",
  deckInfos,
  onDeckClick,
  style,
  className,
  remindMsg
}: DeckCardsViewerProps) => {
  const maxDeckNumber = parseInt(`${process.env.REACT_APP_MAX_DECK_NUMBER}`);
  
  return (
    <DeckCardsViewerContainer style={style} className={className}>
      {isLoading && (
        <LoadingSection>
          <LoadingLottie autoplay={true} animation={animationInfos.loading} />
        </LoadingSection>
      )}
      {!isLoading && (
        <GridViewSection>
          {deckInfos.length < maxDeckNumber && mode === "edit" && (
            <CreateDeckCard to="/deckCreate">CREATE</CreateDeckCard>
          )}
          {deckInfos.map((deckInfo, index) => {
            return (
              <DeckCard
                onClick={() => {
                  onDeckClick(deckInfo.ID);
                }}
                remindMsg={remindMsg}
                key={index}
                deckInfo={deckInfo}
              />
            );
          })}
        </GridViewSection>
      )}
    </DeckCardsViewerContainer>
  );
};

export default DeckCardsViewer;
