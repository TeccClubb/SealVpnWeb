import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const handleDownloadRockyVPNInvoice = (item, billingAddress) => {
  const doc = new jsPDF();
  const blueColor = [25, 53, 102];
  const boldFont = "helvetica";
  const normalFont = "helvetica";

  // Header: Invoice title
  doc.setFont(boldFont, "bold");
  doc.setFontSize(16);
  doc.setTextColor(...blueColor);
  doc.text("Invoice", 14, 20);

  // RockyVPN Company Info (Right Top)
  doc.setFontSize(12);
  doc.setTextColor(...blueColor);
  doc.setFont(boldFont, "bold");
  doc.text("RockyVPN", 145, 20);

  doc.setFont(normalFont);
  doc.setFontSize(9);
  doc.setTextColor(0, 0, 0);
  doc.text("4517 Washington Ave. Manchester,", 145, 26);
  doc.text("Kentucky 39495", 145, 31);
  doc.text("tecclubbx@gmail.com", 145, 36);

  // Invoice Info Section (2 Rows, 4 Boxes)
  doc.setFillColor(...blueColor);
  doc.setTextColor(255, 255, 255);

  doc.rect(14, 44, 60, 8, "F");
  doc.text("Invoice #", 16, 50);
  doc.rect(80, 44, 60, 8, "F");
  doc.text("Date", 82, 50);
  

  doc.setTextColor(0, 0, 0);
  doc.text(String(item.id || "N/A"), 16, 57);
  doc.text(new Date(item.start_date).toLocaleDateString("en-US"), 82, 57);

  doc.setFillColor(...blueColor);
  doc.setTextColor(255, 255, 255);
  doc.rect(14, 62, 60, 8, "F");
  doc.text("Customer Id", 16, 68);
  doc.rect(80, 62, 60, 8, "F");
  doc.text("Terms", 82, 68);

  doc.setTextColor(0, 0, 0);
  doc.text(String(item.userId || "N/A"), 16, 75);
  doc.text("Subscription", 82, 75);

  // Bill To
  doc.setFillColor(...blueColor);
  doc.setTextColor(255, 255, 255);
  doc.rect(14, 80, 60, 8, "F");
  doc.text("Bill To", 16, 86);

  doc.setTextColor(0, 0, 0);
  doc.text(`Name: ${billingAddress?.name || "-"}`, 16, 93);
  doc.text(`Address: ${billingAddress?.address || "-"}`, 16, 98);

  // Section Title: Details
  doc.setFont(boldFont, "bold");
  doc.setTextColor(...blueColor);
  doc.setFontSize(13);
  doc.text("Details:", 14, 110);

  // Table of Plan Info
  autoTable(doc, {
    startY: 115,
    head: [["Plan Name", "Duration", "Amount Paid", "Start Date", "End Date"]],
    body: [
      [
        item.plan?.name || "N/A",
        "1",
        `$${item.amount_paid || "0.00"}`,
        new Date(item.start_date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        new Date(item.end_date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      ],
    ],
    headStyles: {
      fillColor: blueColor,
      textColor: 255,
      fontSize: 10,
    },
    styles: {
      fontSize: 9,
      cellPadding: 3,
    },
    theme: "grid",
  });

  const finalY = doc.lastAutoTable.finalY || 140;

  // Footer Text
  doc.setFont(normalFont);
  doc.setFontSize(10);
  doc.text("Sale by: RockyVPN", 14, finalY + 10);
  doc.text("Thanks for your business", 14, finalY + 15);

  // Totals (right-aligned)
  const rightStartX = 140;

  doc.text("Sub Total:", rightStartX, finalY + 5);
  doc.text(`$${item.amount_paid}`, 190, finalY + 5, { align: "right" });

  doc.text("Discount:", rightStartX, finalY + 10);
  doc.text("$0.00", 190, finalY + 10, { align: "right" });

  doc.text("Tax:", rightStartX, finalY + 15);
  doc.text("$0.00", 190, finalY + 15, { align: "right" });

  doc.setFont(boldFont, "bold");
  doc.text("Total:", rightStartX, finalY + 20);
  doc.text(`$${item.amount_paid}`, 190, finalY + 20, { align: "right" });

  // Save file
  doc.save(`RockyVPN_invoice_${item.id}.pdf`);
};

export default handleDownloadRockyVPNInvoice;
