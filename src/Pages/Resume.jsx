import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from 'react-pdf';

import resume from '@/assets/Resume.pdf';

import Button from '@/components/Button';
import { BsDownload } from "react-icons/bs";

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
                : Math.min(wid - 40, 620);

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

            <Button link={'#'} icon={<BsDownload />} text={'Download CV'} />
        </section>
    )
};

export default Resume;
