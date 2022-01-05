import React, { useState, useEffect } from "react";
import { CardInfo, DeckInfo } from "types/api";
import {
  DeckCardContainer,
  SmallLogo,
  RemindMsg,
  RenderToLeftBlock,
  RenderToRightBlock,
} from "./Style";
export interface DeckProps {
  deckInfo: DeckInfo;
  isSelected?: boolean;
  remindMsg?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DeckCard = ({
  deckInfo,
  isSelected = false,
  onClick,
  remindMsg,
}: DeckProps) => {
  const [enabledRemind, setEnabledRemind] = useState(false);

  return (
    <DeckCardContainer
      onMouseOut={() => {
        setEnabledRemind(false);
      }}
      onMouseOver={() => {
        setEnabledRemind(true);
      }}
      onClick={onClick}
      isSelected={isSelected}
    >
      <RenderToLeftBlock index={0}>{deckInfo.Name}</RenderToLeftBlock>
      <RenderToRightBlock index={1} />
      <RenderToLeftBlock index={2} />
      <RenderToRightBlock index={3} />
      <SmallLogo />
      {remindMsg && <RemindMsg isShow={enabledRemind}>{remindMsg}</RemindMsg>}
    </DeckCardContainer>
  );
};

export default DeckCard;
