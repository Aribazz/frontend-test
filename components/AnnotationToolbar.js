"use client"

import { useRef } from "react";
import { exportPDF } from "../utils/pdfUtils";
import fabric from "fabric";

export default function AnnotationToolbar({ fabricCanvasRef, pdfFile }) {
  const colorRef = useRef("#ff0");

//   useEffect(() => {
//     async function loadFabric() {
//       const fabricModule = await import("fabric");
//       setFabricInstance(fabricModule.fabric); 
//     }

//     loadFabric();
//   }, []);
  

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 shadow-md rounded-md">
      <div className="flex space-x-2">
        <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md" 
          onClick={() => {
            const rect = new fabricInstance.Rect({
              left: 50, top: 50, fill: colorRef.current?.value, width: 200, height: 50, opacity: 0.5,
            });
            fabricCanvasRef.add(rect);
          }}>
          Highlight
        </button>
        
        <button className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-md" 
  onClick={() => {
    if (fabricCanvasRef?.current) {
  fabricCanvasRef.current.isDrawingMode = true;
  fabricCanvasRef.current.freeDrawingBrush.color = "black";
  fabricCanvasRef.current.freeDrawingBrush.width = 2;
  fabricCanvasRef.current.freeDrawingBrush.smooth = true;
}

  }}>
          Signature
        </button>

        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white"
          onClick={() => fabricCanvas.clear()}>
          Clear
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white"
          onClick={() => {
            fabricCanvasRef.isDrawingMode = false;
            exportPDF(pdfFile, fabricCanvasRef);
          }}>
          Export PDF
        </button>

        <button className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md text-white"
  onClick={() => {
    const text = prompt("Enter your comment:");
    if (text) {
      const textbox = new fabric.Text(text, { left: 100, top: 100, fontSize: 16, fill: "#000" });
      fabricCanvasRef.add(textbox);
    }
  }}>
  Comment
</button>
      </div>

      <input type="color" ref={colorRef} className="w-10 h-8 border rounded" />
    </div>
  );
}
