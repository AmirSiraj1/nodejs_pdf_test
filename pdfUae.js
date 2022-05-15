const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf(data) {
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
  //   ${data.fullName}
  pdf.font("Helvetica").fontSize(12).text(`:  Amir Siraj Ali`, 90, nameAxis, {
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
    .text(`:  Male`, 90, nameAxis + 51, {
      //${data.sex}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  dbo`, 90, nameAxis + 68, {
      //${data.dbo}
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
    .text("Lab ID", 330, nameAxis);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Sample No", 330, nameAxis + 17);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Emirates ID", 330, nameAxis + 34);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Passport No.", 330, nameAxis + 51);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reg. Date", 330, nameAxis + 68);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Collection Date", 330, nameAxis + 85);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reporting Date", 330, nameAxis + 102);

  //****************************************************************************** */
  pdf.font("Helvetica").fontSize(12).text(":  2806351", 430, nameAxis, {
    width: 180,
  });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: Sample Id`, 430, nameAxis + 17, {
      //${data.sampleId}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(": ", 430, nameAxis + 34, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: `, 430, nameAxis + 51, {
      //${data.passportNum}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 2020/12/03`, 430, nameAxis + 68, {
      //${data.requestedDate}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: collected date`, 430, nameAxis + 85, {
      //${data.collectedDate}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: result date`, 430, nameAxis + 102, {
      //${data.resultDate}
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
  //   pdf.image(fs.readFileSync(`${__dirname}/assets/footer.jpg`), 0, 195, {
  //     height: 550,
  //     width: fullWidth + 70,
  //   });
  //*************************center Text******************************************** */
  pdf.font("Helvetica-Bold").fontSize(14).text(`Molecular Biology`, 240, 195, {
    width: 180,
    underline: true,
  });

  //*********************square**************************************************** */
  pdf
    .moveTo(12, 213)
    .lineTo(570, 213)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf
    .moveTo(12, 232)
    .lineTo(570, 232)
    .strokeColor("#000")
    .lineWidth(1.2)
    .stroke();
  pdf
    .moveTo(12, 213)
    .lineTo(12, 593)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(570, 213)
    .lineTo(570, 593)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(12, 593)
    .lineTo(570, 593)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
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
