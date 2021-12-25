import styled, { keyframes } from "styled-components";
import { ScrollbarCss } from "styles/Scrollbar";
import { deviceMedia } from "styles/Device";
import { GameCard } from "components";
import Lottie  from "components/Lottie";

export interface CardsViewerContainerProps {
  isLoading: boolean;
}

export const GameCardsViewerContainer = styled.div<CardsViewerContainerProps>`
  background: var(--bg-color-2);
  overflow: auto;
  border-radius: 0.2em;
  border: 1px solid var(--border-color-1);
  ${ScrollbarCss};
  padding: 20px;
  height: 100%;
  width: 100%;
`;

export const CardShowAnimation = keyframes`
  0% { transform:scale(0.86) rotateY(0deg)  }
  100% { transform:scale(0.86) rotateY(360deg) }
`;

export interface ShowCardProps {
  isSelected?: boolean;
  enableEdit?: boolean;
}

export const ShowCard = styled(GameCard)<ShowCardProps>`
  transform: scale(0.92);
  border: ${(props) =>
    props.isSelected && props.enableEdit
      ? "1px solid var(--text-color-3)"
      : ""};

  &:hover {
    cursor: ${(props) => (props.enableEdit ? "pointer" : "")};
  }
`;


export const EmptySection = styled.div`
  font-size: 36px;
  color:var(--text-color-1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingSection = styled(EmptySection)`

`


export const LoadingLottie = styled(Lottie)`
  width:clamp(200px,60vw,400px);
  height:clamp(200px,60vw,400px);
`

export const GirdViewer = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
  justify-items: center;
  align-items: flex-start;
  grid-gap: 5px;
  height: fit-content;
  width: clamp(270px, 100%, 100%);
`

export const ListViewer = styled.div`
  width: 100%;
  height: 100%;
`