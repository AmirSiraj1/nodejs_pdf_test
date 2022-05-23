const PDFDocument = require("pdfkit");
const fs = require("fs");
const qrCode = require("qrcode");

function buldQr() {
  qrCode.toFile(
    `${__dirname}/assets/rqimage.png`,
    "Some text other text",
    {
      version: 5,
      width: 90,
    },
    function (err) {
      if (err) throw err;
      buldPdf();
    }
  );
}

function buldPdf() {
  const pdf = new PDFDocument({ size: "SRA4", margin: 0 });

  pdf.pipe(fs.createWriteStream(`output1.pdf`));
  const fullWidth = 637.8;
  const fullHeight = 907.09;
  const nameAxis = 95; //76

  pdf.image(fs.readFileSync(`${__dirname}/assets/header.jpg`), 0, 0, {
    height: 80,
    width: fullWidth,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/rqimage.png`), 520, 0, {
    height: 100,
    width: 100,
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
    .text("MRN", 17, nameAxis + 20);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Reference No", 17, nameAxis + 40);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Gender", 17, nameAxis + 60);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Age / DBO", 17, nameAxis + 80);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Location", 17, nameAxis + 100);

  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Ref. By Dr.", 17, nameAxis + 120);

  //************************************************************************ */
  //   ${data.fullName}
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  AHMED ADEM ENDRIS`, 90, nameAxis, {
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(":  754775-0", 90, nameAxis + 20, {
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(":  080122S3DT74786", 90, nameAxis + 40, {
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  Male`, 90, nameAxis + 60, {
      //${data.sex}
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  35Y 15/09/89`, 90, nameAxis + 80, {
      //${data.dbo}
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(10)
    .text(":   AL FUTTAIM DUBAI FESTIVAL CITY", 90, nameAxis + 100, {
      width: 220,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(":   ", 90, nameAxis + 120, {
      width: 180,
      characterSpacing: 0.5,
    });
  //********************************************************************************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Lab ID", 360, nameAxis);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Sample No", 360, nameAxis + 20);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Emirates ID", 360, nameAxis + 40);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Passport No.", 360, nameAxis + 60);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Reg. Date", 360, nameAxis + 80);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Collection Date", 360, nameAxis + 100);
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("#000")
    .text("Reporting Date", 360, nameAxis + 120);

  //****************************************************************************** */
  pdf.font("Helvetica").fontSize(12).text(":  28063511", 460, nameAxis, {
    width: 180,
    characterSpacing: 0.5,
  });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: 180122S2DT1762384`, 460, nameAxis + 20, {
      //${data.sampleId}
      width: 180,
      // wordSpacing: 3,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(": ", 460, nameAxis + 40, {
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`: EP4939627`, 460, nameAxis + 60, {
      //${data.passportNum}
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  12-03-2022 17:31:24`, 460, nameAxis + 80, {
      //${data.requestedDate}
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  12-03-2022 17:31:24`, 460, nameAxis + 100, {
      //${data.collectedDate}
      width: 180,
      characterSpacing: 0.5,
    });
  pdf
    .font("Helvetica")
    .fontSize(12)
    .text(`:  12-03-2022 17:31:24`, 460, nameAxis + 120, {
      //${data.resultDate}
      width: 180,
      characterSpacing: 0.5,
    });

  //**************LINE*************************************************************** */
  pdf
    .moveTo(12, 231)
    .lineTo(fullWidth - 40, 231)
    .strokeColor("#000")
    .lineWidth(1)
    .stroke();
  //****************************************IMAGE************************************** */
  //   pdf.image(fs.readFileSync(`${__dirname}/assets/footer.jpg`), 0, 195, {
  //     height: 550,
  //     width: fullWidth + 70,
  //   });
  //*************************center Text******************************************** */
  pdf.font("Helvetica-Bold").fontSize(14).text(`Molecular Biology`, 270, 236, {
    width: 180,
    // underline: true,
  });
  pdf
    .moveTo(270, 248)
    .lineTo(390, 248)
    .strokeColor("#000")
    .lineWidth(2)
    .stroke();
  pdf
    .font("Helvetica-BoldOblique")
    .fontSize(9)
    .text(`End of Report`, 270, 626, {
      characterSpacing: 0.5,
    });

  // //*********************square**************************************************** */
  pdf
    .moveTo(12, 254)
    .lineTo(fullWidth - 36, 254)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();

  pdf
    .moveTo(12, 273)
    .lineTo(fullWidth - 36, 273)
    .strokeColor("#000")
    .lineWidth(1.2)
    .stroke();
  pdf
    .moveTo(12, 254)
    .lineTo(12, 634)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(fullWidth - 36, 254)
    .lineTo(fullWidth - 36, 634)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  pdf
    .moveTo(12, 634)
    .lineTo(fullWidth - 36, 634)
    .strokeColor("#000")
    .lineWidth(0.5)
    .stroke();
  // //***********************text************************************************** */
  pdf.font("Helvetica-Bold").fontSize(10).text(`Test`, 28, 258);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Result`, 192, 258);
  pdf.font("Helvetica-Bold").fontSize(10).text(`Methodology`, 450, 258);
  // //*******************************************Text********************** */
  pdf.font("Helvetica-Bold").fontSize(11).text(`COVID-19 by RT-PCR *`, 28, 286);
  pdf
    .font("Helvetica-Bold")
    .fontSize(11)
    .text(`Not Detected (Negative)`, 192, 286);
  pdf.font("Helvetica").fontSize(10).text(`Multiplex Real Time PCR`, 450, 286);
  pdf
    .font("Helvetica-Oblique")
    .fontSize(9)
    .text(
      `Specimen: Nasopharyngeal swab / Oropharyngeal Swab / Saliva `,
      38,
      301
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(9)
    .text(`Interpretation of the result:- `, 38, 321);
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `**Detected:DETECTED indicates that SARS-CoV-2 RNA is present in this specimen.Results should be interpreted in the context of all available lab`,
      36,
      341,
      { wordSpacing: 0.25 }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`and clinical findings`, 36, 351, { wordSpacing: 0.25 });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `** Not Detected: If the result is NOT DETECTED, that means the sample is negative for SARS-CoV-2/Covid-19`,
      36,
      371,
      { wordSpacing: 0.25 }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `** Presumptive positive: Only one of the multiple genes is detected or a low viral load is possible, this indicates that you may have the virus.`,
      36,
      391,
      { wordSpacing: 0.25 }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`Please repeat the test in 72-96 hours for confirmation`, 36, 401, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `- A false negative result with clinical symptoms may be caused by unsuitable collection, handling, or storage of samples. It may also be caused by`,
      36,
      421,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `a sample outside of the viremic phase, or by the presence of PCR inhibitors in the specimen. We recommend repeating the test on a fresh sample`,
      36,
      431,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`if symptoms are present`, 36, 441, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`Limitations of the test:`, 36, 461, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `1. This assay has been validated for use with an oropharyngeal swab and nasopharyngeal swab samples only`,
      36,
      481,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`2. This assay only detects ORF1AB and N gene.`, 36, 491, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `3. If the virus mutates in the rRT-PCR target region, 2019-nCoV may not be detected or may be detected less predictably. Inhibitors or other types`,
      36,
      501,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`of interference may produce a false negative result`, 36, 511, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `4. This test cannot rule out diseases caused by other bacterial or viral pathogens`,
      36,
      521,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `5. As all diagnostic tests, a definitive clinical diagnosis should not be based on the result of a single test but should only be made after all clinical`,
      36,
      531,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `and laboratory findings have been evaluated. Collection of multiple specimens from the same patient may be necessary to detect the virus.`,
      36,
      541,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `This certificate has been issued electronically by MenaLabs. Any party that relies on the result of this certificate should first check its authenticity`,
      36,
      581,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `by scanning the above QR code or contacting MenaLabs. MenaLabs is not responsible for any misuse of this certificate or its contents.`,
      36,
      591,
      {
        wordSpacing: 0.25,
      }
    );

  //**********************************************IMAGES************************* */
  pdf.image(fs.readFileSync(`${__dirname}/assets/segniture2.png`), 17, 711, {
    height: 76,
    width: 160,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/stamp1.png`), 220, 651, {
    height: 97,
    width: 97,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/stamp2.png`), 395, 714, {
    height: 72,
    width: 190,
  });

  //*********************************************************************************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(10)
    .fillColor("green")
    .text(`Final Report`, 280, 766);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("black")
    .text(`Sample Type :   Nasopharyngeal`, 20, 825);
  pdf.font("Helvetica").fontSize(9).text(`page 1 of 1`, 280, 821);

  pdf
    .fontSize(8)
    .text(
      "THIS IS A SYSTEM GENERATED REPORT AND DOES NOT REQUIRE PHYSICAL SIGNATURE",
      157,
      841,
      {
        width: 400,
      }
    );
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("Printed By:     Automatic Printing", 20, 852, {
      width: 180,
    });

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("Printed Date:     12/30/12 10:00 pm", 470, 852, {
      width: 200,
    });
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(
      "Al Quoz,Industrial Area 4 - P.O Box 26148,Dubai,UAE - Tel: +971 55 538 7248-Fax: +971 4 386 9998-Email: customercaredxb@menalabs.com",
      10,
      891,
      {
        width: fullWidth,
      }
    );

  pdf.end();
}

module.exports = { buldQr };
