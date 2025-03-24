import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, date, guests, package: packageType, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and phone are required fields' 
      });
    }

    // For testing purposes, use a test account instead of real SMTP credentials
    // This creates a temporary test account with Ethereal Email
    const testAccount = await nodemailer.createTestAccount();
    
    // Create a transporter with the test account
    const transporter = nodemailer.createTransport({
      host: testAccount.smtp.host,
      port: testAccount.smtp.port,
      secure: testAccount.smtp.secure,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // Email recipient - in a real environment, this would be your business email
    const toEmail = process.env.CONTACT_EMAIL || 'kylebanashek@yahoo.com';

    // Format the email content
    const emailContent = `
      New Charter Inquiry:
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      ${date ? `Preferred Date: ${date}` : ''}
      ${guests ? `Number of Guests: ${guests}` : ''}
      ${packageType ? `Charter Package: ${packageType}` : ''}
      
      Message:
      ${message || 'No message provided'}
    `;

    // Send the email
    const info = await transporter.sendMail({
      from: `"Lethal Weapon Fishing Website" <${testAccount.user}>`,
      to: toEmail,
      subject: `New Charter Inquiry from ${name}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    });

    console.log('Message sent: %s', info.messageId);
    
    // Display a link to the Ethereal Email preview (for testing purposes)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Return success response
    return res.status(200).json({ 
      success: true, 
      message: 'Your inquiry has been sent successfully! We will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Failed to send your inquiry. Please try again later.' 
    });
  }
}
