import React from 'react';
import { LoginContainer,Title,Form,GoogleOAuthBtn } from "./Style";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "api/aouthRequest";
import { UserLogin } from "types/api";
import { Logo } from "components";
import { useCookie } from "hooks";
import { useEffect } from 'react';


const Login = () => {
    const [loginId,setLoginId] = useCookie("login-id","");
    const navigate = useNavigate();
    const googleClientId = `${process.env.REACT_APP_OAUTH_CLIENT_ID}`;

    const loginSuccessHandler = (userLogin:UserLogin)=>{
        setLoginId(userLogin.Session_ID);
        navigate(`/cards`);
    }

    const googleOAuthSuccessHandler = async (response:any)=>{
        loginRequest(response.code)
        .then(loginSuccessHandler)
        .catch(console.error);
    }

    const googleOAuthFailHandle = (error:any) => {
        console.error(error);
    }

    useEffect(()=>{
        if(loginId !== ""){
            navigate(`/`);
        }
    })


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