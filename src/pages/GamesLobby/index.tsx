import React,{ useEffect,useState } from 'react';
import { 
    GamesLobbyContainer,
    DeckSelectSection,
    DeckCards,
    StartLink,
    GameStartSection
} from "./Style";
import { PlayerInfo,UserInfo,DeckInfo } from "types";
import { getUserInfosRequest } from 'api/userRequest';
import { useSelector } from 'react-redux';
import { selectUserInfo } from "reducer/userReducer";
import { useCookie } from "hooks";
import { convertUserInfosToPlayerInfos } from "utils/convertors";
import { RankList } from "components";
import { getDeckInfosRequest } from "api/deckRequest";

const GamesLobby = () => {    
    const [loginId,setLoginId] = useCookie("login-id","");
    const [players,setPlayers] = useState<PlayerInfo[]>([]);
    const [selectedDeckId,setSelectedDeckId] = useState<string>("");
    const [deckInfos,setDeckInfos] = useState<DeckInfo[]>([]);
    const userInfo:UserInfo = useSelector(selectUserInfo);

    const onDeckClick = (deckId:string)=>{
        console.log(deckId);
    }

    useEffect(()=>{
        if(userInfo?.ID){
            getDeckInfosRequest(loginId,userInfo.ID)
            .then(setDeckInfos)
            .catch(console.error);
        }
    },[userInfo])


    useEffect(()=>{
        getUserInfosRequest(loginId)
        .then((userInfos)=>convertUserInfosToPlayerInfos(userInfos))
        .then((playerInfos)=>{setPlayers(playerInfos)});
    },[])

    return (
        <GamesLobbyContainer>
            <GameStartSection>
                <DeckCards  deckInfos={deckInfos} onDeckClick={onDeckClick}/>
            </GameStartSection>
            <DeckSelectSection><DeckCards  deckInfos={deckInfos} onDeckClick={onDeckClick}/></DeckSelectSection>
            {/* <RankList players={players}/> */}
        </GamesLobbyContainer>
    )
}

export default GamesLobby
