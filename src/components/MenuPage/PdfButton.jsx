import React from 'react';

const PDFViewer = ({ url }) => {
  const openPDF = () => {
    window.open("menu.pdf", '_blank');
  };

  return (
    <button onClick={openPDF}>View PDF</button>
  );
};

export default PDFViewer;
