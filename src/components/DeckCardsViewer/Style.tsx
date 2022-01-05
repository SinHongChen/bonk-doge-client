import styled from "styled-components";
import { Link } from "react-router-dom";
import { deviceMedia } from "styles/Device";
import { ScrollbarCss } from "styles/Scrollbar";
import Lottie from "components/Lottie";

export const DeckCardsViewerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const CreateDeckCard = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.3em;
  position: relative;
  overflow: auto;
  background: linear-gradient(to right,#59595e,rgb(30, 29, 37));
  box-shadow: 1px 1px 6px 1px black;
  border: 1px solid var(--border-color-1);
  height: 420px;
  min-width: 270px;
  color: var(--text-color-1);
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 3px;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 1px 15px 3px black;
  }
`;

export const LoadingSection = styled.div`
  font-size: 36px;
  color:var(--text-color-1);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingLottie = styled(Lottie)`
  width:clamp(200px,60vw,400px);
  height:clamp(200px,60vw,400px);
`

export const GridViewSection = styled.div`
  display: flex;
  grid-column-gap: 80px;
  grid-row-gap: 40px;
  padding:20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  ${ScrollbarCss};
  @media ${deviceMedia.mobile}{    
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`

export const ScrollViewSection = styled.div`

`
