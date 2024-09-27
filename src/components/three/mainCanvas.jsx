"use client";
// import * as THREE from "./three.module.js";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MainScene } from "./mainScene";
import { BoxGeometry, Scene } from "three";

export function MainCanvas() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 55, position: [0, 0, 6] }}>
        <Environment files="/images/runway.jpg" />
        <MainScene />
        {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}
