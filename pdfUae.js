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
  const nameAxis = 85; //76

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
  pdf.font("Helvetica-Bold").fontSize(9).text(`End Of Report`, 270, 585);

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
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `- A false negative result with clinical symptoms may be caused by unsuitable collection, handling, or storage of samples. It may also be caused by`,
      36,
      380,
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
      390,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`if symptoms are present`, 36, 400, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`Limitations of the test:`, 36, 420, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `1. This assay has been validated for use with an oropharyngeal swab and nasopharyngeal swab samples only`,
      36,
      440,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`2. This assay only detects ORF1AB and N gene.`, 36, 450, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `3. If the virus mutates in the rRT-PCR target region, 2019-nCoV may not be detected or may be detected less predictably. Inhibitors or other types`,
      36,
      460,
      {
        wordSpacing: 0.25,
      }
    );
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(`of interference may produce a false negative result`, 36, 470, {
      wordSpacing: 0.25,
    });
  pdf
    .font("Helvetica-Oblique")
    .fontSize(8.5)
    .text(
      `4. This test cannot rule out diseases caused by other bacterial or viral pathogens`,
      36,
      480,
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
      490,
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
      500,
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
      540,
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
      550,
      {
        wordSpacing: 0.25,
      }
    );

  //**********************************************IMAGES************************* */
  pdf.image(fs.readFileSync(`${__dirname}/assets/segniture2.png`), 17, 670, {
    height: 76,
    width: 160,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/stamp1.png`), 220, 610, {
    height: 97,
    width: 97,
  });
  pdf.image(fs.readFileSync(`${__dirname}/assets/stamp2.png`), 395, 673, {
    height: 72,
    width: 190,
  });

  //*********************************************************************************** */
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("red")
    .text(`Final Report`, 280, 725);
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .fillColor("black")
    .text(`Sample Type :   Nasopharyngeal`, 20, 784);
  pdf.font("Helvetica").fontSize(9).text(`page 1 of 1`, 280, 780);

  pdf
    .fontSize(8)
    .text(
      "THIS IS A SYSTEM GENERATED REPORT AND DOES NOT REQUIRE PHYSICAL SIGNATURE",
      157,
      800,
      {
        width: 400,
      }
    );
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("Printed By:     Automatic Printing", 20, 811, {
      width: 180,
    });

  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text("Printed Date:     12/30/12", 470, 811, {
      width: 150,
    });
  pdf
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(
      "Al Quoz,Industrial Area 4 - P.O Box 26148,Dubai,UAE - Tel: +971 55 538 7248-Fax: +971 4 386 9998-Email: customercaredxb@menalabs.com",
      20,
      850,
      {
        width: fullWidth,
      }
    );

  pdf.end();
}

module.exports = { buldQr };
