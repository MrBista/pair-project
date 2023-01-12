var nodemailer = require('nodemailer');

function sendEmail(mail) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fahmiMaulana1337@gmail.com',
      pass: 'jegivrpnmsrbwjtq',
    },
  });

  var mailOptions = {
    from: 'fahmiMaulana1337@gmail.com',
    to: `${mail}`,
    subject: 'Selamat Anda Berhasil Mendaftar PerLib',
    text: 'Have a nice read!!!!!!!!!!',
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
  });
}

function sendEmailCheckout(mail, check, exp) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'fahmiMaulana1337@gmail.com',
      pass: 'jegivrpnmsrbwjtq',
    },
  });

  var mailOptions = {
    from: 'fahmiMaulana1337@gmail.com',
    to: `${mail}`,
    subject: 'Berhasil Meminjam Buku di PerLib!!!',
    text: `Checkout buku pada tanggal ${check} buku harus di kembalikan pada tanggal ${exp}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
  });
}

module.exports = { sendEmail, sendEmailCheckout };
