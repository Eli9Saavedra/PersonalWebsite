import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { FaDownload } from 'react-icons/fa'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

function ResumePage() {
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [pageWidth, setPageWidth] = useState(800)

    useEffect(() => {
        function updatePageWidth() {
            const viewportWidth = window.innerWidth

            if (viewportWidth < 480) {
                setPageWidth(viewportWidth - 32)
                return
            }

            if (viewportWidth < 768) {
                setPageWidth(viewportWidth - 48)
                return
            }

            if (viewportWidth < 1024) {
                setPageWidth(Math.min(700, viewportWidth - 80))
                return
            }

            setPageWidth(800)
        }

        updatePageWidth()
        window.addEventListener('resize', updatePageWidth)

        return () => window.removeEventListener('resize', updatePageWidth)
    }, [])

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
        setIsLoading(false)
    }

    function onDocumentLoadError(error) {
        console.error('PDF load error:', error)
        setIsLoading(false)
    }

    function handleDownload() {
        const link = document.createElement('a')
        link.href = '/Resume/Main Resume.pdf'
        link.download = 'Elijah_Saavedra_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="resume-page">
            <div className="resume-shell">
                <div className="resume-topbar">
                    <div className="resume-title-group">
                        <p className="resume-eyebrow">Professional Resume</p>
                        <h1>Resume</h1>
                        <p className="resume-subtitle">
                            View my resume online or download a PDF copy.
                        </p>
                    </div>

                    <button className="download-btn" onClick={handleDownload} type="button">
                        <FaDownload />
                        <span>Download PDF</span>
                    </button>
                </div>

                <div className="pdf-viewer-container">
                    {isLoading && <div className="pdf-loading">Loading resume...</div>}

                    <Document
                        file="/Resume/Main Resume.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading=""
                    >
                        <Page pageNumber={pageNumber} width={pageWidth} />
                    </Document>

                    {numPages && numPages > 1 && (
                        <div className="pdf-pagination">
                            <button
                                type="button"
                                onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
                                disabled={pageNumber === 1}
                                className="pagination-btn"
                            >
                                ← Previous
                            </button>

                            <span className="page-info">
                                Page {pageNumber} of {numPages}
                            </span>

                            <button
                                type="button"
                                onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
                                disabled={pageNumber === numPages}
                                className="pagination-btn"
                            >
                                Next →
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ResumePage