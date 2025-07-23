// components/Loader.jsx
import React from "react";
import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white bg-black p-6 rounded-xl shadow-xl">
        <span className="text-lg font-semibold mb-2">Loading Car Model...</span>
        <div className="w-48 h-2 bg-gray-700 rounded">
          <div
            className="h-2 bg-blue-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="text-sm mt-2">{Math.floor(progress)}%</span>
      </div>
    </Html>
  );
}
