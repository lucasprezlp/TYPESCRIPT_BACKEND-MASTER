import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

class EmailService {
  async sendEmail(email: string, body: string) {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [email],
      subject: "Código de verificacion",
      html: body,
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  }
}

const emailService = new EmailService();
export default emailService;
