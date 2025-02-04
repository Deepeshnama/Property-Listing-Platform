import nodemailer from "nodemailer";

const sendMail = async (req, res) => {
  const { name, email, message, phone } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "tressa.balistreri@ethereal.email",
        pass: "MMSPVrf5w9zExYEj52",
      },
    });

    await transporter.sendMail({
      from: "deepesh@gmail.com",
      to: email,
      subject: "Inquiry Confirmation",
      text: `Dear ${name},\n\nThank you for your inquiry. We have received your message and will get back to you shortly.\n\nBest regards,\nTheEarth Real-estate`,
      html: `<h3>Dear ${name},</h3>
               <p>Thank you for your inquiry. We have received your message and will get back to you shortly.</p>
               <p>Best regards,</p>
               <p><strong>TheEarth Real-estate Company</strong></p>`,
    });

    res.status(200).json({
      msg: "Inquiry Received , Confirmation email sent successfully!!",
    });
  } catch (error) {
    res.status(500).json({ err: "Internal Server Error" });
  }
};
