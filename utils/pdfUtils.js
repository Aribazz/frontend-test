import { PDFDocument, rgb } from "pdf-lib";

export async function exportPDF(originalPdf, fabricCanvas) {
  const existingPdfBytes = await originalPdf.arrayBuffer();
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPages()[0];

  fabricCanvas.getObjects().forEach((obj) => {
    if (obj.type === "rect") {
      page.drawRectangle({
        x: obj.left,
        y: page.getHeight() - obj.top,
        width: obj.width,
        height: obj.height,
        color: rgb(1, 1, 0), 
        opacity: 0.5,
      });
    } else if (obj.type === "text") {
      page.drawText(obj.text, {
        x: obj.left,
        y: page.getHeight() - obj.top,
        size: 16,
        color: rgb(0, 0, 0),
      });
    }
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "annotated_document.pdf";
  a.click();
}
