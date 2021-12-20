import React,{ useEffect,useState } from 'react';
import { 
    GamesLobbyContainer,
    Main,
    StartLink
} from "./Style";
import { RankList,DeckSelectSection } from "components";
import { PlayerInfo } from "types";
import { getUserInfosRequest } from 'api/userRequest';
import { useCookie } from "hooks";
import { convertUserInfosToPlayerInfos } from "utils/convertors";

const GamesLobby = () => {    
    const [loginId,setLoginId] = useCookie("login-id","");
    const [players,setPlayers] = useState<PlayerInfo[]>([]);
    
    useEffect(()=>{
        getUserInfosRequest(loginId)
        .then((userInfos)=>convertUserInfosToPlayerInfos(userInfos))
        .then((playerInfos)=>{setPlayers(playerInfos)});
    },[])

    return (
        <GamesLobbyContainer>
            <RankList players={players}/>
            <Main>
                <DeckSelectSection/>
                <StartLink to="/game">start</StartLink>
            </Main>
        </GamesLobbyContainer>
    )
}

export default GamesLobby
