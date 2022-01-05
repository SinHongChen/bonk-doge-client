import styled from "styled-components";
import { Link } from "react-router-dom";
import { DeckCardsViewer,Logo } from "components";
import { ScrollbarCss } from "styles/Scrollbar";
import { RankList,GameCardsViewer } from "components";
import { deviceMedia } from "styles/Device";

export const SmallLogo = styled(Logo)`
    width:25px;
    height:25px;
`

export const GamesLobbyContainer = styled.div`
    width: 100%;
    height: 100%;
    border:1px solid var(--border-color-1);
    background-color: var(--bg-color-2);
    border-radius: 0.2em;
    position: relative;
    overflow: auto;
    ${ScrollbarCss};
`


export const BackgroundSection = styled.div`
    background-image: url("https://images.unsplash.com/photo-1500252185289-40ca85eb23a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
    background-position: center;
    background-size: cover;
    position: absolute;
    z-index:2;
    width:100%;
    height:100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: clamp(4rem,100vw,12rem);
    word-break: break-word;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content: center;
    overflow:hidden;
    
`

export const TopRankList = styled(RankList)`
    background-color: rgba(0,0,0,0);
    height: 100%;
    width: 100%;
    justify-content: center;

    @media ${deviceMedia.mobile}{    
        display: none;
    }
`


export const DeckCards = styled(DeckCardsViewer)`
    height: 100%;
    overflow: auto;

`

export const Main = styled.div`
    background:rgba(0,0,0,0);
    position: absolute;
    z-index:3;
    width:100%;
    color:var(--text-color-1);

    @media ${deviceMedia.desktop}{       
        display: grid; 
        grid-template-columns: 350px 1fr;
        grid-template-rows: 1fr 260px ;
        align-items: center;
        justify-items: center;
        padding:20px;
        grid-gap:30px;
        height: 100%;
    }
    @media ${deviceMedia.tablet}{    
        display: grid; 
        grid-template-columns: 350px 1fr;
        grid-template-rows: 1fr 260px ;
        align-items: center;
        justify-items: center;
        padding:20px;
        grid-gap:30px;
        height: 100%;
    }
    @media ${deviceMedia.mobile}{    
        display: grid;  
        grid-template-rows: 1fr 50px 100px ; 
        height: 100%;
        padding:20px;
        grid-gap:20px;
    }
`


export const ShowSelectedDeckSection = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-gap:5px;
    grid-template-columns: 1fr;
    grid-template-rows: 45px 1fr;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    position: relative;


    @media ${deviceMedia.mobile}{    
        height: 100%;
    }
`

export const CardListSection = styled(GameCardsViewer)`
    height: 100%;
    width: 100%;
    border:none;
    border-radius:0.2em;
    border:1px solid var(--border-color-1);
    background-color: rgba(0,0,0,0);
    @media ${deviceMedia.mobile}{    
        display: none;
    }
`

export const StartSection = styled.div`
    height: 100%;
    width: 100%;

    @media ${deviceMedia.desktop}{       
        display: flex;
        align-items: center;
        justify-items: center;
        grid-gap: 30px;
    }
    @media ${deviceMedia.tablet}{    
        display: flex;
        align-items: center;
        justify-items: center;
        grid-gap: 30px;
    }
    @media ${deviceMedia.mobile}{    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;  
        grid-gap: 5px;  
    }
`

export const StartBtn = styled.button`
  background: linear-gradient(to right,#59595e,rgb(30, 29, 37));
  height: 100%;
  width: 100%;
  outline: none;
  border:1px solid var(--border-color-1);
  color:var(--text-color-1);
  font-size: clamp(1rem, 2.5vw, 2rem); 
  font-weight: bold;
  letter-spacing: 3px;
  border-radius:0.2em;
  display: flex;
  align-items:center;
  justify-content:center;
  &:hover{
      cursor:pointer;
  }

    @media ${deviceMedia.mobile}{    
        height: 60px;
    }
`

export const TeachBtn = styled(StartBtn)`
  background: linear-gradient(to right,#59595e,rgb(30, 29, 37));

`

export const SelectedDeckName = styled.div`
    width:100%;
    display: flex;
    align-items:center;
    justify-content: center;
    grid-gap:10px;
    font-size: clamp(1rem, 2.5vw, 1.3rem);
    background-color: rgba(0,0,0,0);
    border:1px solid var(--border-color-1);
    border-radius:0.2em;
    height:100%;
`

export const UnCreateDeckRemindMsg = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    grid-gap: 10px;
`