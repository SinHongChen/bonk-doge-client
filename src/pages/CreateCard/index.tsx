import React, { useState } from "react";
import { AxiosResponse } from "axios";
import { GameCardForm } from "components";
import { CreateCardContainer,UploadSection,Animation } from "./Style";
import { useCookie } from "hooks";
import { RoleCardInfo, EffectCardInfo } from "types/api";
import { convertFormValuesToRoleCardInfo,convertFormValuesToEffectCardInfo } from "utils/convertors";
import { createRoleCardRequest,createEffectCardRequest } from "api/cardRequest";
import { animationInfos } from "components/Lottie";


const CreateCard = () => {
  const [loginId, setLoginId] = useCookie("login-id", "");
  const [stage, setStage] = useState<"edit" | "pending" | "success" | "fail">(
    "edit"
  );

  // 是否上傳成功
  const isUploadSuccess = (status: number) => {
    if (status === 200) return true;
    return false;
  };

  // 處理 request 的 response
  const responseHandler = (response: AxiosResponse<any>) => {
    if (isUploadSuccess(response.status)) {
      setStage("success");
    } else {
      setStage("fail");
    }
  };

  // 處理 request error 時的處理
  const requestErrorHandler = (error: any) => {
    console.error(error);
    setStage("fail");
  };

  const onFormFinish = (values: any) => {
    setStage("pending");
    if (values.category === "Role") {
      let roleCardInfo:RoleCardInfo = convertFormValuesToRoleCardInfo(values);
      createRoleCardRequest(loginId, roleCardInfo)
        .then(responseHandler)
        .catch(requestErrorHandler);
    } else {
      let effectCardInfo:EffectCardInfo = convertFormValuesToEffectCardInfo(values);
      createEffectCardRequest(loginId, effectCardInfo)
        .then(responseHandler)
        .catch(requestErrorHandler);
    }
  };

  return (
    <CreateCardContainer>
      {stage !== "edit" &&
        <UploadSection>
          {stage === "pending" &&  <Animation animation={animationInfos.uploading} autoplay={true}/>}
          {stage === "success" &&  <Animation animation={animationInfos.success} autoplay={true}/>}
          {stage === "fail" &&  <Animation animation={animationInfos.fail} autoplay={true}/>}
        </UploadSection>
      }
      {stage === "edit" &&
        <GameCardForm onFinish={onFormFinish} />
      }
    </CreateCardContainer>
  );
};

export default CreateCard;
