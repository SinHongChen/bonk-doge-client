import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { CanvasContainer } from "./Style";

const Sphere = (props: any) => {
  const colorMap = useLoader(TextureLoader, "./logo.png");

  // This reference will give us direct access to the mesh
  const mesh = useRef<any>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[3, 32, 16]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
};

const Logo3D = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <perspectiveCamera />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Sphere />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};

export default Logo3D;
