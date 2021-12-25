import nodemailer from 'nodemailer'

export class Mailer {
    transporter
    constructor() {
       this.transporter = nodemailer.createTransport({
            host: process.env.SENDER_EMAIL_HOST,
            port: process.env.SENDER_EMAIL_PORT,
            secure: true,
            logger: true,
            debug: true,
            secureConnection: false,
            auth: {
                user: process.env.SENDER_EMAIL,
                pass: process.env.SENDER_EMAIL_PASSWORD
            },
            tls: {
                rejectUnAuthorized: true
            }
        }
       )
    }


    async send(to, subject, html) {
    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to,
        subject,
        // text,
        html
    };
   await this.transporter.sendMail(mailOptions);
    }
}
