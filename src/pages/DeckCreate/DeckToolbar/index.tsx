import React from "react";
import {
  DeckToolbarContainer,
  ToolBtn,
  DeleteDeckBtn,
  DeckLink,
  CancelBtn,
  SubmitBtn,
  MsgLabel
} from "./Style";
import { AiFillDelete, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineGridView } from "react-icons/md";

export interface DeckToolbarProps {
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmit?: React.MouseEventHandler<HTMLButtonElement>;
}

const DeckToolbar = ({
  onCancel,
  onSubmit
}: DeckToolbarProps) => {
  return (
    <DeckToolbarContainer>
      <CancelBtn onClick={onCancel}>
        <span>取消新增</span>
      </CancelBtn>
      <SubmitBtn onClick={onSubmit}>
        <span>確認新增</span>
      </SubmitBtn>
      {/* <MsgLabel>
        請選取想要新增的卡牌!!
      </MsgLabel> */}
    </DeckToolbarContainer>
  );
};

export default DeckToolbar;
