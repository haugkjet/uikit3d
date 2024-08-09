import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Fullscreen, Root, Container } from "@react-three/uikit";
import { Text, setPreferredColorScheme } from "@react-three/uikit";
import { Button } from "./src/components/default/button.tsx";
import { Card } from "./src/components/apfel/card.tsx";
import { Defaults } from "./src/components/apfel/theme.tsx";
import PanelExtruded from "./src//components/PanelExtruded";
import { MeshStandardMaterial } from "three";
import { extend } from "@react-three/fiber";

import Lights from "./env/Lights";
import Ground from "./env/Ground";

extend({ MeshStandardMaterial });

function RotatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[-2, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export function Scene() {
  setPreferredColorScheme("light");
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Canvas
      shadows={true}
      camera={{
        fov: 50,
        near: 0.1,
        far: 2000,
        position: [0, 2, 5],
      }}
      onCreated={({ gl, scene }) => {
        // Enable sRGBEncoding
        //gl.outputColorSpace = SRGBColorSpace;
        // Alternatively, you can use LinearEncoding if sRGBEncoding is not desired
        //gl.outputColorSpace = SRGBColorSpace;
        //gl.toneMapping = THREE.ACESFilmicToneMapping;
        //gl.toneMappingExposure = 0.5;
      }}
    >
      <OrbitControls />
      <Lights />
      <Ground />
      <color attach="background" args={["#d9d9d9"]} />

      <PanelExtruded
        position={[-0, 1, 0]}
        scale={[2, 1.05, 0.15]}
        color={"#a0a0a0"}
      />

      <group position={[0, 1.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <Root sizeX={2} sizeY={1} flexDirection="row" borderRadius={10}>
          <Container
            flexGrow={1}
            backgroundOpacity={0.25}
            backgroundColor="lightgreen"
            backgroundRoughness={0.1}
            backgroundMetalness={0.5}
          >
            <Button
              backgroundOpacity={0.25}
              backgroundColor="lightblue"
              borderRadius={2.5}
              onClick={handleClick}
            >
              <Text>Open</Text>
            </Button>
            <Button
              backgroundOpacity={0.25}
              backgroundColor="lightblue"
              borderRadius={2.5}
              onClick={handleClick}
            >
              <Text>Close</Text>
            </Button>
          </Container>
        </Root>
      </group>
    </Canvas>
  );
}
