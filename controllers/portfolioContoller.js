const nodemailer = require("nodemailer");

// Transport
const transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SENDINBLUE_EMAIL, // Your Brevo (Sendinblue) email
    pass: process.env.SENDINBLUE_API_KEY, // Your Brevo (Sendinblue) API key
  },
});

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    // Email matter
    transporter.sendMail({
      to: "typeyouremailadresshere@gmail.com",
      from: "typeyouremailadresshere@gmail.com",
      subject: "Regarding Mern Portfolio App",
      html: `
        <h5>Detail Information</h5>
        <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
        </ul>
      `,
    }, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).send({
          success: false,
          message: "Send Email API Error",
          error,
        });
      }
      return res.status(200).send({
        success: true,
        message: "Your Message Sent Successfully",
      });
    });

    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API Error",
      error,
    });
  }
};

module.exports = { sendEmailController };
