import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Image = (props: any) => {
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
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[5.5, 5, 0.05]}/>
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

export default Image;
