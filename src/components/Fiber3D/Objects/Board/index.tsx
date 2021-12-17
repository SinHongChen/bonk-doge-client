import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Board = (props: any) => {
  const colorMap = useLoader(TextureLoader, './images/card/我不想再色色了.png')

  // This reference will give us direct access to the mesh
  const mesh = useRef<any>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
  });


  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <planeGeometry args={[100, 100]}/>
      <meshBasicMaterial color={0xffff00} />
    </mesh>
  );
};

export default Board;
