import React from 'react'

import Nvabar,{ NavLinkInfo } from "./Nvabar";
import { DashboardContainer,LeftContainer,RightContainer,Avator } from "./Style";
import { FcBusinessman,FcOpenedFolder,FcHome,FcBriefcase } from "react-icons/fc";
import { useSelector } from 'react-redux';
import { selectImgUrl,selectName } from "reducer/userReducer";

export interface DashboardProps{
    element?:JSX.Element
}

const Dashboard = ({element}:DashboardProps) => {
    const userImgUrl = useSelector(selectImgUrl);
    const userName = useSelector(selectName);
    const nvaLinkInfos:NavLinkInfo[] = [
        {
            displayName:"Account",
            url:"/account",
            icon:<FcBusinessman/>
        },
        {
            displayName:"Deck",
            url:"/deckManage",
            icon:<FcBriefcase/>
        },
        {
            displayName:"Lobby",
            url:"/gamesLobby",
            icon:<FcHome/>
        },
        {
            displayName:"Cards",
            url:"/cards",
            icon:<FcOpenedFolder/>
        }
    ]

    return (
        <DashboardContainer>
            <LeftContainer>
                <Avator src={userImgUrl}/>
                <Nvabar navLinkInfos={nvaLinkInfos}/>
            </LeftContainer>
            <RightContainer>
                {element}
            </RightContainer>
        </DashboardContainer>
    )
}

export default Dashboard
