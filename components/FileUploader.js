"use client"

import { useDropzone } from "react-dropzone";

export default function FileUploader({ onFileUpload }) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        onFileUpload && onFileUpload(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className="border-dashed border-2 p-6 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      <p>Drag & drop a PDF file here, or click to select one</p>
    </div>
  );
}
