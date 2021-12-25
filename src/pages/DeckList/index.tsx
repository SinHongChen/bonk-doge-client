import React,{ useEffect,useState } from 'react';
import { DeckCardsViewer } from "components";
import { getDeckInfosRequest } from "api/deckRequest";
import { DeckInfo,UserInfo } from "types";
import { useCookie } from "hooks";
import { useSelector } from 'react-redux';
import { selectUserInfo } from "reducer/userReducer";
import { DeckListContainer } from "./Style";
import { useNavigate } from "react-router-dom";

const DeckList = () => {
    const [loginId,setLoginId] = useCookie("login-id","");
    const [deckInfos,setDeckInfos] = useState<DeckInfo[]>([]);
    const [isSearching,setIsSearching] = useState(false);
    const userInfo:UserInfo = useSelector(selectUserInfo);
    const navigate = useNavigate();

    const onDeckClick = (deckId:string)=>{
        navigate(`/deck/${deckId}`);
    }

    useEffect(()=>{
        setIsSearching(true);
        if(userInfo?.ID){
            getDeckInfosRequest(loginId,userInfo.ID)
            .then(setDeckInfos)
            .then(()=>{setIsSearching(false)})
            .catch(console.error);
        }
    },[userInfo]);

    return (
        <DeckListContainer>
            <DeckCardsViewer
                mode="edit"
                isLoading={isSearching}
                onDeckClick={onDeckClick}
                deckInfos={deckInfos}
            />
        </DeckListContainer>
    )
}

export default DeckList
