const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdf = new PDFDocument({ size: "A4", margin: 10 });
const fullWidth = 595.28;
const fullHeight = 841.89;
const nameAxis = 76;
const textYaxis = 335;

function squer(a, b, c, d) {
  pdf
    .moveTo(a, textYaxis + c)
    .lineTo(b, textYaxis + c)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(a, textYaxis + c)
    .lineTo(a, textYaxis + d)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(b, textYaxis + c)
    .lineTo(b, textYaxis + d)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(a, textYaxis + d)
    .lineTo(b, textYaxis + d)
    .strokeColor("#000")
    .lineWidth(0.5)
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

  //*************table*************************************** */
  //**************verticals********************************** */
  pdf
    .moveTo(60, textYaxis + 110)
    .lineTo(fullWidth - 60, textYaxis + 110)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  //******************************** */
  squer(61.5, 148.5, 111, 125);
  customerTextFild("Dose", 62, 114);

  squer(61.5, 148.5, 126, 140);
  customerTextFild("Dose 1", 62, 129);

  squer(61.5, 148.5, 141, 155);
  customerTextFild("Dose 2", 62, 144);

  squer(61.5, 148.5, 156, 169);
  customerTextFild("Booster dose", 62, 159);

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

  //********************************** */
  squer(150, 254.5, 111, 125);
  customerTextFild("Vaccine type", 151, 114);

  squer(150, 254.5, 126, 140);
  customerTextFild("Johnson_johnson", 151, 129);

  squer(150, 254.5, 141, 155);

  squer(150, 254.5, 156, 169);

  //******************************* */
  squer(255.5, 344.5, 111, 125);
  customerTextFild("Batch No.", 256, 114);

  squer(255.5, 344.5, 126, 140);
  customerTextFild("209C21A", 256, 129);

  squer(255.5, 344.5, 141, 155);

  squer(255.5, 344.5, 156, 169);

  //***************************** */

  squer(345.5, 444.5, 111, 125);
  customerTextFild("Date vaccinated", 346, 114);

  squer(345.5, 444.5, 126, 140);
  customerTextFild("2021-11-18", 346, 129);

  squer(345.5, 444.5, 141, 155);

  squer(345.5, 444.5, 156, 169);

  /************************ */
  squer(445.5, 534, 111, 125);
  customerTextFild("Next Vaccination date", 446, 114);

  squer(445.5, 534, 126, 140);

  squer(445.5, 534, 141, 155);

  squer(445.5, 534, 156, 169);
  //************************ */
  pdf
    .moveTo(fullWidth - 60, textYaxis + 110)
    .lineTo(fullWidth - 60, textYaxis + 170)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf.end();
}

module.exports = { buldPdf };
