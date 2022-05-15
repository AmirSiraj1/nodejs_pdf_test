const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "SRA4", margin: 0 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 637.8;
  const fullHeight = 907.09;
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
    .text("Lab ID", 360, nameAxis);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Sample No", 360, nameAxis + 17);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Emirates ID", 360, nameAxis + 34);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Passport No.", 360, nameAxis + 51);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reg. Date", 360, nameAxis + 68);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Collection Date", 360, nameAxis + 85);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("#000")
    .text("Reporting Date", 360, nameAxis + 102);

  //****************************************************************************** */
  pdf.font("Helvetica").fontSize(12).text(":  2806351", 460, nameAxis, {
    width: 180,
  });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: Sample Id`, 460, nameAxis + 17, {
      //${data.sampleId}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(": ", 460, nameAxis + 34, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: `, 460, nameAxis + 51, {
      //${data.passportNum}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 2020/12/03`, 460, nameAxis + 68, {
      //${data.requestedDate}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: collected date`, 460, nameAxis + 85, {
      //${data.collectedDate}
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: result date`, 460, nameAxis + 102, {
      //${data.resultDate}
      width: 180,
    });

  //**************LINE*************************************************************** */
  pdf
    .moveTo(12, 195 - 4)
    .lineTo(fullWidth - 40, 195 - 4)
    .strokeColor("#000")
    .lineWidth(1)
    .stroke();
  //****************************************IMAGE************************************** */
  //   pdf.image(fs.readFileSync(`${__dirname}/assets/footer.jpg`), 0, 195, {
  //     height: 550,
  //     width: fullWidth + 70,
  //   });
  //*************************center Text******************************************** */
  pdf.font("Helvetica-Bold").fontSize(14).text(`Molecular Biology`, 270, 195, {
    width: 180,
    underline: true,
  });

  //*********************square**************************************************** */
  pdf
    .moveTo(12, 213)
    .lineTo(fullWidth - 36, 213)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf
    .moveTo(12, 232)
    .lineTo(fullWidth - 36, 232)
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
    .moveTo(fullWidth - 36, 213)
    .lineTo(fullWidth - 36, 593)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(12, 593)
    .lineTo(fullWidth - 36, 593)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  //***********************text************************************************** */
  pdf.font("Helvetica-Bold").fontSize(10).text(`Test`, 28, 217);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Result`, 192, 217);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Methodology`, 450, 217);
  //*******************************************Text********************** */
  pdf.font("Helvetica-Bold").fontSize(11).text(`COVID-19 by RT-PCR *`, 28, 245);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(`Not Detected (Negative)`, 192, 245);
  pdf.font("Helvetica").fontSize(10).text(`Multiplex Real Time PCR`, 450, 245);
  pdf
    .font("Helvetica-Oblique")
    .fontSize(9)
    .text(
      `Specimen: Nasopharyngeal swab / Oropharyngeal Swab / Saliva `,
      38,
      260
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(9)
    .text(`Interpretation of the result:- `, 38, 280);
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `**Detected:DETECTED indicates that SARS-CoV-2 RNA is present in this specimen.Results should be interpreted in the context of all available lab`,
      36,
      300,
      { wordSpacing: 0.25 }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`and clinical findings`, 36, 310, { wordSpacing: 0.25 });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `** Not Detected: If the result is NOT DETECTED, that means the sample is negative for SARS-CoV-2/Covid-19`,
      36,
      330,
      { wordSpacing: 0.25 }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `** Presumptive positive: Only one of the multiple genes is detected or a low viral load is possible, this indicates that you may have the virus.`,
      36,
      350,
      { wordSpacing: 0.25 }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`Please repeat the test in 72-96 hours for confirmation`, 36, 360, {
      wordSpacing: 0.25,
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
