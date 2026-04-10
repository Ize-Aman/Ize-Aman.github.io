import { createPluginRegistration } from '@embedpdf/core';
import { EmbedPDF } from '@embedpdf/core/react';
import { usePdfiumEngine } from '@embedpdf/engines/react';
import { useEffect, useState } from 'react';

// Import the essential plugins
import { Viewport, ViewportPluginPackage } from '@embedpdf/plugin-viewport/react';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/react';
import {
    DocumentContent,
    DocumentManagerPluginPackage,
} from '@embedpdf/plugin-document-manager/react';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/react';

// 1. Register the plugins you need
const plugins = [
    createPluginRegistration(DocumentManagerPluginPackage, {
        initialDocuments: [{ url: '/Resume.pdf' }],
    }),
    createPluginRegistration(ViewportPluginPackage),
    createPluginRegistration(ScrollPluginPackage),
    createPluginRegistration(RenderPluginPackage),
];

const Resume = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 2. Initialize the engine with the React hook
    const { engine, isLoading } = usePdfiumEngine();

    if (isLoading || !engine) {
        return <div>Loading PDF Engine...</div>;
    }

    // 3. Wrap your UI with the <EmbedPDF> provider
    return (
        <div className='wrapper'>
            <section className='px-4 sm:px-6 md:px-10 lg:px-35 min-h-screen pt-15'>
                <EmbedPDF engine={engine} plugins={plugins}>
                    {({ activeDocumentId }) =>
                        activeDocumentId && (
                            <DocumentContent documentId={activeDocumentId}>
                                {({ isLoaded }) =>
                                    isLoaded && (
                                        <Viewport
                                            documentId={activeDocumentId}

                                        >
                                            <Scroller
                                                documentId={activeDocumentId}
                                                renderPage={({ width, height, pageIndex }) => (
                                                    (() => {
                                                        const horizontalPadding = windowWidth < 695 ? 32 : 64;
                                                        const maxWidth = Math.max(240, windowWidth - horizontalPadding);
                                                        const responsiveScale = Math.min(1, maxWidth / width);

                                                        return (
                                                            <div
                                                                style={{
                                                                    width: width * responsiveScale,
                                                                    height: height * responsiveScale,
                                                                    margin: '0 auto',
                                                                }}
                                                            >
                                                                {/* The RenderLayer is responsible for drawing the page */}
                                                                <RenderLayer
                                                                    documentId={activeDocumentId}
                                                                    pageIndex={pageIndex}
                                                                />
                                                            </div>
                                                        );
                                                    })()
                                                )}
                                            />
                                        </Viewport>
                                    )
                                }
                            </DocumentContent>
                        )
                    }
                </EmbedPDF>
            </section>
        </div>
    );
};

export default Resume