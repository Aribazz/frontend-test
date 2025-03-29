import Image from "next/image";
// import "../app/globals.css";
import PdfViewer from "../../components/PDFViewer";
import AnnotationTools from "../../components/AnnotationToolbar";
import FileUploader from "../../components/FileUploader";

export default function Home() {
  return (
    <main className="p-4 item-align-center">
      <h1 className="text-2xl font-bold mb-4">PDF Annotation Tool</h1>
      <FileUploader />
      <AnnotationTools />
      <PdfViewer />
    </main>
  );
}