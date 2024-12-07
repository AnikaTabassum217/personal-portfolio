// "use client";
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// const PdfViewer = ({ url }) => {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();
//   return (
//     <div className="h-screen w-screen">
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.10.111/build/pdf.worker.min.js">
//         <Viewer
//           fileUrl={url}
//           plugins={[defaultLayoutPluginInstance]}
//         />
//       </Worker>
//     </div>
//   );
// };
// export default PdfViewer;


// "use client";

// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css"; // Core styles for the viewer
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css"; // Styles for the default layout plugin

// const PdfViewer = ({ url }) => {
//   // Initialize the default layout plugin
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div className="h-screen w-screen">
//       {/* Set the worker URL for PDF.js */}
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//         <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
//       </Worker>
//     </div>
//   );
// };

// export default PdfViewer;


"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ url }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="h-screen w-screen">
      {/* Updated Worker URL to match the installed version */}
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={url} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default PdfViewer;
