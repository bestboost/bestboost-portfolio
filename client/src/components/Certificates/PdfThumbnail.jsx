import { useEffect, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js";

const PdfThumbnail = ({ url, alt, onClick }) => {
  const canvasRef = useRef(null);
  const renderTaskRef = useRef(null);
  const thumbnailScale = 0.3; // Масштабування мініатюри (0.3 = 30% від оригінального розміру)

  useEffect(() => {
    if (!url) {
      console.error("URL is undefined!");
      return;
    }

    let isMounted = true;

    const loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise
      .then((pdf) => pdf.getPage(1))
      .then((page) => {
        if (!isMounted) return;

        const viewport = page.getViewport({ scale: thumbnailScale }); // Використовуємо масштаб
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = { canvasContext: context, viewport };
        const renderTask = page.render(renderContext);

        renderTaskRef.current = renderTask;
        return renderTask.promise;
      })
      .catch((err) => console.error("Помилка при рендері PDF:", err));

    return () => {
      isMounted = false;
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [url]);

  return (
    <canvas
      ref={canvasRef}
      onClick={onClick}
      style={{
        cursor: "pointer",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
      }}
      title={alt}
    />
  );
};

export default PdfThumbnail;
