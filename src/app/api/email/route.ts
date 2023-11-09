import {type NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const {email, name, phone, message} = await request.json();

  // Create a transport
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Mail options
  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,

    subject: `Portfolio Contact From ${name} (${email})`,
    text: `
    Name: ${name}
    Email: ${email}
    Phone: ${phone} 
    Message: ${message}
    `,
  };

  // Send Email Promise Function
  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({message: "Email sent"});
  } catch (err) {
    return NextResponse.json({error: err}, {status: 500});
  }
}
