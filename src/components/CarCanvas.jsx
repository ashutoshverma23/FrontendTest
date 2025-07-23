import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import Loader from "./PageLoader"; // Import the Loader component

const CarModel = ({ scrollY }) => {
  const meshRef = useRef();
  const gltf = useGLTF("/models/car1.glb");

  // Lower the model geometry inside the primitive,
  // so the car sits lower visually in the canvas.
  useEffect(() => {
    if (gltf.scene) {
      // Significantly lower the model - adjust this value as needed
      gltf.scene.position.y = -3.0;
    }
  }, [gltf]);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle floating animation relative to new lowered baseline
      meshRef.current.position.y =
        -3.0 + Math.sin(state.clock.elapsedTime) * 0.05;

      // In-place rotation based on scroll
      meshRef.current.rotation.y = Math.PI + scrollY / 300;
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene}
      scale={0.25}
      // Position here controls horizontal and depth placement of overall primitive
      // Lowered the Y position further
      position={[-1.2, -1.5, 0.5]}
      rotation={[0, 2, 0]}
    />
  );
};

const CarCanvas = () => {
  const controlsRef = useRef();
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInteraction = () => setLastInteraction(Date.now());

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
      handleInteraction();
    }
  };

  const rotateLeft = () => {
    if (controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(
        controlsRef.current.getAzimuthalAngle() + 0.3
      );
      controlsRef.current.update();
      handleInteraction();
    }
  };

  const rotateRight = () => {
    if (controlsRef.current) {
      controlsRef.current.setAzimuthalAngle(
        controlsRef.current.getAzimuthalAngle() - 0.3
      );
      controlsRef.current.update();
      handleInteraction();
    }
  };

  return (
    <div className="relative w-full h-[100vh] min-h-[600px] overflow-visible bg-gradient-to-br from-stone-100 via-white to-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.1),transparent_40%)] pointer-events-none" />

      <Canvas
        camera={{
          position: [0, 1, 6], // Lowered camera from Y=2 to Y=1
          fov: 45,
          near: 0.1,
          far: 100,
        }}
        onPointerDown={handleInteraction}
        onPointerMove={handleInteraction}
        gl={{
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />

        <Suspense fallback={Loader}>
          <Environment preset="sunset" />
          <CarModel scrollY={scrollY} />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
      </Canvas>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        <button
          onClick={rotateLeft}
          className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full hover:bg-white hover:shadow-lg transition-all duration-200 text-2xl font-bold text-gray-700 hover:text-blue-600"
          title="Rotate Left"
        >
          ⬅
        </button>
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-200 text-xl font-bold backdrop-blur-sm"
          title="Reset View"
        >
          🔄
        </button>
        <button
          onClick={rotateRight}
          className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full hover:bg-white hover:shadow-lg transition-all duration-200 text-2xl font-bold text-gray-700 hover:text-blue-600"
          title="Rotate Right"
        >
          ➡
        </button>
      </div>

      {/* Instructions */}
      <div className="absolute top-6 left-6 bg-white/80 text-gray-800 px-4 py-2 rounded-lg backdrop-blur-sm z-20 shadow-lg">
        <p className="text-sm font-medium">
          🖱️ Drag to rotate • 📜 Scroll to rotate car • 🎯 Use buttons to
          control
        </p>
      </div>
    </div>
  );
};

export default CarCanvas;
