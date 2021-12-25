import React, { useEffect, useRef, useState } from "react";
import { DeckInfo, CardInfo } from "types/api";
import {
  DeckEditContainer,
  Header,
  DeckToolbar,
  EditDeckSection,
  SubmitBtn,
  DeleteConfirmSection,
  AddCardsSection,
} from "./Style";
import { useParams } from "react-router-dom";
import {
  getDeckInfoRequest,
  deleteDeckRequest,
  updateDeckRequest,
} from "api/deckRequest";
import { getCardInfosRequest } from "api/cardRequest";
import { useCookie } from "hooks";
import { GameCardsViewer } from "components";
import { Input, Popup } from "components/Basic";
import { SelectCardInfos } from "components/GameCardsViewer";
import { useNavigate } from "react-router-dom";

const DeckEdit = () => {
  let { id } = useParams();
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [deckInfo, setDeckInfo] = useState<DeckInfo>();
  const [selectCardInfos, setSelectCardInfos] = useState<SelectCardInfos[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [enabledPopup, setEnadledPopup] = useState<boolean>(false);
  const [addCardInofs, setAddCardInfos] = useState<CardInfo[]>([]);
  const [enableAddCardViewer, setEnableAddCardViewer] = useState<boolean>(false);
  const deleteConfirmInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const initialDeckInfo = (deckId: string) => {
    setIsSearching(true);
    getDeckInfoRequest(loginId, deckId)
      .then((deckInfo) => {
        setDeckInfo(deckInfo);
        setIsSearching(false);
      })
      .catch(console.error);
  };

  const filterDuplicateCards = async (deckInfo: DeckInfo) => {
    let cardInfos = await getCardInfosRequest(loginId);
    let filterCards = cardInfos.filter((cardInfo) => {
      let index = deckInfo.Cards?.findIndex((id) => id === cardInfo.UUID);
      if (index !== -1) return false;
      return true;
    });
    return filterCards;
  };

  const navigateToCreateCards = async (cardId: string) => {
    if (deckInfo) {
      setEnableAddCardViewer(true);
      setIsSearching(true);
      let cards = await filterDuplicateCards(deckInfo);
      setIsSearching(false);
      setAddCardInfos(cards);
      setSelectCardInfos([]);
    }
  };

  const addCardsHanlder = (selectCardInfos: SelectCardInfos[]) => {
    if(deckInfo){
      let cards = selectCardInfos.filter((data) =>data.isSelected).map((data)=>data.UUID);
      deckInfo.Cards = [...deckInfo.Cards,...cards];
      updateDeckRequest(loginId,deckInfo.ID,deckInfo.Name,deckInfo.Cards)
      .then(initialDeckInfo)
      .then(()=>{ setEnableAddCardViewer(false)} )
      .catch(console.error)
    }
  };


  const deleteCardsHanlder = (selectCardInfos: SelectCardInfos[]) => {
    if(deckInfo && deckInfo.Cards.length > 0){
      let cards = selectCardInfos.filter((data) =>data.isSelected).map((data)=>data.UUID);
      cards.forEach((cardId)=>{
        let index = deckInfo.Cards.findIndex((value)=> cardId === value);
        deckInfo.Cards.splice(index,1);
      })
      updateDeckRequest(loginId,deckInfo.ID,deckInfo.Name,deckInfo.Cards)
      .then(initialDeckInfo)
      .catch(console.error)
    }
  };

  const deleteValidate = (deckInfo:DeckInfo)=>{
    return deleteConfirmInputRef?.current?.value === deckInfo.Name;
  }

  const deleteDeckHandler = (deckInfo:DeckInfo) => {
    if(deleteValidate(deckInfo)){
      deleteDeckRequest(loginId, deckInfo.ID).then((res) => {
        setEnadledPopup(false);
        navigate("/deck");
      });
    }
  };

  const selectedCardsChange = (selectCardInfos: SelectCardInfos[]): void => {
    setSelectCardInfos([...selectCardInfos]);
  };

  useEffect(() => {
    if (id) {
      initialDeckInfo(id);
    }
  }, [id]);

  return (
    <DeckEditContainer>
      <Popup
        enabled={enabledPopup}
        onClose={() => {
          setEnadledPopup(false);
        }}
      >
        <DeleteConfirmSection>
          <div>
            確認要刪除 "<span style={{ color: "red" }}>{deckInfo?.Name}</span>"
            牌組嘛？,刪除後無法復原,請確認牌組選擇正確 !! 🤔
          </div>
          <div>
            請在下方輸入 "<span style={{ color: "red" }}>{deckInfo?.Name}</span>"👇
          </div>
          <Input expectValue={deckInfo?.Name} remindMsg={"請輸入牌組名稱"} errorMsg={"請輸入正確的牌組名稱"} valueRef={deleteConfirmInputRef} placeholder="牌組名稱" />
          <SubmitBtn onClick={() => { 
            if(deckInfo){
              deleteDeckHandler(deckInfo)
            }
          }}>
            確認刪除
          </SubmitBtn>
        </DeleteConfirmSection>
      </Popup>
      <EditDeckSection isShow={!enableAddCardViewer}>
        <Header>
          <DeckToolbar
            onCreateModeTrigger={() => { navigateToCreateCards(deckInfo?.ID!);}}
            onDeleteCards={()=>{deleteCardsHanlder(selectCardInfos)}}
            onDeleteDeck={() => {setEnadledPopup(true);}}
          />
        </Header>
        <GameCardsViewer
          onSelectedChange={selectedCardsChange}
          enableEdit={true}
          isLoading={isSearching}
          cardInfos={deckInfo?.CardsInfo ? deckInfo.CardsInfo : []}
        />
      </EditDeckSection>
      <AddCardsSection isShow={enableAddCardViewer}>
        <Header>
          <DeckToolbar
            mode="add"
            onCancel={() => {
              setEnableAddCardViewer(false);
            }}
            onAddCards={()=>{addCardsHanlder(selectCardInfos)}}
          />
        </Header>
        <GameCardsViewer
          onSelectedChange={selectedCardsChange}
          enableEdit={true}
          isLoading={isSearching}
          cardInfos={addCardInofs}
        />
      </AddCardsSection>
    </DeckEditContainer>
  );
};

export default DeckEdit;
