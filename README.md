# PDF Annotation Tool

This is a **Next.js-based PDF Annotation Tool** that allows users to upload, view, and annotate PDFs. Users can highlight text, draw on the document, and add comments before saving or exporting the file.

## 🚀 Setup & Running Instructions

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/RiteaseApp-Org/frontend-test.git
cd frontend-test.git
```


I Make sure you have **Node.js** and **npm/yarn** installed.
```sh
npm install  
```

### 3️⃣ Start the Development Server
```sh
npm run dev  
```
This will start the application at `http://localhost:3000`.

### 4️⃣ Build for Production
To generate a production build:
```sh
npm run build
```
Run the production server:
```sh
npm start
```

## 🛠️ Libraries & Tools Used

| Library/Tool | Purpose |
|-------------|---------|
| **Next.js** | Framework for building the app |
| **React** | UI development |
| **Tailwind CSS** | Styling the UI |
| **react-pdf-viewer** | Displaying PDFs |
| **fabric.js** | Enabling canvas-based annotations |
| **pdf-lib** | Editing and exporting PDFs |
| **react-dropzone** | Handling PDF file uploads |

## ⚠️ Challenges Faced & Solutions

### ✅ **Challenges Solved**
1. **Module Not Found Errors**: Encountered missing dependencies (`fabric`, `pdf-lib`, etc.).
   - **Solution**: Installed missing dependencies using `npm install fabric pdf-lib @react-pdf-viewer/core`.

2. **Canvas Initialization Error**: `fabric` was re-initializing multiple times.
   - **Solution**: Used `useRef` to ensure only a single instance of `fabric.Canvas`.

3. **State Management Issues with Annotations**:
   - **Solution**: Used React state hooks (`useState`, `useRef`) to store and manage annotation data.

### ❌ **Challenges Yet to Solve**
1. **Performance Issues on Large PDFs**: Rendering large PDFs slows down the app.
2. **Exporting Annotations in Correct PDF Layers**: Currently, annotations are being saved but not fully integrated with the original PDF text.
3. **Mobile Responsiveness**: Some tools do not work smoothly on mobile devices.

## 🔥 Features to Add in the Future
1. **Collaboration Mode**: Multiple users can annotate the same PDF in real time.
2. **Text Search & Select for Annotations**: Allow users to highlight and comment on text directly.
3. **Improved Export Options**: Save annotations as metadata inside the PDF.
4. **Cloud Storage Integration**: Save PDFs and annotations to Google Drive or Dropbox.

---
### 🎯 Contributions & Feedback
Feel free to submit a pull request or raise an issue if you find bugs or want to improve features!

📩 **Contact**: [Your Email or GitHub Profile]

