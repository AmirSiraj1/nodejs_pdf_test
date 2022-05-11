const PDFDocument = require("pdfkit");
const fs = require("fs");

function buldPdf() {
  const pdf = new PDFDocument({ size: "C4", margin: 0 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 649.13;
  const fullHeight = 918.43;
  const nameAxis = 120;

  pdf.image(fs.readFileSync(`${__dirname}/assets/MBM_logo1.png`), 4, 0, {
    height: 100,
    width: 185,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/email.png`), 549, 10, {
    height: 40,
    width: 100,
    link: "www.info@mbmlab.ae",
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
    .moveTo(12, 240)
    .lineTo(fullWidth - 12, 240)
    .strokeColor("#000")
    .lineWidth(1.2)
    .stroke();
  //*************************center Text******************************************** */
  pdf.font("Helvetica-Bold").fontSize(15).text(`Molecular Biology`, 240, 242, {
    width: 180,
    underline: true,
  });
  //*********************square**************************************************** */
  pdf
    .moveTo(12, 260)
    .lineTo(fullWidth - 12, 260)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf
    .moveTo(12, 279)
    .lineTo(fullWidth - 12, 279)
    .strokeColor("#000")
    .lineWidth(1.2)
    .stroke();
  pdf
    .moveTo(12, 260)
    .lineTo(12, 640)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(fullWidth - 12, 260)
    .lineTo(fullWidth - 12, 640)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(12, 640)
    .lineTo(fullWidth - 12, 640)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  //***********************text************************************************** */
  pdf.font("Helvetica-Bold").fontSize(10).text(`Test`, 28, 264);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Result`, 192, 264);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Reference Range`, 370, 264);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Methodology`, 493, 264);
  //*******************************************Text********************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(`COVID-19 by RT-PCR *`, 28, 292);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(`Not Detected (Negative)`, 192, 292);
  pdf.font("Helvetica").fontSize(10).text(`Not Detected`, 370, 292);
  pdf.font("Helvetica").fontSize(10).text(`Multiplex Real Time PCR`, 493, 292);
  pdf.font("Helvetica").fontSize(10).text(`Sample Type: `, 28, 320);
  pdf
    .font("Times-Italic")
    .fontSize(10.5)
    .text(`Nasopharyngeal / Oropharyngeal Swab `, 97, 320);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(`Interpretation Notes :`, 24, 348);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11.5)
    .text(
      `Result                          Interpretation and Recommendations`,
      24,
      368
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `Detected                         If the result is detected, that means the sample is positive for SARS-CoV-2/Covid-19`,
      24,
      388
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `Not Detected                      If the result is not detected, that means the sample is negative for SARS-CoV-2/Covid-19`,
      24,
      400
    );
  pdf
    .font("Helvetica")
    .fontSize(11)
    .text(
      `Presumptive Positive     Only one of the multiple genes is detected or a low viral load is possible. Request for repeat sample in 72-96 hours.`,
      24,
      412,
      { width: fullWidth - 25, lineGap: 0.5 }
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `The false-negative result with clinical symptoms may be caused by`,
      24,
      452
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `. Unsuitable collection, handling, and/or storage of samples. `,
      24,
      464
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(`. Sample outside of the viremic phase.`, 24, 476);
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(`We recommend repeating testing on a fresh sample`, 24, 488);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(`LIMITATION OF THE TEST`, 24, 505);
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `· This assay has been validated for use with an oropharyngeal swab and nasopharyngeal swab samples only.`,
      24,
      520
    );
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(`· This assay only detects RdRp, N gene, and E gene.`, 24, 532);
  pdf
    .font("Helvetica")
    .fontSize(11.5)
    .text(
      `· This test cannot rule out diseases caused by other pathogens. `,
      24,
      544
    );
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(
      `This certificate has been issued electronically by MBM Medical Laboratory. Any party that relies on the result of this certificate should first check   its authenticity by scanning of the above QR code or by sending email to reception.Info@mbmlab.ae . MBM Medical laboratory is not responsible for any misuse of this certificate or its content`,
      22,
      575,
      { width: fullWidth - 27.5, lineGap: 0.5 }
    );
  pdf.font("Helvetica-Bold").fontSize(9).text(`End Of Report `, 260, 629);
  pdf.font("Helvetica").fontSize(9).text(`Page 1 Of 1 `, 290, 729);

  //****************************************IMAGE************************************** */
  pdf.image(fs.readFileSync(`${__dirname}/assets/segniture.png`), 10, 669, {
    height: 95,
    width: 200,
  });

  pdf.image(fs.readFileSync(`${__dirname}/assets/sstamp.png`), 470, 659, {
    height: 110,
    width: 110,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/imgs.png`), 10, 807, {
    height: 95,
    width: 155,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/email_link.png`), 425, 810, {
    height: 60,
    width: 200,
  });
  //*********************************************************************************** */
  pdf
    .fontSize(7)
    .text(
      "THIS IS A SYSTEM GENERATED REPORT AND DOES NOT REQUIRE PHYSICAL SIGNATURE",
      150,
      795,
      {
        width: 400,
      }
    );
  pdf
    .font("Helvetica")
    .fontSize(8)
    .text("Printed By:     Automatic Printing", 15, 780, {
      width: 180,
    });
  pdf
    .font("Helvetica")
    .fontSize(8)
    .text("Printed Date:     28/04/2022 20:46", 474, 780, {
      width: 150,
    });
  pdf
    .font("Helvetica-Bold")
    .fontSize(8)
    .fillColor("#FF0000")
    .text("Final Report", 290, 780, {
      width: 150,
    });
  pdf
    .font("Helvetica")
    .fontSize(7)
    .fillColor("red")
    .text("TRIAL MODE - Click here for more information", 10, fullHeight - 10, {
      link: "https://www.bullzip.com/products/pdf/trial.php?fl=&rfl=PRO&ver=12.2.2905&no=&tf=Professional%20features:%20Professional%20macro%20%3Cenv%3E%20in%20output&ref=",
      underline: false,
      width: 150,
    });
  // info@mbmlab.ae
  pdf.end();
}

module.exports = { buldPdf };
