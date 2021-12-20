import React, { useEffect, useState } from "react";
import { EditCardContainer } from "./Style";
import { useParams } from "react-router-dom";
import { Button } from "antd";
import { useCookie } from "hooks";
import { CardInfo, EffectCardInfo } from "types/api";
import { GameCard } from "components";
import { useNavigate } from "react-router-dom";
import {
  deleteCardRequest,
  getCardInfoRequest,
  updateEffectCardRequest,
  updateRoleCardRequest,
} from "api/cardRequest";
import {
  convertFormValuesToRoleCardInfo,
  convertFormValuesToEffectCardInfo,
} from "utils/convertors";
import { GameCardForm } from "components";
import { AxiosResponse } from "axios";

const EditCard = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [cardInfo, setCardInfo] = useState<CardInfo>();

  function instanceOfEffectCardInfo(object: any): object is EffectCardInfo {
    if (object.Nature_ID) return true;
    return false;
  }

  const isConfirmDelete = () => {
    let confirm = window.confirm("確定要刪除此卡牌嘛？");
    return confirm;
  };

  const deleteCard = (cardId: string) => {
    if (isConfirmDelete()) {
      deleteCardRequest(loginId, cardId)
      .then(responseHandler)
      .catch(requestErrorHandler)
    }
  };

  // 是否上傳成功
  const isUploadSuccess = (status: number) => {
    if (status === 200) return true;
    return false;
  };

  // 處理 request 的 response
  const responseHandler = (response: AxiosResponse<any>) => {
    if (isUploadSuccess(response.status)) {
        alert("success");
        navigate("/cards");
    } else {
        alert("error");
        navigate("/cards");
    }
  };

  // 處理 request error 時的處理
  const requestErrorHandler = (error: any) => {
      console.log(error);
      alert(error);
  };

  const onFormFinish = (values: any) => {
    if (cardInfo) {
      if (instanceOfEffectCardInfo(cardInfo)) {
        let effectCardInfo = convertFormValuesToEffectCardInfo(values);
        updateEffectCardRequest(loginId, cardInfo.UUID, effectCardInfo)
          .then(responseHandler)
          .catch(requestErrorHandler);
      } else {
        let roleCardInfo = convertFormValuesToRoleCardInfo(values);
        updateRoleCardRequest(loginId, cardInfo.UUID, roleCardInfo)
          .then(responseHandler)
          .catch(requestErrorHandler);
      }
    }
  };

  useEffect(() => {
    if (id) {
      getCardInfoRequest(loginId, id).then(setCardInfo);
    }
  }, [id]);

  return (
    <EditCardContainer>
      {cardInfo && (
        <>
          <GameCard card={cardInfo} />
          <Button
            onClick={() => {
              deleteCard(id ? id : "");
            }}
          >
            Delete
          </Button>
          <GameCardForm cardInfo={cardInfo} onFinish={onFormFinish} />

        </>
      )}
    </EditCardContainer>
  );
};

export default EditCard;
