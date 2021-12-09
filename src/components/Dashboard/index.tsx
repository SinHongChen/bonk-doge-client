import React from 'react'

import Nvabar,{ NavLinkInfo } from "./Nvabar";
import { DashboardContainer,MenuContainer,MainContainer,Avator,MenuCloseBtn,MenuOpenBtn } from "./Style";
import { FcBusinessman,FcOpenedFolder,FcHome,FcBriefcase } from "react-icons/fc";
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectImgUrl,selectName } from "reducer/userReducer";
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface DashboardProps{
    element?:JSX.Element
}

const Dashboard = ({element}:DashboardProps) => {
    const location = useLocation();
    const userImgUrl = useSelector(selectImgUrl);
    const [menuCollapse,setMenuCollaps] = useState(false);
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
    ];

    useEffect(()=>{
        setMenuCollaps(false);
    },[location.pathname])

    return (
        <DashboardContainer>
            <MenuOpenBtn onClick={()=>{setMenuCollaps(true)}}>
                <AiOutlineMenu/>
            </MenuOpenBtn>
            <MenuContainer isOpen={menuCollapse}>
                <Avator src={userImgUrl}/>
                <MenuCloseBtn onClick={()=>{setMenuCollaps(false)}}>
                    <AiOutlineClose/>
                </MenuCloseBtn>
                <Nvabar navLinkInfos={nvaLinkInfos}/>
            </MenuContainer>
            <MainContainer>
                {element}
            </MainContainer>
        </DashboardContainer>
    )
}

export default Dashboard
