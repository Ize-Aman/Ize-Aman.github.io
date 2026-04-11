import React from "react";
import { pdfjs, Document, Page } from 'react-pdf';
import { useState } from "react";
import path from 'node:path';
import fs from 'node:fs';
import resume from '@/assets/Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();




const Resume = () => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
    }

    return (
        <div className="wrapper">
            <section className="px-10 lg:px-35 min-h-screen lg:pt-15">
                <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
            </section>
        </div>
    )
};

export default Resume;
