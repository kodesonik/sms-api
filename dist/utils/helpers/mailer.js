"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailer = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = (0, tslib_1.__importDefault)(require("nodemailer"));
class Mailer {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
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
        });
    }
    send(to, subject, html) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const mailOptions = {
                from: process.env.SENDER_EMAIL,
                to,
                subject,
                html
            };
            yield this.transporter.sendMail(mailOptions);
        });
    }
}
exports.Mailer = Mailer;
//# sourceMappingURL=mailer.js.map