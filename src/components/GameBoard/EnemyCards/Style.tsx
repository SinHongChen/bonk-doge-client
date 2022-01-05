import styled from "styled-components";
import { Logo } from "components";

export const CoveredCard = styled.div`
    height: 166px;
    width: 104px;
    background: linear-gradient(to right,#59595e,rgb(30, 29, 37));
    border:1px solid var(--border-color-1);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.2em;
`

export const EnemyCardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap:5px;
`

export const SmallLogo = styled(Logo)`
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 2;
`