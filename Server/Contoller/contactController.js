const validator = require("validator");
const sendMail = require("../Service/mailService");
// const sendMail = require("../services/mailServices");

const enquiry = async (req, res) => {
  const {
    fullName,
    email,
    phone,
    destination,
    service,
    message,
  } = req.body;

  // Basic validation
  if (!fullName || !email || !phone || !destination || !service || !message) {
    return res.status(400).json({ message: "Please fill all the fields." });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  // Email body text
  const mailText = `
  New Enquiry Submission:

  Full Name: ${fullName}
  Email: ${email}
  Phone: ${phone}
  Preferred Destination: ${destination}
  Service of Interest: ${service}

  Message:
  ${message}
  `;

  // Mail configuration
  const mailData = {
    from: email,
    to: process.env.EMAIL_RECEIVER, // Set this in your .env file
    subject: `New Enquiry from ${fullName}`,
    text: mailText,
  };

  const result = await sendMail(mailData);

  if (result.success) {
    res.status(200).json({ message: "Enquiry submitted successfully!" });
  } else {
    res.status(500).json({ message: "Failed to send enquiry.", error: result.error });
  }
};

module.exports = { enquiry };
