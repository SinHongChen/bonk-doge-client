import React, { useLayoutEffect, useState, useEffect } from "react";

import Nvabar, { NavLinkInfo } from "./Nvabar";
import {
  UserNameBar,
  AccountInfoBar,
  SignOutBtn,
  DashboardContainer,
  MenuContainer,
  MainContainer,
  Avator,
  MenuCloseBtn,
  MenuOpenBtn,
} from "./Style";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineUser,
  AiFillFolderOpen,
  AiOutlineHome,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { selectUserInfo } from "reducer/userReducer";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookie } from "hooks";
import { getUserInfoRequest } from "api/userRequest";
import { useDispatch } from "react-redux";
import { setUserInfo } from "reducer/userReducer";
import { UserInfo } from "types/api";
import { RiLogoutBoxLine } from "react-icons/ri";

const nvaLinkInfos: NavLinkInfo[] = [
  {
    displayName: "玩家資訊",
    url: "/account",
    icon: <AiOutlineUser />,
  },
  {
    displayName: "牌組",
    url: "/deck",
    icon: <AiFillFolderOpen />,
  },
  {
    displayName: "遊戲大廳",
    url: "/gamesLobby",
    icon: <AiOutlineHome />,
  },
  {
    displayName: "所有卡牌",
    url: "/cards",
    icon: <AiFillFolderOpen />,
  },
  {
    displayName: "登出",
    url: "/logout",
    icon: <RiLogoutBoxLine />,
  },
];

export interface DashboardProps {
  element?: JSX.Element;
}

const Layout = ({ element }: DashboardProps) => {
  const [loginId, setLoginId] = useCookie("login-id", "");
  const userInfo: UserInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuCollapse, setMenuCollaps] = useState(false);

  const loggedValid = async (loginId: string) => {
    await getUserInfoRequest(loginId)
      .then((userInfo) => {
        if (userInfo) {
          dispatch(setUserInfo(userInfo));
        } else {
          setLoginId("");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoginId("");
        navigate("/login");
      });
  };

  useLayoutEffect(() => {
    loggedValid(loginId);
  }, [loginId]);

  useEffect(() => {
    setMenuCollaps(false);
  }, [location.pathname]);

  return (
    <DashboardContainer>
      {userInfo?.ID && (
        <>
          <MenuOpenBtn
            onClick={() => {
              setMenuCollaps(true);
            }}
          >
            <AiOutlineMenu />
          </MenuOpenBtn>
          <MenuContainer isOpen={menuCollapse}>
            <AccountInfoBar>
              {userInfo?.Picture_Url && <Avator src={userInfo.Picture_Url} />}
              {userInfo?.Name && <UserNameBar>{userInfo.Name}</UserNameBar>}
            </AccountInfoBar>
            <MenuCloseBtn
              onClick={() => {
                setMenuCollaps(false);
              }}
            >
              <AiOutlineClose />
            </MenuCloseBtn>
            <Nvabar navLinkInfos={nvaLinkInfos} />
          </MenuContainer>
          <MainContainer>{element}</MainContainer>
        </>
      )}
    </DashboardContainer>
  );
};

export default Layout;
