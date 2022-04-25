const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "A4" });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
}

module.exports = { buldPdf };
