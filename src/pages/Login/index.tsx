import React, { useEffect,useState } from 'react';
import { LoginContainer,Title,Form,GoogleOAuthBtn } from "./Style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setImgUrl,setEmal,setName } from "reducer/userReducer";
import { loginRequest } from "api/userRequest";
import { ProfileObj,TokenObj } from "types/OAuthResponse";
import { User } from "types";
import { useLocalStorage } from "hooks";
import { Logo } from "components";

const Login = () => {
    const navigate = useNavigate();
    const googleClientId = "121935266673-0k8gtbtt35ipptm3vldp64jdtmeb0h3r.apps.googleusercontent.com";

    const handleLoginRequest = async (profile:ProfileObj)=>{
        loginRequest(profile.name,profile.email)
        .then((user:User)=>{
            navigate(`/cards`);
        })
        .catch((error:any)=>{
            console.error(error);
        });
    }
    const googleOAuthSuccessHandler = (response:any) => {
        console.log(response)
        navigate(`/cards`);
    }

    const googleOAuthFailHandle = (error:any) => {
        console.error(error);
    }

    return (
        <LoginContainer data-theme="dark">
            <Logo/>
            <Title data-text="bonk doge">bonk doge</Title>
            <Form onSubmit={(event)=>{event.preventDefault();}} action="/">
            <GoogleOAuthBtn
                icon={false}
                scope={"profile"}
                clientId={googleClientId}
                onSuccess={googleOAuthSuccessHandler}
                onFailure={googleOAuthFailHandle}
                cookiePolicy={'single_host_origin'}
                responseType={"code"}
                accessType={"offline"}
                prompt={"consent"}
            />
            </Form>
        </LoginContainer>
    )
}

export default Login