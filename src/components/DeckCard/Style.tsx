import styled from "styled-components";
import { Logo } from "components";

export const SmallLogo = styled(Logo)`
  width: 150px;
  height: 150px;
  position: absolute;
  z-index: 2;
`
export interface DeckCardContainerProps {
  isSelected?: boolean;
}

export const DeckCardContainer = styled.div<DeckCardContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.3em;
  position: relative;
  overflow: auto;
  /* background: var(--sea-blue); */
  box-shadow: 1px 1px 5px 1px black;
  border:1px solid var(--border-color-1);
  height: 420px;
  min-width: 270px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    /* border: 1px solid var(--text-color-3); */
    box-shadow: 1px 1px 15px 3px black;
  }
`;

export interface RemindMsgProps{
  isShow?:boolean
}

export const RemindMsg = styled.h5<RemindMsgProps>`
  width: 100%;
  color: var(--text-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: ${props => props.isShow ? "420px" : "0px"} ;
  z-index: 4;
  bottom: 0px;
  left: 0px;
  letter-spacing: 1px;
  background: linear-gradient(to right,#59595e,rgb(30, 29, 37));
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`

export interface RenderToLeftBlockProps{
  index:number
}

export const RenderToLeftBlock = styled.div<RenderToLeftBlockProps>`
  width: 100%;
  color: var(--text-color-1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 105px;
  z-index: 1;
  bottom: ${props => `${props.index * 105}px`};
  left: 0px;
  letter-spacing: 1px;
  background: linear-gradient(to left,#59595e,rgb(30, 29, 37));
  overflow: hidden;
`

export const RenderToRightBlock = styled(RenderToLeftBlock)`
  background: linear-gradient(to right,#59595e,rgb(30, 29, 37));
`