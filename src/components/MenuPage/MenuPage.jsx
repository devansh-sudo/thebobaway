import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import MenuPdf from './MenuPdf';
import samplePDF from "../../menu.pdf";
// import "./MenuPage.css"
import  PDFViewer from "./PdfButton"

import dish from "../../menu.pdf"
const Menu = () => {

  window.open(dish, '_blank');

  return (
    <div>
      <div className="all-page-container">
      
  
    
  
      </div>
    </div>
  );
};

export default Menu;
