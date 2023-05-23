import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from '../berkeleyResume.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";

export default function Resume() {
  return (
    <div>
      <Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
    </div>
  )
}