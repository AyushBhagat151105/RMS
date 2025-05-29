import { env } from "@/validators/env";
import { Resend } from "resend";

const resend = new Resend(env.RESEND_API_KEY);

interface SendMailOptions {
  subject: string;
  html: string;
}

export class ResendMailer {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  async sendMail({ subject, html }: SendMailOptions): Promise<any> {
    try {
      const response = await resend.emails.send({
        from: "RMS <admin@email.ayushbhagat.live>",
        to: [this.email],
        subject,
        html,
      });

      console.log("Email sent successfully:", response);

      return response;
    } catch (error) {
      console.error("Error sending email with Resend:", error);
      throw error;
    }
  }
}
