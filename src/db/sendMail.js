const nodemailer = require("nodemailer");


const sendEmail = (email,otp)=>{
    return new Promise((resolve , reject)=>{
        let transporter = nodemailer.createTransport(
            {
                service:"gmail",
                auth:{
                    user:"aryaanrabara0603@gmail.com",
                    pass:"sahfpeaagareqlca"
                }  
            }
        )
 
        // let OTP = require("./math");  
        const email_conf = {
            from:"aryaanrabara0603@gmail.comṇ",
            to:`${email}`,
            subject:"Registration for Marketing Era",
            text:`Your otp for Marketing Era Signup is ${otp}\n`
        }

        transporter.sendMail(email_conf,(err,info)=>{ 
                if(err)
                {
                    console.log("Error has been occured..!!");
                    return reject({message:`an error has been occured..!!`});
                }
                return resolve({message:`email has been sent successfully..!!`});
        })
    }) 
} 
 
module.exports = sendEmail; 