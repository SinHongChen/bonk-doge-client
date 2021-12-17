import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Star = (props: any) => {
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
      <sphereGeometry args={[ 0.15, 32, 16]}/>
      <meshStandardMaterial color={"green"} />
    </mesh>
  );
};

export default Star;
