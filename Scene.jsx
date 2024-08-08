import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Fullscreen, Root, Container } from "@react-three/uikit";
import { Text, setPreferredColorScheme } from "@react-three/uikit";
import { Button } from "./src/components/default/button.tsx";
import { Card } from "./src/components/apfel/card.tsx";
import { Defaults } from "./src/components/apfel/theme.tsx";

import Lights from "./env/Lights";
import Ground from "./env/Ground";

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
    <Canvas>
      <OrbitControls />
      <Lights />
      <Ground />
      <RotatingCube></RotatingCube>
      <mesh position={[-5.8, 1.1, 0.3]}>
        <boxGeometry args={[0.1, 0.25, 0.1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
      <mesh position={[-5.65, 1.13, 0.3]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position={[-5.5, 1.03, 0.3]}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial color="green" />
      </mesh>

      <group position={[1, 1, 0]}>
        <Root
          backgroundColor="lightgreen"
          sizeX={2}
          sizeY={1}
          flexDirection="row"
        >
          <Container
            flexGrow={1}
            backgroundOpacity={0.5}
            hover={{ backgroundOpacity: 1 }}
          >
            <Button
              backgroundColor="red"
              borderRadius={0.1}
              onClick={handleClick}
            >
              <Text>1</Text>
            </Button>
            <Button
              backgroundColor="red"
              borderRadius={0.1}
              onClick={handleClick}
            >
              <Text>2</Text>
            </Button>
            <Button
              backgroundColor="red"
              borderRadius={0.1}
              onClick={handleClick}
            >
              <Text>3</Text>
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[-5, 1, 0]} rotation={[-1.57, 0, 0]}>
        <Root
          backgroundColor="lightgrey"
          sizeX={2}
          sizeY={1}
          flexDirection="row"
        >
          <Container
            flexGrow={1}
            backgroundOpacity={0.5}
            hover={{ backgroundOpacity: 1 }}
          >
            <Button
              backgroundColor="red"
              borderRadius={0.1}
              onClick={handleClick}
            >
              <Text>1</Text>
            </Button>
            <Button
              backgroundColor="red"
              borderRadius={0.1}
              onClick={handleClick}
            >
              <Text>2</Text>
            </Button>
            <Button
              backgroundColor="red"
              borderRadius={0.1}
              onClick={handleClick}
            >
              <Text>3</Text>
            </Button>
          </Container>
        </Root>
      </group>
    </Canvas>
  );
}
