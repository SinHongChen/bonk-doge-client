import React, { useEffect, useState,useRef } from 'react'
import { CardsViewer } from "components";
import { useLocation,useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CardsContainer,SearchForm,CategoryFilter,CategorySelector,SearchInput,SearchIcon } from "./Style";
import { getCardInfosRequest } from "api/cardRequest";
import { CardInfo } from "types/api";
import { useCookie } from "hooks";

const Cards = () => {
    const [sessionId,setSessionId] = useCookie("session-id","");

    const navigate = useNavigate();
    const location = useLocation();

    const [cardInfos,setCardInfos] = useState<CardInfo[]>([]);
    const keywordRef = useRef<HTMLInputElement>(null);
    const [selectCategory,setSelectCategory] = useState<"Role" | "Effect">();
    const [isSearching,setIsSearching] = useState(false);

    const initialCardInfos = (keyword?:string | undefined,category?:"Role" | "Effect")=>{
        setIsSearching(true);
        getCardInfosRequest(sessionId,keyword,category)
        .then((cardInfos)=>setCardInfos([...cardInfos]))
        .then(()=>setIsSearching(false))
        .catch(console.error);
    }

    const submitHandler:React.FormEventHandler<HTMLFormElement> = (event:React.FormEvent)=>{
        event.preventDefault();
        navigate(`/cards?keyword=${keywordRef.current?.value}&category=${selectCategory}`)
    }

    const getSearchParams = ()=>{
        let keywordParam = new URLSearchParams(location.search).get('keyword');
        let categoryParam:any = new URLSearchParams(location.search).get('category');
        
        let keyword = keywordParam == null ? undefined : keywordParam;
        let category:"Role" | "Effect" | undefined = categoryParam === "Role" || categoryParam === "Effect" ? categoryParam : undefined;
        
        return {
            keyword,
            category
        }
    }

    useEffect(()=>{
        let { keyword,category } = getSearchParams();
        setSelectCategory(category);
        initialCardInfos(keyword,category);
    },[location.pathname,location.search])

    return (
        <CardsContainer>
            <SearchForm onSubmit={submitHandler} action="/">
                <SearchIcon>
                    <AiOutlineSearch/>
                </SearchIcon>
                <SearchInput ref={keywordRef} placeholder="KEYWORD"/>
            </SearchForm>
            <CategoryFilter>
                <CategorySelector onClick={()=>{
                    setSelectCategory(category => category === "Role" ? undefined : "Role");
                }} isSelected={selectCategory === "Role"} >Role</CategorySelector>
                <CategorySelector onClick={()=>{
                    setSelectCategory(category => category === "Effect" ? undefined : "Effect");
                }} isSelected={selectCategory === "Effect"} >Effect</CategorySelector>
            </CategoryFilter>
            <CardsViewer isLoading={isSearching} cards={cardInfos} viewMode={"grid"}/>
        </CardsContainer>
    )
}

export default Cards
