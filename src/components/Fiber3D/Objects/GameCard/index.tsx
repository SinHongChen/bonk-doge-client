import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Image from "./Image";
import { BoxGeometry } from "three";
import Headerbar from "./Headerbar";
import Background from "./Background";
import Star from "./Star";

const GameCard = (props: any) => {
  const colorMap = useLoader(TextureLoader, './images/card/我不想再色色了.png')

  // This reference will give us direct access to the mesh
  const mesh = useRef<any>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
      // mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh position={[0, 10, 0]}>
      <Background/>
      <Headerbar position={[0, 4.5, 0.01]} />
      <Image position={[0, 1, 0.01]}/>
      <Star position={[0, 4.5, 0.01]}/>
    </mesh>

  );
};

export default GameCard;
