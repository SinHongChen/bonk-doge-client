import React from "react";

import {
  GameCardContainer,
  Image,
  Header,
  DisplayNamebar,
  Content,
  RaceInfobar,
  EffectDescriptionbar,
  Abilitybar,
  ImageLoading,
  NatureInfobar,
} from "./Style";
import { CardInfo } from "types/api";

import Starbar from "./Starbar";
import RaceIcon from "./RaceIcon";
import { useState } from "react";

export interface GameCardProps {
  cardInfo: CardInfo;
  style?: React.CSSProperties;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GameCard = ({ cardInfo, style, className, onClick }: GameCardProps) => {
  const [imageLoad, setImageLoad] = useState(false);

  const dispatchTheme = (categoryName: string) => {
    switch (categoryName) {
      case "Role":
        return "DeepSpace";
      case "Effect":
        if (cardInfo.Nature?.ID === "1") {
          return "Harvey";
        } else {
          return "PurpleWhite";
        }
      default:
        throw Error();
    }
  };

  return (
    <GameCardContainer
      className={className}
      style={style}
      theme={dispatchTheme(cardInfo?.Category)}
      onClick={onClick}
    >
      <Header>
        <DisplayNamebar>{cardInfo?.Name}</DisplayNamebar>
        {cardInfo?.Category === "Role" && (
          <RaceIcon raceName={cardInfo?.Attribute?.Name} />
        )}
      </Header>
      {cardInfo?.Category === "Role" ? (
        <Starbar number={cardInfo?.Star ? parseInt(cardInfo?.Star) : 0} />
      ) : (
        <NatureInfobar>【{cardInfo?.Nature?.Name}】</NatureInfobar>
      )}
      <Image
        src={cardInfo?.Img_Url}
        isShow={imageLoad}
        onLoad={() => {
          setImageLoad(true);
        }}
      />
      {!imageLoad && <ImageLoading>LOADING...</ImageLoading>}
      <Content>
        {cardInfo?.Category === "Role" && (
          <RaceInfobar>{cardInfo?.Race?.Name}</RaceInfobar>
        )}

        <EffectDescriptionbar>
          {cardInfo?.Effect_Description}
        </EffectDescriptionbar>

        {cardInfo?.Category === "Role" && (
          <Abilitybar>
            {`ATK/${cardInfo?.Attack} DEF/${cardInfo?.Defense}`}
          </Abilitybar>
        )}
      </Content>
    </GameCardContainer>
  );
};

export default GameCard;
