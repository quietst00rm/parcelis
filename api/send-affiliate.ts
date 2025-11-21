import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      company,
      email,
      phone,
      website,
      country,
      businessType,
      promotionPlan,
      additionalNotes,
    } = req.body;

    if (!firstName || !lastName || !company || !email || !website || !country || !businessType || !promotionPlan) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const emailResponse = await resend.emails.send({
      from: "PARCELIS Affiliates <onboarding@resend.dev>",
      to: ["WAAAAAWWWW"], // Replace with your email for testing
      replyTo: email,
      subject: `New Affiliate Application: ${company}`,
      html: `
        <h2>New Affiliate Application</h2>
        <h3>Applicant Information</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company/Brand:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        
        <h3>Promotion Strategy</h3>
        <p>${promotionPlan}</p>
        
        ${
          additionalNotes
            ? `
          <h3>Additional Notes</h3>
          <p>${additionalNotes}</p>
        `
            : ""
        }
      `,
    });

    return res.status(200).json({ success: true, data: emailResponse });
  } catch (error: any) {
    console.error("Error sending affiliate email:", error);
    return res.status(500).json({ error: "Failed to send email", details: error.message });
  }
}
