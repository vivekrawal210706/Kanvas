"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const brandName = formData.get("brandName")?.toString().trim() ?? "";
  const service = formData.get("service")?.toString().trim() ?? "";
  const budget = formData.get("budget")?.toString().trim() ?? "";
  const description = formData.get("description")?.toString().trim() ?? "";

  // Basic validation
  if (!name || !email || !service || !description) {
    return {
      status: "error",
      message: "Please fill in all required fields.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  // Email integration via Resend
  // To enable: install resend (`npm install resend`) and set RESEND_API_KEY in .env.local
  // Also set RESEND_TO_EMAIL to your receiving address (e.g. hello@kanvas.in)
  /*
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Kanvas Contact <noreply@kanvas.in>",
    to: process.env.RESEND_TO_EMAIL ?? "hello@kanvas.in",
    replyTo: email,
    subject: `New enquiry from ${name} — ${service}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Brand / Business: ${brandName || "Not provided"}`,
      `Service Required: ${service}`,
      `Budget: ${budget || "Not specified"}`,
      `\nProject Description:\n${description}`,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try emailing us directly at hello@kanvas.in",
    };
  }
  */

  // --- Simulated success (remove this block when Resend is wired) ---
  // For now, log the submission and return success
  console.log("Contact form submission:", { name, email, brandName, service, budget, description });

  return {
    status: "success",
    message: `Thank you, ${name}! We've received your enquiry and will be in touch within 2 business days.`,
  };
}
