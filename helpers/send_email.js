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
    subject: `Checkout buku pada tanggal ${check} buku harus di kembalikan pada tanggal ${exp}`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
        <!--<![endif]-->
    </head>
    
    <body>
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" src="https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/17071631173272231.png" color="#ECE8DD" origin="0.5, 0" position="0.5, 0"></v:fill>
          </v:background>
        <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/17071631173272231.png" style="background-position: center center;">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content esd-header-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" align="center" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p15t es-p20b es-p20r es-p20l" align="left">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="esd-container-frame" width="560" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-text es-infoblock" align="center" esd-links-color="#999999">
                                                                                            <p style="color: #999999;"><a target="_blank" style="color: #999999;">View email in your browser</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="es-header" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-header-body" align="center" cellpadding="0" cellspacing="0" width="600" style="border-left:4px solid #588b8b;border-right:4px solid #588b8b;border-top:4px solid #588b8b;background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="es-p20t es-p20r es-p20l esd-structure" align="left" background="https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/39821631177477487.png" style="background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/39821631177477487.png); background-repeat: no-repeat; background-position: left top;" esd-custom-block-id="446363">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="552" class="es-m-p0r esd-container-frame" valign="top" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="es-content" cellspacing="0" cellpadding="0" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-content-body" style="border-left:4px solid #588b8b;border-right:4px solid #588b8b;border-bottom:4px solid #588b8b;background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20r es-p20l" align="left" background="https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/39821631177477487.png" style="background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/39821631177477487.png); background-repeat: repeat; background-position: left top;" esd-custom-block-id="446364">
                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="es-m-p0r es-m-p20b esd-container-frame" width="552" valign="top" align="center">
                                                                            <table width="100%" cellspacing="0" cellpadding="0">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <p style="font-size: 20px;">HAPPY</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l" style="font-size:0">
                                                                                            <table border="0" width="10%" height="100%" cellpadding="0" cellspacing="0" style="width: 10% !important; display: inline-table;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 4px solid #588b8b; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p5b">
                                                                                            <h1>Reading<br>LOVER'S<br>DAY</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p5t es-p5b es-p20r es-p20l" style="font-size:0">
                                                                                            <table border="0" width="10%" height="100%" cellpadding="0" cellspacing="0" style="width: 10% !important; display: inline-table;">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 5px solid #588b8b; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10t es-p10b es-p40r es-p40l es-m-p0r es-m-p0l">
                                                                                            <p style="font-size: 18px;">Whenever you read a good book, you are making efforts to open a new door to let more light come in. May you are blessed with more and more books. Happy Read!!.</p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text">
                                                                                            <h1>Pengen Tidur Ngantuk Banget!</h1>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-button"><span class="es-button-border" style="border-color: #588b8b; background: #ece8dd;"><a href="https://viewstripo.email" class="es-button es-button-1631177577321" target="_blank" style="background: #ece8dd; border-color: #ece8dd; color: #588b8b; border-width: 10px 30px;">BOOKLOVERS</a></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-button es-p20t"><span class="es-button-border" style="background: #588b8b;"><a href="https://viewstripo.email" class="es-button es-button-1631175539112" target="_blank" style="border-width: 15px 45px; background: #588b8b; border-color: #588b8b;">SHOP THE SALE</a></span></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-spacer es-p20t es-p5b es-p20r es-p20l" style="font-size:0">
                                                                                            <table border="0" width="80%" height="100%" cellpadding="0" cellspacing="0">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td style="border-bottom: 1px solid #223e3e; background: none; height: 1px; width: 100%; margin: 0px;"></td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20" align="left" background="https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/39821631177477487.png" style="background-image: url(https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/39821631177477487.png); background-repeat: no-repeat; background-position: left top;" esd-custom-block-id="446365">
                                                            <!--[if mso]><table width="552" cellpadding="0" cellspacing="0"><tr><td width="190" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="170" class="es-m-p0r es-m-p20b esd-container-frame" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                        <td class="es-hidden" width="20"></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="171" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="171" class="es-m-p0r es-m-p20b esd-container-frame" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-text es-p10t" esd-links-color="#223e3e">
                                                                                            <p style="font-size: 16px;"><a target="_blank" style="font-size: 16px; color: #223e3e;" href="https://viewstripo.email">Our library</a></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-block-image" style="font-size: 0px;"><a target="_blank" href="https://viewstripo.email"><img src="https://tlr.stripocdn.email/content/guids/CABINET_f065e32f7fc1208f44642e067d64d1a2/images/54761631177511851.png" alt style="display: block;" height="80"></a></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td><td width="20"></td><td width="171" valign="top"><![endif]-->
                                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="171" class="es-m-p0r esd-container-frame" align="center">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            <!--[if mso]></td></tr></table><![endif]-->
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellpadding="0" cellspacing="0" class="esd-footer-popover es-footer" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe" align="center">
                                            <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0" width="600" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p10b es-p20r es-p20l" align="left" esd-custom-block-id="439308">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="center" class="esd-empty-container" style="display: none;"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
  });
}

module.exports = { sendEmail, sendEmailCheckout };
