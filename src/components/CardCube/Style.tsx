import styled from "styled-components";

export const Scene = styled.div`
  width: 260px;
  height: 420px;
  margin: 80px;
  perspective: 520px;
`

export const CubeContainer = styled.div`
  width: 260px;
  height: 420px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
`

export interface FaceProps{
    rotateY:string | number;
    rotateX:string | number;
}

export const Face = styled.div<FaceProps>`
  position: absolute;
  width: 260px;
  height: 420px;
  border: 2px solid black;
  line-height: 200px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
`

export const Front = styled(Face)<FaceProps>`
  width: 260px;
  height: 420px;
  position: absolute;
  background:var(--harvey);
  opacity: 0.7;
  transform : ${props => `rotateY(${props.rotateY}deg) rotateX(${props.rotateX}deg) translateZ(100px) `};
`;

export const Back = styled(Face)`
  transform : ${props => `rotateY( ${props.rotateY}deg) rotateX(${props.rotateX}deg) translateZ(160px) translateX(0px)`};
  background: hsla(120, 100%, 50%, 0.7);
  width: 260px;
  height: 420px;
  background:var(--harvey);
  opacity: 0.7;
`;

export const Right = styled(Face)<FaceProps>`
  transform : ${props => `rotateY( ${props.rotateY}deg) rotateX(${props.rotateX}deg) translateZ(130px)  translateX(30px)`};
  background: hsla( 60, 100%, 50%, 0.7);
  width: 260px;
  height: 420px;
  background:var(--harvey);
  opacity: 0.7;
`;

export const Left = styled(Face)`
  transform : ${props => `rotateY( ${props.rotateY}deg) rotateX(${props.rotateX}deg) translateZ(130px) translateX(-30px)`};
  background: hsla(180, 100%, 50%, 0.7);
  width: 260px;
  height: 420px;
  background:var(--harvey);
  opacity: 0.7;
`;

export const Top = styled(Face)`
  transform : ${props => `rotateY( ${props.rotateY}deg) rotateX(${props.rotateX}deg) translateZ(130px) translateY(-30px)`};
  background: hsla(240, 100%, 50%, 0.7);
  width: 260px;
  height: 260px;
  background:var(--harvey);
  opacity: 0.7;
`;

export const Bottom = styled(Face)`
  transform : ${props => `rotateY( ${props.rotateY}deg) rotateX(${props.rotateX}deg) translateZ(290px)  translateY(30px)`};
  background: hsla(300, 100%, 50%, 0.7);
  width: 260px;
  height: 260px;
  background:var(--harvey);
  opacity: 0.7;
`;
