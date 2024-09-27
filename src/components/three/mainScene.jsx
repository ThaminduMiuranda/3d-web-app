import { uesGSAP, useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { use, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function MainScene() {
  const can1Ref = useRef();
  const can1SpinRef = useRef();
  const initialPosition = [0, 0, 0];

  useGSAP(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: true,
      },
    });

    timeline
      .to(can1Ref.current.position, {
        x: 0.5,
        y: 0,
        z: 3,
      })
      .to(can1Ref.current.position, {
        x: 0,
        y: 0,
        z: 0,
      })
      .to(
        can1Ref.current.rotation,
        {
          x: Math.PI / 4,
        },
        0
      )
      .to(can1Ref.current.rotation, {
        x: 0,
      })
      .to(
        can1SpinRef.current.rotation,
        {
          y: Math.PI / 4,
        },
        0
      )
      .to(can1SpinRef.current.rotation, {
        y: 0,
      });
  });

  return (
    <>
      <group ref={can1Ref} position={initialPosition}>
        <group ref={can1SpinRef}>
          <mesh>
            <boxGeometry args={[1, 3, 1]} />
            <meshStandardMaterial color="blue" />
          </mesh>
        </group>
      </group>
    </>
  );
}
