const nodemailer = require("nodemailer");

const sendMail = async ({ from, to, subject, text }) => {
  try {
    // Setup transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,         // 👉 your Gmail address
        pass:  process.env.EMAIL_PASS            // 👉 App password
      }
    });

    // Email details
    const mailOptions = {
      from,
      to,
      subject,
      text,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send message.", error };
  }
};

module.exports = sendMail;