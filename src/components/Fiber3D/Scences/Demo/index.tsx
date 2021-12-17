import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera,WebGLRenderer } from "three";
import { Environment, OrbitControls } from "@react-three/drei";
import { GameCard,Board } from "components/Fiber3D/Objects";

const Demo = (props: any) => {
  const camera = new PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  const renderer = new WebGLRenderer();
  return (
    <Canvas
      >
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <OrbitControls/>
        <Board position={[0, 0, 0]} rotation={[0,0,-5]}/>
        <GameCard position={[0, 2, -5]} rotation={[0,0,0]}/>
      </Suspense>
    </Canvas>
  );
};

export default Demo;
