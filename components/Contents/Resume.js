"use client";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import {
  BiSkipNextCircle,
  BiSkipPreviousCircle,
  BiDownload,
} from "react-icons/bi";
import { pdfjs } from "react-pdf";
import Link from "next/link";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

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
    <div className="grid grid-rows-3 gap-2 justify-center text-center mx-auto w-full px-10 mt-10 pt-10">
      <div className="shadow-xl">
        <div className="h-10 ">
          <Link
            href={`/assets/resume/silakmehmet.pdf`}
            className="cursor-pointer py-4 px-4 flex justify-end"
            target="_blank"
            rel="noopener noreferrer"
            title="Download CV"
            download
          >
            <BiDownload size={25} />
          </Link>
        </div>
        <Document
          file="/assets/resume/silakmehmet.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
      </div>

      <div className="justify-center pt-4">
        <div className="flex justify-around">
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
            className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
          >
            <BiSkipPreviousCircle size={25} />
          </button>
          <p className="font-semibold font-sans text-sm">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>

          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
            className="cursor-pointer disabled:opacity-25 disabled:cursor-default"
          >
            <BiSkipNextCircle size={25} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
