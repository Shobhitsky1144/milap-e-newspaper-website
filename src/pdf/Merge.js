import PDFMerger from "pdf-merger-js/browser";
import React, { useEffect, useState } from "react";
import { Document } from "react-pdf/dist/esm/entry.webpack";
import { Page } from "react-pdf";
import HTMLFlipBook from "react-pageflip";

// files: Array of PDF File or Blob objects
const Merge = ({ files }) => {
  const [mergedPdfUrl, setMergedPdfUrl] = useState();
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  function fileLoadSuccess({ numPages }) {
    setNumPages(numPages);

    console.log("total pages", numPages);
  }
  useEffect(() => {
    const render = async () => {
      const merger = new PDFMerger();
      console.log("files", files);
      await Promise.all(files?.map(async (file) => await merger.add(file)));

      const mergedPdf = await merger.saveAsBlob();
      const url = URL.createObjectURL(mergedPdf);

      return setMergedPdfUrl(url);
    };

    render().catch((err) => {
      throw err;
    });
    // () => setMergedPdfUrl({});
  }, [files, setMergedPdfUrl]);

  return !mergedPdfUrl ? (
    <>Loading</>
  ) : (
    // <iframe
    //   height={1000}
    //   src={`${mergedPdfUrl}`}
    //   title="pdf-viewer"
    //   width="100%s"
    // ></iframe>
    // <Document
    //   file={mergedPdfUrl}
    //   onLoadSuccess={fileLoadSuccess}
    //   className="pdf-viewer "
    //   // loading={false}
    // >
    <HTMLFlipBook
      // ref={book}
      width={1430}
      height={1500}
      useMouseEvents={true}
      // onChangeState={Change}

      // onFlip={onFlip}
      // renderOnlyPageLengthChange={true}
      // startZIndex={2}
      // reverse
      // swipeDistance={10}
      // usePortrait={false}
      // renderOnlyPageLengthChange={true}
    >
      {/* <div className="demoPage">
              <object
                data={pdfFile}
                type="application/pdf"
                width="500"
                height="678"
              ></object>
            </div>
            <div className="demoPage"></div> */}

      {/* <Page pageNumber={pageNumber} scale={scale}></Page> */}
      {new Array(numPages).fill(numPages).map((item, position) => (
        <div>
          <Page pageNumber={position + 1} scale={scale}></Page>
        </div>
      ))}
    </HTMLFlipBook>
    // </Document>
  );
};
export default Merge;
