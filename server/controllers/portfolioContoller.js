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

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Enhanced validation
    if (!name || !email || !msg) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, email, and message",
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Sanitize inputs
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().toLowerCase();
    const sanitizedMsg = msg.trim().substring(0, 1000);

    // Check if required environment variables are set
    if (!process.env.SENDINBLUE_EMAIL || !process.env.SENDINBLUE_API_KEY) {
      console.error('Missing email configuration');
      return res.status(500).json({
        success: false,
        message: "Server configuration error. Please try again later.",
      });
    }

    // Email options
    const mailOptions = {
      to: process.env.SENDINBLUE_EMAIL || "piyush7p54@gmail.com",
      from: process.env.SENDINBLUE_EMAIL || "piyush7p54@gmail.com",
      subject: `Portfolio Contact: Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">New Portfolio Contact Message</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> ${sanitizedEmail}</p>
          </div>
          <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
            <h3 style="color: #007bff; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #333;">${sanitizedMsg}</p>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
            <p>This message was sent from your portfolio contact form at ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `New message from ${sanitizedName} (${sanitizedEmail}): ${sanitizedMsg}`
    };

    // Send email with promise-based approach
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      return res.status(200).json({
        success: true,
        message: "Your message has been sent successfully! I'll get back to you soon.",
        messageId: info.messageId
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      
      // More specific error messages
      let errorMessage = "Failed to send email. Please try again later.";
      if (emailError.code === 'EAUTH') {
        errorMessage = "Email authentication failed. Please contact the administrator.";
      } else if (emailError.code === 'ECONNECTION') {
        errorMessage = "Email service connection failed. Please try again later.";
      }
      
      return res.status(500).json({
        success: false,
        message: errorMessage,
        error: process.env.NODE_ENV === 'development' ? emailError.message : undefined
      });
    }
  } catch (error) {
    console.error('Controller error:', error);
    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = { sendEmailController };
