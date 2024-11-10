import jsPDF from "jsPDF";

// Generate PDF from Resume
function generatePDF() {
  const resumeElement = document.getElementById("resume") as HTMLElement;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "px",
    format: "a4"
  });

  doc.html(resumeElement, {
    callback: function (doc) {
      doc.save("resume.pdf");
    },
    x: 10,
    y: 10,
    html2canvas: { scale: 0.8 }
  });
}

function downloadPDF() {
  const pdf = new jsPDF("p", "pt", "a4");
  pdf.text("Resume", 40, 40);
  pdf.save("resume-download.pdf");
}

window.generatePDF = generatePDF;
window.downloadPDF = downloadPDF;
