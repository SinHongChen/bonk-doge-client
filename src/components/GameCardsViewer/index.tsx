import React from "react";

import {
  ShowCard,
  GameCardsViewerContainer,
  LoadingLottie,
  EmptySection,
  GirdViewer,
  ListViewer,
  LoadingSection
} from "./Style";
import { CardInfo } from "types/api";
import { animationInfos } from "components/Lottie";
import { useState } from "react";
import { useEffect } from "react";

export interface SelectCardInfos {
  UUID: string;
  isSelected: boolean;
}

export interface GameCardsViewerProps {
  cardInfos: CardInfo[];
  enableEdit?: boolean;
  viewMode?: "list" | "grid";
  isLoading?: boolean;
  onCardClick?: (cardId: string) => void;
  onSelectedChange?: (selectCardInfos: SelectCardInfos[]) => void;
}

const GameCardsViewer = ({
  cardInfos,
  enableEdit = false,
  viewMode = "grid",
  isLoading = true,
  onCardClick,
  onSelectedChange,
}: GameCardsViewerProps) => {
  const [selectCardInfos, setSelectCardInfos] = useState<SelectCardInfos[]>([]);

  const cardClickHaldler = (index: number) => {
    let newSelectCardInfos = selectCardInfos;
    newSelectCardInfos[index].isSelected =
      !newSelectCardInfos[index].isSelected;
    setSelectCardInfos([...newSelectCardInfos]);

    if (typeof onCardClick === "function") {
      onCardClick(cardInfos[index].UUID);
    }
    if (typeof onSelectedChange === "function") {
      onSelectedChange(newSelectCardInfos);
    }
  };

  const convertCardInfosToSelectCardInfos = (
    cardInfos: CardInfo[]
  ): SelectCardInfos[] => {
    return cardInfos.map((cardInfo) => {
      return {
        UUID: cardInfo?.UUID,
        isSelected: false,
      };
    });
  };

  useEffect(() => {
    if (cardInfos.length > 0) {
      setSelectCardInfos(convertCardInfosToSelectCardInfos(cardInfos));
    }
  }, [cardInfos]);

  return (
    <GameCardsViewerContainer isLoading={isLoading}>
      {!isLoading && cardInfos.length <= 0 && 
        <EmptySection>Empty</EmptySection>
      }

      {isLoading && (
        <LoadingSection>
          <LoadingLottie
            autoplay={true}
            animation={animationInfos.loading}
          />
        </LoadingSection>
      )}

      {!isLoading && cardInfos.length > 0 && viewMode === "grid" && (
        <GirdViewer>
          {
            cardInfos.map((cardInfo, index) => {
              return (
                <ShowCard
                  enableEdit={enableEdit}
                  onClick={() => {
                    cardClickHaldler(index);
                  }}
                  isSelected={selectCardInfos[index]?.isSelected}
                  key={index}
                  cardInfo={cardInfo}
                />
              );
            })
          }
        </GirdViewer>
      )}

      {!isLoading && cardInfos.length > 0 && viewMode === "list" && (
        <ListViewer>
          {
            cardInfos.map((cardInfo, index) => {
              return (
                <ShowCard
                  enableEdit={enableEdit}
                  onClick={() => {
                    cardClickHaldler(index);
                  }}
                  isSelected={selectCardInfos[index]?.isSelected}
                  key={index}
                  cardInfo={cardInfo}
                />
              );
            })
          }
        </ListViewer>
      )}

    </GameCardsViewerContainer>
  );
};

export default GameCardsViewer;
