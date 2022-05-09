const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "A4", margin: 0 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 533.28;
  const fullHeight = 841.89;
  const nameAxis = 76;

  pdf.image(fs.readFileSync(`${__dirname}/assets/header.jpg`), 0, 0, {
    height: 80,
    width: fullWidth,
  });
  //***************************texts*********************************************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Name", 17, nameAxis);

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("MRN", 17, nameAxis + 17);

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reference No", 17, nameAxis + 34);

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Gender", 17, nameAxis + 51);

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Age / DBO", 17, nameAxis + 68);

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Location", 17, nameAxis + 85);

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Ref. By Dr.", 17, nameAxis + 102);

  //************************************************************************ */
  pdf.font("Helvetica").fontSize(12).text(`:  AMIR SIRAJ ALI`, 90, nameAxis, {
    width: 180,
  });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(":  754775-0", 90, nameAxis + 17, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(":  080122S3DT74786", 90, nameAxis + 34, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  MALE`, 90, nameAxis + 51, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  12-22-2022`, 90, nameAxis + 68, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(10)
    .text(":   AL FUTTAIM DUBAI FESTIVAL CITY", 90, nameAxis + 85, {
      width: 185,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(":   ", 90, nameAxis + 102, {
      width: 180,
    });
  //********************************************************************************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Lab ID", 300, nameAxis);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Sample No", 300, nameAxis + 17);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Emirates ID", 300, nameAxis + 34);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Passport No.", 300, nameAxis + 51);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reg. Date", 300, nameAxis + 68);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Collection Date", 300, nameAxis + 85);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reporting Date", 300, nameAxis + 102);

  //****************************************************************************** */
  pdf.font("Helvetica").fontSize(12).text(":  2806351", 400, nameAxis, {
    width: 180,
  });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 222209090`, 400, nameAxis + 17, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(": ", 400, nameAxis + 34, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: EM15125`, 400, nameAxis + 51, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 12-55-2020`, 400, nameAxis + 68, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 20-11-2020`, 400, nameAxis + 85, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 23-55-2020`, 400, nameAxis + 102, {
      width: 180,
    });

  //**************LINE*************************************************************** */
  pdf
    .moveTo(12, 195 - 4)
    .lineTo(570, 195 - 4)
    .strokeColor("#000")
    .lineWidth(1)
    .stroke();
  //****************************************IMAGE************************************** */
  pdf.image(fs.readFileSync(`${__dirname}/assets/imgs.png`), 0, 195, {
    height: 140,
    width: 230,
  });

  pdf.image(fs.readFileSync(`${__dirname}/assets/sstamp.png`), 250, 195, {
    height: 150,
    width: 150,
  });
  //*********************************************************************************** */
  pdf
    .fontSize(7)
    .text(
      "THIS IS A SYSTEM GENERATED REPORT AND DOES NOT REQUIRE PHYSICAL SIGNATURE",
      150,
      749,
      {
        width: 400,
      }
    );
  pdf
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("Printed By:     Automatic Printing", 15, 759, {
      width: 180,
    });
  pdf
    .font("Helvetica-Bold")
    .fontSize(8)
    .text("Printed Date:     Automatic Printing", 400, 759, {
      width: 150,
    });
  pdf
    .font("Helvetica-Bold")
    .fontSize(8)
    .text(
      "Al Quoz,Industrial Area 4 - P.O Box 26148,Dubai,UAE - Tel: +971 55 538 7248-Fax: +971 4 386 9998-Email: customercaredxb@menalabs.com",
      20,
      fullHeight - 20,
      {
        width: fullWidth,
      }
    );

  pdf.end();
}

module.exports = { buldPdf };
