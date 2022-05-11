const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "C4", margin: 0 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 649.13;
  const fullHeight = 918.43;
  const nameAxis = 130;

  pdf.image(fs.readFileSync(`${__dirname}/assets/header.jpg`), 0, 0, {
    height: 80,
    width: fullWidth,
  });
  //***************************texts*********************************************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Name", 17, nameAxis);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("MRN", 17, nameAxis + 17);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Reference No", 17, nameAxis + 34);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Gender", 17, nameAxis + 51);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Age / DBO", 17, nameAxis + 68);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Location", 17, nameAxis + 85);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
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
    .fontSize(10)
    .fillColor("#000")
    .text("Lab ID", 370, nameAxis);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Sample No", 370, nameAxis + 17);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Emirates ID", 370, nameAxis + 34);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Passport No.", 370, nameAxis + 51);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Reg. Date", 370, nameAxis + 68);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Collection Date", 370, nameAxis + 85);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Reporting Date", 370, nameAxis + 102);

  //****************************************************************************** */
  pdf.font("Helvetica").fontSize(12).text(":  2806351", 470, nameAxis, {
    width: 180,
  });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 222209090`, 470, nameAxis + 17, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(": ", 470, nameAxis + 34, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: EM15125`, 470, nameAxis + 51, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 12-55-2020`, 470, nameAxis + 68, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 20-11-2020`, 470, nameAxis + 85, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 23-55-2020`, 470, nameAxis + 102, {
      width: 180,
    });

  //**************LINE*************************************************************** */
  pdf
    .moveTo(12, 250)
    .lineTo(fullWidth - 12, 250)
    .strokeColor("#000")
    .lineWidth(1.2)
    .stroke();
  //*************************center Text******************************************** */
  pdf.font("Helvetica-Bold").fontSize(15).text(`Molecular Biology`, 240, 252, {
    width: 180,
    underline: true,
  });
  //*********************square**************************************************** */
  pdf
    .moveTo(12, 270)
    .lineTo(fullWidth - 12, 270)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf
    .moveTo(12, 289)
    .lineTo(fullWidth - 12, 289)
    .strokeColor("#000")
    .lineWidth(1.2)
    .stroke();
  pdf
    .moveTo(12, 270)
    .lineTo(12, 650)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(fullWidth - 12, 270)
    .lineTo(fullWidth - 12, 650)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(12, 650)
    .lineTo(fullWidth - 12, 650)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  //***********************text************************************************** */
  pdf.font("Helvetica-Bold").fontSize(10).text(`Test`, 28, 274);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Result`, 192, 274);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Reference Range`, 370, 274);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Methodology`, 493, 274);
  //*******************************************Text********************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(`COVID-19 by RT-PCR *`, 28, 302);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(`Not Detected (Negative)`, 192, 302);
  pdf.font("Helvetica").fontSize(10).text(`Not Detected`, 370, 302);
  pdf.font("Helvetica").fontSize(10).text(`Multiplex Real Time PCR`, 493, 302);
  pdf.font("Helvetica").fontSize(10).text(`Sample Type: `, 28, 330);
  pdf
    .font("Times-Italic")
    .fontSize(10.5)
    .text(`Nasopharyngeal / Oropharyngeal Swab `, 97, 330);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(`Interpretation Notes :`, 24, 358);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(
      `Result                          Interpretation and Recommendations`,
      24,
      378
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `Detected                         If the result is detected, that means the sample is positive for SARS-CoV-2/Covid-19`,
      24,
      398
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `Not Detected                      If the result is not detected, that means the sample is negative for SARS-CoV-2/Covid-19`,
      24,
      410
    );
  pdf
    .font("Helvetica")
    .fontSize(11)
    .text(
      `Presumptive Positive     Only one of the multiple genes is detected or a low viral load is possible. Request for repeat sample in 72-96 hours.`,
      24,
      422,
      { width: fullWidth - 25, lineGap: 0.5 }
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `The false-negative result with clinical symptoms may be caused by`,
      24,
      462
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `. Unsuitable collection, handling, and/or storage of samples. `,
      24,
      474
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(`. Sample outside of the viremic phase.`, 24, 486);
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(`We recommend repeating testing on a fresh sample`, 24, 498);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(`LIMITATION OF THE TEST`, 24, 515);
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `· This assay has been validated for use with an oropharyngeal swab and nasopharyngeal swab samples only.`,
      24,
      530
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(`· This assay only detects RdRp, N gene, and E gene.`, 24, 542);
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `· This test cannot rule out diseases caused by other pathogens. `,
      24,
      554
    );
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(
      `This certificate has been issued electronically by MBM Medical Laboratory. Any party that relies on the result of this certificate should first check   its authenticity by scanning of the above QR code or by sending email to reception.Info@mbmlab.ae . MBM Medical laboratory is not responsible for any misuse of this certificate or its content`,
      22,
      585,
      { width: fullWidth - 27.5, lineGap: 0.5 }
    );
  pdf.font("Helvetica-Bold").fontSize(9).text(`End Of Report `, 260, 639);

  //****************************************IMAGE************************************** */
  pdf.image(fs.readFileSync(`${__dirname}/assets/segniture.png`), 10, 689, {
    height: 120,
    width: 230,
  });

  // pdf.image(fs.readFileSync(`${__dirname}/assets/sstamp.png`), 250, 195, {
  //   height: 150,
  //   width: 150,
  // });
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
