import React, { useState } from "react";
import { CreateGameCardForm } from "components";
import { CreateCardContainer } from "./Style";


const CreateCard = () => {

  return (
    <CreateCardContainer>
      <CreateGameCardForm/>
    </CreateCardContainer>
  );
};

export default CreateCard;
