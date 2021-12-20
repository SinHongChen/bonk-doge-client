import React,{ useLayoutEffect,useState,useEffect } from 'react'

import Nvabar,{ NavLinkInfo } from "./Nvabar";
import { UserNameBar,AccountInfoBar,SignOutBtn,DashboardContainer,MenuContainer,MainContainer,Avator,MenuCloseBtn,MenuOpenBtn } from "./Style";
import { FcBusinessman,FcOpenedFolder,FcHome,FcBriefcase,FcSupport } from "react-icons/fc";
import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectImgUrl,selectName } from "reducer/userReducer";
import { useLocation,useNavigate } from 'react-router-dom';
import { useCookie } from "hooks";
import { getUserInfoRequest } from "api/userRequest";
import { useDispatch } from 'react-redux';
import { setImgUrl,setEmal,setName } from "reducer/userReducer";
import { UserInfo } from "types/api";
import { RiLogoutBoxLine } from "react-icons/ri";

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
        displayName:"Logout",
        url:"/logout",
        icon:<RiLogoutBoxLine/>
    }
];

export interface DashboardProps{
    element?:JSX.Element
}

const Dashboard = ({element}:DashboardProps) => {
    const [loginId,setLoginId] = useCookie("login-id","");

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

    const loggedValid = async (loginId:string)=>{
        await getUserInfoRequest(loginId)
        .then((userInfo)=>{
            if(userInfo){
                setUserInfo(userInfo)
            }else{
                setLoginId("");
                navigate("/login");
            }
        })
        .catch((err)=>{
            console.error(err);
            setLoginId("");
            navigate("/login");
        });
    }

    useLayoutEffect(()=>{
        loggedValid(loginId);
    },[loginId]);

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
            </MenuContainer>
            <MainContainer>
                {element}
            </MainContainer>
        </DashboardContainer>
    )
}

export default Dashboard
