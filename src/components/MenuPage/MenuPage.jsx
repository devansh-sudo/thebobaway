import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import MenuPdf from './MenuPdf';
import samplePDF from "../../menu.pdf";
import "./MenuPage.css"
import  PDFViewer from "./PdfButton"
const Menu = () => {

  return (
    <div>
< PDFViewer />
<h1>Hello</h1>
      <div className="all-page-container">
        <MenuPdf pdf={samplePDF} />
      </div>
    </div>
  );
};

export default Menu;
