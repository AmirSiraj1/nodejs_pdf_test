const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdf = new PDFDocument({ size: "A5", margin: 10 });
const fullWidth = 595.28;
const fullHeight = 841.89;
const nameAxis = 76;
const textYaxis = 335;

function squer(a, b, c, d) {
  pdf
    .moveTo(a, textYaxis + c)
    .lineTo(b, textYaxis + c)
    .strokeColor("#000")
    .lineWidth(0.25)
    .stroke();
  pdf
    .moveTo(a, textYaxis + c)
    .lineTo(a, textYaxis + d)
    .strokeColor("#000")
    .lineWidth(0.25)
    .stroke();
  pdf
    .moveTo(b, textYaxis + c)
    .lineTo(b, textYaxis + d)
    .strokeColor("#000")
    .lineWidth(0.25)
    .stroke();
  pdf
    .moveTo(a, textYaxis + d)
    .lineTo(b, textYaxis + d)
    .strokeColor("#000")
    .lineWidth(0.25)
    .stroke();
}
function customerTextFild(text, xPosition, yPosition) {
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#000")
    .text(text, xPosition, textYaxis + yPosition);
}

function buldPdf() {
  pdf.pipe(fs.createWriteStream(`output1.pdf`));

  pdf
    .font("Times-Bold")
    .fontSize(8)
    .fillColor("#000")
    .text("1/18/21, 5:20 PM", 25, 20);
  //***********************first vertical line ----******** */
  pdf.moveTo(30, 36).lineTo(100, 36).strokeColor("#000").lineWidth(4).stroke();
  //****************first horizontal line |************ */
  pdf.moveTo(30, 34).lineTo(30, 400).strokeColor("#000").lineWidth(4).stroke();
  //**************second vertical line ---********************* */
  pdf
    .moveTo(30, 400)
    .lineTo(400, 400)
    .strokeColor("#000")
    .lineWidth(4)
    .stroke();
  //********************second vertical line***************  */
  pdf
    .moveTo(100, 36)
    .lineTo(100, 400)
    .strokeColor("#000")
    .lineWidth(4)
    .stroke();
  //********************************image****************** */
  //   pdf.image(fs.readFileSync(`${__dirname}/assets/head.jpg`), 100, 40, {
  //     height: 250,
  //     width: 400,
  //   });
  //************************************************** */
  pdf
    .font("Times-Roman")
    .fontSize(11)
    .fillColor("#BFCFFF")
    .text("Demographic information", 237, textYaxis - 14);
  //*********************left text********************** */
  customerTextFild("Full Name : MUSTOFA KASSA BELACHEW", 60, 0);
  customerTextFild("Id. No : ", 60, 15);
  customerTextFild("Sex: ", 60, 30);
  customerTextFild("Region: ", 60, 45);
  customerTextFild("Woreda: ", 60, 60);
  customerTextFild("Village/Got: ", 60, 75);

  //**************right text********************* */
  customerTextFild("Date of birth: 1982-01-01", 313, 0);
  customerTextFild("Passport Number: ", 313, 15);
  customerTextFild("Occupation: ", 313, 30);
  customerTextFild("Zone/sub-city: ", 313, 45);
  customerTextFild("Kebele: ", 313, 60);
  customerTextFild("Place of vaccination: Bole 17/20 HC", 313, 75);

  pdf
    .moveTo(fullWidth - 50, textYaxis + 110)
    .lineTo(fullWidth - 50, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.25)
    .stroke();
  customerTextFild("Prepared by: Helina Embibel", 60, 190);
  customerTextFild("Authorized by :", 420, 190);
  customerTextFild("Issued date: 2021-11-18", 60, 207);
  pdf.end();
}

module.exports = { buldPdf };
