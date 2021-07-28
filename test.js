const nodemailer = require('nodemailer');
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "91995e568a8f53",
    pass: "02761ec5666618"
  }
}


const send = async(option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info ) => {
        if(error) {
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }


    });

}

let data = {
    from : "ehdrms519@naver.com",
    to : "ehdrms519@naver.com",
    subject : "테스트 메일입니다.",
    text : "nodejs 메일 보내기" 
}

send(data);
