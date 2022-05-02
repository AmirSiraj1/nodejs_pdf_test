const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "A4", margin: 10 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 595.28;
  const fullHeight = 841.89;
  const nameAxis = 76;
  const textYaxis = 335;

  pdf
    .font("Times-Bold")
    .fontSize(8)
    .fillColor("#000")
    .text("1/18/21, 5:20 PM", 25, 20);
  //***********************first vertical line ----******** */
  pdf
    .moveTo(30, 36)
    .lineTo(fullWidth - 28, 36)
    .strokeColor("#000")
    .lineWidth(4)
    .stroke();
  //****************first horizontal line |************ */
  pdf
    .moveTo(30, 34)
    .lineTo(30, fullHeight - 28)
    .strokeColor("#000")
    .lineWidth(4)
    .stroke();
  //**************second vertical line ---********************* */
  pdf
    .moveTo(30, fullHeight - 30)
    .lineTo(fullWidth - 28, fullHeight - 28)
    .strokeColor("#000")
    .lineWidth(4)
    .stroke();
  //********************second vertical line***************  */
  pdf
    .moveTo(fullWidth - 30, 36)
    .lineTo(fullWidth - 30, fullHeight - 30)
    .strokeColor("#000")
    .lineWidth(4)
    .stroke();
  //********************************image****************** */
  pdf.image(fs.readFileSync(`${__dirname}/assets/head.jpg`), 100, 40, {
    height: 250,
    width: 400,
  });
  //*********************left text********************** */
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Full Name : MUSTOFA KASSA BELACHEW", 60, textYaxis);

  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Id. No : ", 60, textYaxis + 15);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Sex: ", 60, textYaxis + 30);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Region: ", 60, textYaxis + 45);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Woreda: ", 60, textYaxis + 60);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Village/Got: ", 60, textYaxis + 75);
  //**************right text********************* */
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Date of birth: 1982-01-01", 313, textYaxis);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Passport Number: ", 313, textYaxis + 15);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Occupation: ", 313, textYaxis + 30);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Zone/sub-city: ", 313, textYaxis + 45);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Kebele: ", 313, textYaxis + 60);
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text("Place of vaccination: Bole 17/20 HC", 313, textYaxis + 75);

  //*************table*************************************** */
  //**************verticals********************************** */
  pdf
    .moveTo(60, textYaxis + 110)
    .lineTo(fullWidth - 60, textYaxis + 110)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(60, textYaxis + 125)
    .lineTo(fullWidth - 60, textYaxis + 125)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(60, textYaxis + 140)
    .lineTo(fullWidth - 60, textYaxis + 140)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(60, textYaxis + 155)
    .lineTo(fullWidth - 60, textYaxis + 155)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(60, textYaxis + 170)
    .lineTo(fullWidth - 60, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  //**************************horizontals************************* */
  pdf
    .moveTo(60, textYaxis + 110)
    .lineTo(60, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(150, textYaxis + 110)
    .lineTo(150, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(255, textYaxis + 110)
    .lineTo(255, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(345, textYaxis + 110)
    .lineTo(345, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(445, textYaxis + 110)
    .lineTo(445, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf
    .moveTo(fullWidth - 60, textYaxis + 110)
    .lineTo(fullWidth - 60, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf.end();
}

module.exports = { buldPdf };
