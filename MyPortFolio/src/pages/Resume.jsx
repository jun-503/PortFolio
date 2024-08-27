import { useRef, useEffect, useState } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const pdfFile = '/MYResume.pdf';

const MyResume = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const renderPageToImage = async () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      const loadingTask = pdfjs.getDocument(pdfFile);
      const pdf = await loadingTask.promise;

      const page = await pdf.getPage(1); // Render the first page
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      setImageSrc(canvas.toDataURL());
    };

    renderPageToImage();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile
    link.click();
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', padding: '20px' }}>
      {imageSrc ? (
        <img src={imageSrc} alt="PDF Page as Image" style={{ maxWidth: '100%', height: 'auto' }} />
      ) : (
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      )}
      <button
        onClick={handleDownload}
        className="btn btn-primary mt-3"
        style={{ backgroundColor: '#323232', borderColor: '#14213d' }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default MyResume;
