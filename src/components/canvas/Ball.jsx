import React, { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [rotation, setRotation] = useState(0);
  const rotationSpeed = 0.5;
  const maxRotation = Math.PI / 2; // 70 degrees in radians

  useFrame((state, delta) => {
    // Adjust the rotation speed by multiplying with a factor
    setRotation((prevRotation) => {
      const newRotation = prevRotation + delta * rotationSpeed;

      // Ensure the rotation stays within the specified range
      if (newRotation > maxRotation || newRotation < -maxRotation) {
        return -prevRotation; // Reverse rotation direction when reaching the limit
      }

      return newRotation;
    });
  });


  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, rotation, 0]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-4}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

