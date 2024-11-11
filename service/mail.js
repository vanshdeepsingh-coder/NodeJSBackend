const nodemailer = require("nodemailer");

const smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    secure : true,
    port : 465,
    auth: {
        user: "placements0001@gmail.com",
        pass: "jpdu vkbe tfvo rvtq"

    }
});

const sendEmail = (to, subject, text) => {
    const receiver = {
        from : "placements0001@gmail.com",
        to : to,
        subject : subject,
        text : text
    };
    
    smtpTransporter.sendMail(receiver, (error) => {
        if(error) throw error;
        console.log("success!");
        response.end();
    });
}

module.exports = { sendEmail };