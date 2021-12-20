import React,{ useEffect } from 'react'
import { logoutRequest } from "api/userRequest";
import { useCookie } from "hooks";
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const [loginId,setLoginId] = useCookie("login-id","");
    const navigate = useNavigate();

    const logoutHandler = async ()=>{
        await logoutRequest(loginId);
        setLoginId("");
    }

    useEffect(()=>{
        logoutHandler();
        if(!loginId) navigate("/login");
    },[loginId]);

    return (
        <div>
        </div>
    )
}

export default Logout
