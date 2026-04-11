import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from 'react-pdf';
import resume from '@/assets/Resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();




const Resume = () => {
    const [wid, setWid] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWid(window.innerWidth);

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pageWidth =
        wid < 500
            ? Math.min(wid - 28, 360)
            : wid < 768
                ? Math.min(wid - 40, 620)
                : Math.min(wid - 96, 920);

    return (
        <section className="resume-page">
            <div className="resume-shell">
                <Document file={resume} loading="Loading resume...">
                    <Page
                        pageNumber={1}
                        width={pageWidth}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                    />
                </Document>
            </div>
        </section>
    )
};

export default Resume;
