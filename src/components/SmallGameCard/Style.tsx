import styled, { keyframes } from "styled-components";
import { ScrollbarCss } from "styles/Scrollbar";

const themesBgColor = {
  DeepSpace: "var(--deep-space)",
  PurpleWhite: "var(--purple-white)",
  Decent: "var(--decent)",
  Sunkist: "var(--sunkist)",
  SeaBlue: "var(--sea-blue)",
  Harvey: "var(--harvey)",
};

const getCardBgColor = (
  theme:
    | "DeepSpace"
    | "Harvey"
    | "Decent"
    | "PurpleWhite"
    | "Sunkist"
    | "SeaBlue"
) => {
  switch (theme) {
    case "DeepSpace":
      return themesBgColor.DeepSpace;
    case "Decent":
      return themesBgColor.Decent;
    case "PurpleWhite":
      return themesBgColor.PurpleWhite;
    case "Sunkist":
      return themesBgColor.Sunkist;
    case "SeaBlue":
      return themesBgColor.SeaBlue;
    case "Harvey":
      return themesBgColor.Harvey;
    default:
      throw Error();
  }
};

export interface GameCardContainerProps {
  theme:
    | "DeepSpace"
    | "Harvey"
    | "Decent"
    | "PurpleWhite"
    | "Sunkist"
    | "SeaBlue";
}

export const GameCardContainer = styled.div<GameCardContainerProps>`
  border-radius: 0.2em;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 10px;
  box-shadow: 1px 1px 4px 1px black;
  color: white;
  width: 260px;
  height: 416px;
  background: ${(props) => getCardBgColor(props.theme)};
  position: relative;
  border:1px solid var(--border-color-1);
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    /* border: 1px solid var(--text-color-3); */
    box-shadow: 1px 1px 15px 3px #52baffcc;
  }
`;


export const LoadingImgAnimation = keyframes`
    0% { background: linear-gradient(to right, rgba(242, 153, 74,0.6), rgba(225, 242, 74,0.6)) }
    10% { background: linear-gradient(to right, rgba(225, 242, 74,0.6), rgba(155, 242, 74,0.6))  }
    20% { background: linear-gradient(to right, rgba(155, 242, 74,0.6), rgba(88, 242, 74,0.6))  }
    30% { background: linear-gradient(to right, rgba(88, 242, 74,0.6), rgba(74, 242, 116,0.6))  }
    40% { background: linear-gradient(to right, rgba(74, 242, 116,0.6), rgba(74, 180, 242,0.6))  }
    50% { background: linear-gradient(to right, rgba(74, 180, 242,0.6), rgba(74, 119, 242,0.6)) }
    60% { background: linear-gradient(to right, rgba(74, 119, 242,0.6), rgba(166, 74, 242,0.6))  }
    70% { background: linear-gradient(to right, rgba(166, 74, 242,0.6), rgba(242, 74, 228,0.6)) }
    80% { background: linear-gradient(to right, rgba(242, 74, 228,0.6), rgba(242, 74, 178,0.6))  }
    90% { background: linear-gradient(to right, rgba(242, 74, 178,0.6), rgba(242, 74, 88,0.6))  }
    100% { background: linear-gradient(to right, rgba(242, 74, 88,0.6), rgba(242, 153, 74,0.6)) }
`;

export interface ImageProps {
  isShow?: boolean;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 380px;
  object-fit: cover;
  position: relative;
  display: ${(props) => (props.isShow ? "block" : "none")};
  border-radius: 0.2em;
  box-shadow: 1px 1px 3px 1px rgba(50, 50, 50, 0.6);
`;

export const ImageLoading = styled.div`
  width: 100%;
  height: 380px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-color-1);
  font-size: 32px;
  border-radius: 0.2em;
  animation: ${LoadingImgAnimation} 10s linear forwards infinite;
`;


export const Abilitybar = styled.h5`
  font-size: 1.3em;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-gap: 6px;
  padding: 8px;
  border-radius: 0.2em;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.5s linear;
  height: 50px;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;


export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index:3;
  top:0px;
  width: 100%;
  height: 36px;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.6);
  border-radius: 0.2em;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const DisplayNamebar = styled.h5`
  letter-spacing: 1px;
  color: white;
  padding: 0px;
  margin: 0px;
  font-weight: bold;
  font-size: 1.2em;
`;


export const RaceIcon = styled.div`
  background: linear-gradient(
    #f5ca6e 0%,
    #edbe58 10%,
    #c99b36 50%,
    #b9820c 100%
  );
  border: 1px solid black;
  box-shadow: 1px 1px 5px 2px black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 20px;
  width: 52px;
  height: 52px;
  font-weight: bold;
  position: absolute;
  top: -8px;
  right: -30px;
`;

export const StarIcon = styled(RaceIcon)`
  left: -20px;
  width: fit-content;
  background:rgba(0,0,0,0);
  color:#edbe58;
  font-size: 32px;
  border-radius: 0;
  padding:0px 8px;
  grid-gap:6px;
  border: none;
  box-shadow: none;
`;

export const Starbar = styled.div`
`
