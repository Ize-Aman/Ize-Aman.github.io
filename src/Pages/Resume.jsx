import Pdf from "@/components/pdf";
import React from "react";
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    return (
        <div>
            <Pdf />
        </div>
    )
};

export default Resume;
