import React,{ useState,useRef } from 'react';
import { 
    CardSearchFormContainer,
    CategorySelector,
    CategoryFilter
 } from "./Style";
 import { Input } from "components/Basic";
 import { getCardInfosRequest } from "api/cardRequest";
 import { CardInfo } from "types";
 import { useCookie } from "hooks";
import { useEffect } from 'react';

export interface CardSearchFormProps{
    onSubmit:(values?:any)=>void,
    onFinish:(cardInfo:CardInfo[])=>void,
    onFail:(error?:any)=>void,
    enableFirstSearch?:boolean
}

const CardSearchForm = ({onFinish,onFail,onSubmit,enableFirstSearch}:CardSearchFormProps) => {
    const sessionKey = `${process.env.REACT_APP_SESSION_LOGIN_KEY}`;
    const [loginId,setLoginId] = useCookie(sessionKey,"");
    const [selectCategory,setSelectCategory] = useState<"Role" | "Effect">();
    const [keyWord,setKeyWord] = useState<string>();

    const submitHandler:React.FormEventHandler<HTMLFormElement> = (event:React.FormEvent)=>{
        event.preventDefault();
        let data = {
            keyWord:keyWord,
            category:selectCategory
        }
        onSubmit(data);
        initialCardInfos(keyWord,selectCategory);
    }


    const initialCardInfos = (keyword?:string | undefined,category?:"Role" | "Effect")=>{
        getCardInfosRequest(loginId,keyword,category)
        .then(onFinish)
        .catch(onFail);
    }

    useEffect(()=>{
        if(enableFirstSearch){
            onSubmit();
            initialCardInfos();
        }
    },[])

    return (
        <CardSearchFormContainer onSubmit={submitHandler} action="/">
            <Input onChange={(event)=>{setKeyWord(event.target.value)}} placeholder="卡牌名稱"/>
            <CategoryFilter>
                <CategorySelector onClick={()=>{
                    setSelectCategory(category => category === "Role" ? undefined : "Role");
                }} isSelected={selectCategory === "Role"} >Role</CategorySelector>
                <CategorySelector onClick={()=>{
                    setSelectCategory(category => category === "Effect" ? undefined : "Effect");
                }} isSelected={selectCategory === "Effect"} >Effect</CategorySelector>
            </CategoryFilter>
        </CardSearchFormContainer>
    )
}

export default CardSearchForm
