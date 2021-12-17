import React,{ useLayoutEffect,useState,useEffect } from 'react'

import Nvabar,{ NavLinkInfo } from "./Nvabar";
import { UserNameBar,AccountInfoBar,SignOutBtn,DashboardContainer,MenuContainer,MainContainer,Avator,MenuCloseBtn,MenuOpenBtn } from "./Style";
import { FcBusinessman,FcOpenedFolder,FcHome,FcBriefcase,FcSupport } from "react-icons/fc";
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectImgUrl,selectName } from "reducer/userReducer";
import { useLocation,useNavigate } from 'react-router-dom';
import { useCookie } from "hooks";
import { getUserInfoRequest,logoutRequest } from "api/userRequest";
import { useDispatch } from 'react-redux';
import { setImgUrl,setEmal,setName } from "reducer/userReducer";
import { UserInfo } from "types/api";

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
    },
    {
        displayName:"Socket !",
        url:"/socket",
        icon:<FcSupport/>
    }
];

export interface DashboardProps{
    element?:JSX.Element
}

const Dashboard = ({element}:DashboardProps) => {
    const [sessionId,setSessionId] = useCookie("session-id","");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const userImgUrl = useSelector(selectImgUrl);
    const userName = useSelector(selectName);
    const [menuCollapse,setMenuCollaps] = useState(false);

    const setUserInfo = (userLogin:UserInfo)=>{
        dispatch(setEmal(userLogin.Email));
        dispatch(setImgUrl(userLogin.Picture_Url));
        dispatch(setName(userLogin.Name));
    }

    const isLoggedIn = async (sessionId:string)=>{
        await getUserInfoRequest(sessionId)
        .then((userInfo)=>{
            if(userInfo){
                setUserInfo(userInfo)
                return true
            }
        })
        .catch(console.error);
        return false;
    }

    const logoutHandler = async ()=>{
        await logoutRequest(sessionId);
        setSessionId("");
    }

    useLayoutEffect(()=>{
        if(!sessionId) navigate("/login");
        if(!isLoggedIn(sessionId)){
            navigate("/login");
        }
    },[sessionId]);

    useEffect(()=>{
        setMenuCollaps(false);
    },[location.pathname]);

    return (
        <DashboardContainer>
            <MenuOpenBtn onClick={()=>{setMenuCollaps(true)}}>
                <AiOutlineMenu/>
            </MenuOpenBtn>
            <MenuContainer isOpen={menuCollapse}>
                <AccountInfoBar>
                    <Avator src={userImgUrl}/>
                    <UserNameBar>{userName}</UserNameBar>
                </AccountInfoBar>
                <MenuCloseBtn onClick={()=>{setMenuCollaps(false)}}>
                    <AiOutlineClose/>
                </MenuCloseBtn>
                <Nvabar navLinkInfos={nvaLinkInfos}/>
                <SignOutBtn onClick={logoutHandler}>Logout Out</SignOutBtn>

            </MenuContainer>
            <MainContainer>
                {element}
            </MainContainer>
        </DashboardContainer>
    )
}

export default Dashboard
