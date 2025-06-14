import { chromium } from "playwright";

export async function GET(request) {
  const host = request.headers.get("host") || "localhost:3000";
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const requestURL = new URL(request.url);
  const purchaseId = requestURL.searchParams.get("purchaseId");
  const token = requestURL.searchParams.get("token");
  const userId = requestURL.searchParams.get("userId");

  if (!purchaseId || !token || !userId) {
    throw new Error("Purchase Id, User Id and token are required");
  }

  const url = `${protocol}://${host}/invoice?purchaseId=${purchaseId}&token=${token}&userId=${userId}`;
  try {
    const browser = await chromium.launch({
      headless: false,
    });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new Response(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="react-app-output.pdf"',
      },
    });
  } catch (error) {
    throw error;
  }
}
