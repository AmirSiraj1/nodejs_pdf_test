const express = require("express");
const pdfService = require("./pdfUae");

const app = express();

app.listen(8080, () => {
  console.log(`server is Running at http://localhost:8080`);
});

app.get("/", (res, req) => {
  pdfService.buldPdf();
});
