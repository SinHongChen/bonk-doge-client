import React from "react";
import {
  Front,
  Back,
  Bottom,
  Left,
  Right,
  Top,
  CubeContainer,
  Scene,
} from "./Style";
import { CardInfo } from "types/api";

export interface CardCubeProps {
  cardInfo: CardInfo;
  style?: React.CSSProperties;
  className?: string;
}

const CardCube = ({ cardInfo, style, className }: CardCubeProps) => {
  const defaultY = -20;
  const defaultX = 0;

  return (
    <Scene style={style} className={className}>
      <CubeContainer>
            <Front rotateY={`${defaultY}`} rotateX={defaultX} />
            <Back rotateY={`${defaultY + 180}`} rotateX={defaultX} />
            <Right
              rotateY={`${defaultY + 90}`}
              rotateX={defaultX}
            />
            <Left rotateY={`${defaultY - 90}`} rotateX={`${defaultX}`} />
            <Top rotateY={`${defaultY}`} rotateX={`${defaultX + 90}`} />
            <Bottom rotateY={`${defaultY}`} rotateX={`${defaultX - 90}`} />
      </CubeContainer>
    </Scene>
  );
};

export default CardCube;
