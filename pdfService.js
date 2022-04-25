const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "A4" });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 530.28;
  const fullHeight = 841.89;

  pdf.image(fs.readFileSync(`${__dirname}/assets/header.jpg`), 0, 5, {
    height: 75,
    width: fullWidth,
  });
  pdf.fontSize(10).fillColor("#000").text("Name", 10, 100);

  pdf.end();
}

module.exports = { buldPdf };
