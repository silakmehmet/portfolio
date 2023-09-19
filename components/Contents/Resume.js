'use client';
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  return (
    <div className='flex justify-center text-center'>
      <Document
        file='/assets/resume/silakmehmet.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} renderTextLayer={false} />
      </Document>
      <div className='flex w-full bottom-1 text-center items-center justify-center'>
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>

        <button type='button' disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type='button'
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Resume;
