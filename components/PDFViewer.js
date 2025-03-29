"use client"

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { highlightPlugin } from "@react-pdf-viewer/highlight";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useRef, useEffect } from "react";
import * as fabric  from "fabric";

export default function PDFViewer({ file }) {
  const highlightPluginInstance = highlightPlugin();
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && !fabricCanvasRef.current) {
      fabricCanvasRef.current = new fabric.Canvas(canvasRef.current);
    }
    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null; // Reset reference
      }
    };

  }, []);

  return (
    <div className="relative h-[600px] border">
      {file ? (
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js`}>
          <Viewer fileUrl={URL.createObjectURL(file)} plugins={[highlightPluginInstance]} />
        </Worker>
      ) : (
        <p className="text-center p-4">No PDF loaded</p>
      )}
      {/* Annotation Canvas */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none"></canvas>
    </div>
  );
}
