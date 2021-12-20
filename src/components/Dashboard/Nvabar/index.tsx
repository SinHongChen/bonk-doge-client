import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { NavbarContianer,NvaLink,Icon,LinkDisplayName } from "./Style";

export interface NavLinkInfo{
    displayName:string,
    url:string,
    icon:JSX.Element
}

export interface NavbarProps {
    navLinkInfos:NavLinkInfo[]
}

const Nvabar = ({navLinkInfos}:NavbarProps) => {
    const location = useLocation();

    return (
        <NavbarContianer>
            {navLinkInfos.map((navLinkInfo,index)=>{
                return (
                    <NvaLink title={navLinkInfo.displayName} isSelected={location.pathname === navLinkInfo.url} key={index} to={navLinkInfo.url}>
                        <Icon>{navLinkInfo.icon}</Icon>
                        <LinkDisplayName>{navLinkInfo.displayName}</LinkDisplayName>
                    </NvaLink>
                )
            })}
        </NavbarContianer>
    )
}

export default Nvabar
