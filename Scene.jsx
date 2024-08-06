import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Fullscreen, Root, Container } from "@react-three/uikit";
import { Text, setPreferredColorScheme } from "@react-three/uikit";
import { Button } from "./src/components/default/button.tsx";
import { Card } from "./src/components/apfel/card.tsx";
import { Defaults } from "./src/components/apfel/theme.tsx";

function RotatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function UICard() {
  return (
    <View position={[2, 0, 0]} scale={0.5}>
      <Card width={300} height={400}>
        <Card.Body>
          <Card.Title>Rotating Cube</Card.Title>
          <p>
            This is a 3D cube rotating in space. You can interact with it using
            your mouse:
          </p>
          <List>
            <List.Item>Left-click and drag to rotate the view</List.Item>
            <List.Item>Right-click and drag to pan</List.Item>
            <List.Item>Scroll to zoom in/out</List.Item>
          </List>
        </Card.Body>
      </Card>
    </View>
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
      <RotatingCube></RotatingCube>
      <group position={[1, 0, 0]}>
        <Root backgroundColor="grey" sizeX={2} sizeY={1} flexDirection="row">
          <Container
            flexGrow={1}
            backgroundOpacity={0.5}
            hover={{ backgroundOpacity: 1 }}
          >
            <Button borderRadius={0.1} onClick={handleClick}>
              <Text>1</Text>
            </Button>
            <Button>
              <Text>2</Text>
            </Button>
            <Button>
              <Text>3</Text>
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[-5, 0, 0]}>
        <Root backgroundColor="grey" sizeX={2} sizeY={1} flexDirection="row">
          <Container
            flexGrow={1}
            backgroundOpacity={0.5}
            hover={{ backgroundOpacity: 1 }}
          >
            <Button borderRadius={0.1} onClick={handleClick}>
              <Text>1</Text>
            </Button>
            <Button>
              <Text>2</Text>
            </Button>
            <Button>
              <Text>3</Text>
            </Button>
          </Container>
        </Root>
      </group>
    </Canvas>
  );
}
