import { PDFDocument, rgb } from 'pdf-lib';
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { animalName, animalType } = data;
  
  // Validate the data
  if (!animalName || !animalType) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  // Create a new PDFDocument
  const pdfDoc = await PDFDocument.create();
  const docHeight = 1700;
  const page = pdfDoc.addPage([612, docHeight]); // Letter size in points (8.5 x 11 inches)

  // Set font size and color
  let yPosition = docHeight - 50;
  page.drawText(`Animal Adoption Form`, { x: 50, y: yPosition, size: 30 });
  yPosition -= 50;
  page.drawText(`Name: ${animalName}`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`Type: ${animalType.replace("s","")}`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 50;

  // Add a your details section
  page.drawText(`Your Details`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`First Name:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;
  page.drawText(`Surname:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;

  // Add a contact section
  page.drawText(`How can we contact you?`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`Phone:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;
  page.drawText(`Email:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;
  page.drawText(`Best time to call:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;

  // Add a where do you live section
  page.drawText(`Where do you live?`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`Street Address:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;
  page.drawText(`City:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;
  page.drawText(`Postcode:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 50;

  // Add do you have any other pets section
  page.drawText(`Do you have any other pets?`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`If yes, please provide details:`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 50;
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 50, y: yPosition - 10, width: 450, height: 1 });
  yPosition -= 50;
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 50, y: yPosition - 10, width: 450, height: 1 });
  yPosition -= 50;
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 50, y: yPosition - 10, width: 450, height: 1 });
  yPosition -= 50;

  // Add do you have any children section
  page.drawText(`Do you have any children?`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`If yes, please provide details:`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 50;
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 50, y: yPosition - 10, width: 450, height: 1 });
  yPosition -= 50;
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 50, y: yPosition - 10, width: 450, height: 1 });
  yPosition -= 50;
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 50, y: yPosition - 10, width: 450, height: 1 });
  yPosition -= 100;

  // Add a signature section
  page.drawText(`Signature:`, { x: 50, y: yPosition, size: 20 });
  page.drawRectangle({ borderWidth: 1, color: rgb(0, 0, 0), x: 300, y: yPosition - 10, width: 200, height: 1 });
  yPosition -= 150;

  // Add section to tell user where to send it
  page.drawText(`Please send this form to:`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`Furry Friends`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`123 Fake Street`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`City`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`Postcode`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 50;

  // Or email to
  page.drawText(`Or email to:`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 30;
  page.drawText(`info@furry-friends.com`, { x: 50, y: yPosition, size: 20 });
  yPosition -= 50;

  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfBytes = await pdfDoc.save();

  
  
  // Return the PDF as a response
  return new Response(pdfBytes, {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="adoption-form-${animalName.toString().replace(/\s/g, '-').toLowerCase()}.pdf"`,
    },
  });
};
