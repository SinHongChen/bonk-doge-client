import React, { useEffect, useState } from 'react'
import { CardsViewer } from "components";
import { useLocation,useNavigate } from "react-router-dom";
import { 
    CardsContainer,
    SearchForm,
    CategoryFilter,
    CategoryCheckbox,
    CategoryLabel,
    SearchInput,
    SearchIcon
} from "./Style";
import { getCardInfosRequest } from "api/cardRequest";
import { AiOutlineSearch } from "react-icons/ai";
import { CardInfo } from "types";
import { useRef } from 'react';

const Cards = () => {
    const [cardInfos,setCardInfos] = useState<CardInfo[]>([]);
    const keywordRef = useRef<HTMLInputElement>(null);
    const [selectCategory,setSelectCategory] = useState<"Role" | "Effect">();
    const [isSearching,setIsSearching] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const initialCardInfos = (keyword?:string,category?:"Role" | "Effect")=>{
        setIsSearching(true);
        getCardInfosRequest(keyword,category)
        .then((cardInfos)=>{
            setIsSearching(false);
            cardInfos.push(...cardInfos);
            cardInfos.push(...cardInfos);
            cardInfos.push(...cardInfos);
            setCardInfos([...cardInfos]);
        })
        .catch((error:any)=>{console.log(error)})
    }

    const submitHandler:React.FormEventHandler<HTMLFormElement>  = (event:React.FormEvent)=>{
        event.preventDefault();
        navigate(`/cards?keyword=${keywordRef.current?.value}`)
    }

    useEffect(()=>{
        let keyword = new URLSearchParams(location.search).get('keyword');
        initialCardInfos(keyword == null ? undefined : keyword,selectCategory);
    },[location.pathname,location.search,selectCategory])

    return (
        <CardsContainer>
            <SearchForm onSubmit={submitHandler} action="/">
                <SearchIcon>
                    <AiOutlineSearch/>
                </SearchIcon>
                <SearchInput ref={keywordRef} placeholder="keyword"/>
            </SearchForm>
            <CategoryFilter>
                <CategoryLabel onClick={()=>{
                    setSelectCategory(category => category === "Role" ? undefined : "Role");
                }} isSelected={selectCategory === "Role"} >Role</CategoryLabel>
                <CategoryLabel onClick={()=>{
                    setSelectCategory(category => category === "Effect" ? undefined : "Effect");
                }} isSelected={selectCategory === "Effect"} >Effect</CategoryLabel>
            </CategoryFilter>
            <CardsViewer isLoading={isSearching} cards={cardInfos} viewMode={"grid"}/>
        </CardsContainer>
    )
}

export default Cards
