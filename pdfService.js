const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "A4", margin: 10 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 533.28;
  const fullHeight = 841.89;
  const nameAxis = 76;

  pdf
    .font("Times-Bold")
    .fontSize(12)
    .fillColor("#fff")
    .text("1/18/21, 5:20 PM", 0, 0);

  pdf.image(fs.readFileSync(`${__dirname}/assets/head.jpg`), 230, 100, {
    height: 150,
    width: 100,
  });

  pdf.end();
}

module.exports = { buldPdf };
