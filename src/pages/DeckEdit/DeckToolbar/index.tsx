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
import { AiFillDelete, AiOutlineLink, AiOutlinePlus } from "react-icons/ai";
import { MdOutlineFormatListBulleted, MdOutlineGridView } from "react-icons/md";

export interface DeckToolbarProps {
  mode?: "edit" | "add";
  onDeleteCards?: React.MouseEventHandler<HTMLButtonElement>;
  onCreateModeTrigger?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteDeck?: React.MouseEventHandler<HTMLButtonElement>;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onAddCards?: React.MouseEventHandler<HTMLButtonElement>;
}

const DeckToolbar = ({
  mode = "edit",
  onDeleteCards,
  onCreateModeTrigger,
  onDeleteDeck,
  onCancel,
  onAddCards
}: DeckToolbarProps) => {
  return (
    <DeckToolbarContainer>
      {mode === "edit" && (
        <>
          <ToolBtn title="刪除選中的卡片" onClick={onDeleteCards}>
            <AiFillDelete />
          </ToolBtn>
          <ToolBtn title="新增卡片" onClick={onCreateModeTrigger}>
            <AiOutlinePlus />
          </ToolBtn>
          {/* <ToolBtn title="view mode">
            <MdOutlineGridView />
          </ToolBtn> */}
          <DeleteDeckBtn onClick={onDeleteDeck}>
            <span>刪除牌組</span>
          </DeleteDeckBtn>
          <DeckLink to="/deck">
            <span>查看所有牌組</span>
          </DeckLink>
        </>
      )}
      {mode === "add" && (
        <>
          <CancelBtn onClick={onCancel}>
            <span>取消新增</span>
          </CancelBtn>
          <SubmitBtn onClick={onAddCards}>
            <span>確認新增</span>
          </SubmitBtn>
          <MsgLabel>
            請選取想要新增的卡牌!!
          </MsgLabel>
        </>
      )}
    </DeckToolbarContainer>
  );
};

export default DeckToolbar;
