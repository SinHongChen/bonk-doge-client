import React from "react";
import { AiFillStar } from "react-icons/ai";
import {
  GameCardContainer,
  Image,
  Header,
  DisplayNamebar,
  Content,
  Abilitybar,
  ImageLoading,
  RaceIcon,
  StarIcon,
  Starbar,
} from "./Style";
import { CardInfo } from "types/api";
import { useState } from "react";

export interface GameCardProps {
  cardInfo: CardInfo;
  style?: React.CSSProperties;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const SmallGameCard = ({
  cardInfo,
  style,
  className,
  onClick,
}: GameCardProps) => {
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
        {cardInfo?.Category === "Role" ? (
          <Starbar>
            <StarIcon>
              {cardInfo?.Star}<AiFillStar />
            </StarIcon>
          </Starbar>
        ) : (
          ""
        )}
        <DisplayNamebar>{cardInfo?.Name}</DisplayNamebar>
      </Header>
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
          <Abilitybar>
            {`ATK ${cardInfo?.Attack} / DEF ${cardInfo?.Defense}`}
          </Abilitybar>
        )}
      </Content>
    </GameCardContainer>
  );
};

export default SmallGameCard;
