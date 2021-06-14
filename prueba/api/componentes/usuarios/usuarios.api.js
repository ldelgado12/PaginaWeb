'use strict';
const model_usuarios = require ('./usuarios.model');
const nodemailer = require('nodemailer');
const generador_clave = require('generate-password')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'loscaballerosdelamesaredonnda@gmail.com',
      pass: 'cvjplplcboqdzpjq'
    }
});


//registro centro educativo
module.exports.registrar_ce = (req, res) =>{
    let centroe_nuevo = new model_usuarios(
        {
        nombre : req.body.nombre,
        alias : req.body.alias,
        cedula_juridica : req.body.cedula_juridica,
        clave: generador_clave.generate({
                    length: 8,
                    numbers: true,
                    uppercase: true,
                    strict: true}),
        temporal: 'si',
        tipo_centro : req.body.tipo_centro,
        nivel_centro : req.body.nivel_centro,
        foto : req.body.foto,
        nombre_comercial : req.body.nombre_comercial,
        provincia : req.body.provincia,
        canton : req.body.canton,
        distrito: req.body.distrito,
        direccion: req.body.direccion,
        fecha_fundacion : req.body.fecha_fundacion,
        referencia_historia : req.body.referencia_historia,
        adjuntar_documentos : req.body.adjuntar_documentos,
        telefono : req.body.telefono,
        fax : req.body.fax,
        sitio_web : req.body.sitio_web,
        facebook : req.body.facebook,
        youtube : req.body.youtube,
        instagram : req.body.instagram,
        twitter : req.body.twitter,
        correo_electronico : req.body.correo_electronico,
        contacto_nombre : req.body.contacto_nombre,
        papellido : req.body.papellido,
        sapellido : req.body.sapellido,
        identificacion : req.body.identificacion,
        departamento : req.body.departamento, 
        telefono_contacto : req.body.telefono_contacto,
        extension_contacto : req.body.extension_contacto,
        correo_electronico_contacto : req.body.correo_electronico_contacto,
        tipo_usuario : req.body.tipo_usuario,
        estado : req.body.estado,
        fecha_registro: req.body.fecha_registro
        }
    );
    
    centroe_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el centro educativo, ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                let mailOptions = {
                    from: 'loscaballerosdelamesaredonnda@gmail.com',
                    to: centroe_nuevo.correo_electronico,
                    subject: 'Registro recibido',
                    html: `<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        
                        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                        <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
                        <link rel="stylesheet" href="./css/reset.css" type="text/css">
                        <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                        <style>
                    
                            /* What it does: Remove spaces around the email design added by some email clients. */
                            /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
                            html,
                            body {
                                margin: 0 auto !important;
                                padding: 0 !important;
                                height: 100% !important;
                                width: 100% !important;
                            }
                    
                            /* What it does: Stops email clients resizing small text. */
                            * {
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                            }
                    
                            /* What it does: Centers email on Android 4.4 */
                            div[style*="margin: 16px 0"] {
                                margin: 0 !important;
                            }
                    
                            /* What it does: Stops Outlook from adding extra spacing to tables. */
                            table,
                            td {
                                mso-table-lspace: 0pt !important;
                                mso-table-rspace: 0pt !important;
                            }
                    
                            /* What it does: Fixes webkit padding issue. */
                            table {
                                border-spacing: 0 !important;
                                border-collapse: collapse !important;
                                table-layout: fixed !important;
                                margin: 0 auto !important;
                            }
                    
                            /* What it does: Uses a better rendering method when resizing images in IE. */
                            img {
                                -ms-interpolation-mode:bicubic;
                            }
                    
                            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
                            a {
                                text-decoration: none;
                            }
                    
                            /* What it does: A work-around for email clients meddling in triggered links. */
                            a[x-apple-data-detectors],  /* iOS */
                            .unstyle-auto-detected-links a,
                            .aBn {
                                border-bottom: 0 !important;
                                cursor: default !important;
                                color: inherit !important;
                                text-decoration: none !important;
                                font-size: inherit !important;
                                font-family: inherit !important;
                                font-weight: inherit !important;
                                line-height: inherit !important;
                            }
                    
                            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
                            .a6S {
                                display: none !important;
                                opacity: 0.01 !important;
                            }
                    
                            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
                            .im {
                                color: inherit !important;
                            }
                    
                            /* If the above doesn't work, add a .g-img class to any image in question. */
                            img.g-img + div {
                                display: none !important;
                            }
                    
                            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                            /* Create one of these media queries for each additional viewport size you'd like to fix */
                    
                            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                                u ~ div .email-container {
                                    min-width: 320px !important;
                                }
                            }
                            /* iPhone 6, 6S, 7, 8, and X */
                            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                                u ~ div .email-container {
                                    min-width: 375px !important;
                                }
                            }
                            /* iPhone 6+, 7+, and 8+ */
                            @media only screen and (min-device-width: 414px) {
                                u ~ div .email-container {
                                    min-width: 414px !important;
                                }
                            }
                    
                        </style>
                    
                        <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
                        <!--[if gte mso 9]>
                        <xml>
                            <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                    
                        <!-- CSS Reset : END -->
                    
                        <!-- Progressive Enhancements : BEGIN -->
                        <style>
                    
                            /* What it does: Hover styles for buttons */
                            .button-td,
                            .button-a {
                                transition: all 100ms ease-in;
                            }
                            .button-td-primary:hover,
                            .button-a-primary:hover {
                                background: #555555 !important;
                                border-color: #555555 !important;
                            }
                    
                            /* Media Queries */
                            @media screen and (max-width: 600px) {
                    
                                /* What it does: Adjust typography on small screens to improve readability */
                                .email-container p {
                                    font-size: 17px !important;
                                }
                    
                            }
                    
                        </style>
                        <!-- Progressive Enhancements : END -->
                    
                    </head>
                    <!--
                        The email background color (#222222) is defined in three places:
                        1. body tag: for most email clients
                        2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
                        3. mso conditional: For Windows 10 Mail
                    -->
                    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
                        <center style="width: 100%; background-color: #222222;">
                            
                        <style>
                                {
                                    font-family: Nunito;
                                }
                                    </style>
                        <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #222222;">
                        <tr>
                        <td>
                        <![endif]-->
                    
                            <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
                            <!-- Preview Text Spacing Hack : BEGIN -->
                            <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Nunito;">
                                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                            </div>
                            <!-- Preview Text Spacing Hack : END -->
                    
                            <!--
                                Set the email width. Defined in two places:
                                1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.
                                2. MSO tags for Desktop Windows Outlook enforce a 600px width.
                            -->
                            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                                <!--[if mso]>
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
                                <tr>
                                <td>
                                <![endif]-->
                    
                                <!-- Email Body : BEGIN -->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                    <!-- Email Header : BEGIN -->
                                    <tr>
                                        <td style="padding: 20px 0; text-align: center">
                                            <img src="https://via.placeholder.com/200x50" width="200" height="50" alt="alt_text" border="0" style="height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555;">
                                        </td>
                                    </tr>
                                    <!-- Email Header : END -->
                    
                                    <!-- Hero Image, Flush : BEGIN -->
                                    <tr>
                                        <td style="background-color: #192a56;">
                                            <img src="https://res.cloudinary.com/kamelot/image/upload/aaifyj5w3ceyowsgzplf" width="250px;" height="" alt="alt_text" border="0" style="width: 100%; max-width: 150px; height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img">
                                        </td>
                                    </tr>
                                    <!-- Hero Image, Flush : END -->
                    
                                    <!-- 1 Column Text + Button : BEGIN -->
                                    <tr>
                                        <td style="background-color: #ffffff;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                        <h1 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Bienvenido a Costa Rica Educa.</h1>
                                                        <p style="margin: 0;">Bienvenido ${centroe_nuevo.nombre}. Hemos recibido su registro y agradecemos la confianza. Estaremos revisando su solicitud, una vez tomemos una decision, se le notificará.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 20px;">
                                                        <!-- Button : BEGIN -->
                    
                                                        <!-- Button : END -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                        <h2 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">En caso de dudas, siga los siguientes pasos:.</h2>
                                                        <ul style="padding: 0; margin: 0 0 10px 0; list-style-type: disc;">
                                                            <li style="margin:0 0 10px 30px;" class="list-item-first">Ingrese a nuestro sitio <a href="http://localhost:3000/public/index.html">web</a></li>
                                                            <li style="margin:0 0 10px 30px;">Haga click en FAQ.</li>
                                                            <li style="margin: 0 0 0 30px;" class="list-item-last">Encontrá información importante.</li>    
                                                            <li style="margin:0 0 10px 30px; font-weight: bold; font-family: Nunito;">También tiene la opción de contacto. </li>

                                                        </ul>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- 1 Column Text + Button : END -->
                    
                                    <!-- 2 Even Columns : BEGIN -->
                                    
                                    <!-- Two Even Columns : END -->
                    
                                    <!-- Clear Spacer : BEGIN -->
                                    <tr>
                                        <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <!-- Clear Spacer : END -->
                    
                                    <!-- 1 Column Text : BEGIN -->
                    
                                    <!-- 1 Column Text : END -->
                    
                                </table>
                                <!-- Email Body : END -->
                    
                                <!-- Email Footer : BEGIN -->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                    <tr>
                                        <td style="padding: 20px; font-family: Nunito; font-size: 12px; line-height: 15px; text-align: center; color: #888888;">
                                            <br><br>
                                            Desarrollado por Kamelot<br><span class="unstyle-auto-detected-links">Santa Marta, San Pedro de Montes de Oca<br>San José, 11501 CR</span>
                                            <br><br>
                                            <unsubscribe style="color: #888888; text-decoration: underline;">Conoce nuestro equipo <a href="http://localhost:3000/SiteKamelot/index.html">aquí</a></unsubscribe>
                                        </td>
                                    </tr>
                                </table>
                                <!-- Email Footer : END -->
                    
                                <!--[if mso]>
                                </td>
                                </tr>
                                </table>
                                <![endif]-->
                            </div>
                    
                            <!-- Full Bleed Background Section : BEGIN -->
                            <!-- Full Bleed Background Section : END -->
                    
                        <!--[if mso | IE]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </center>
                    </body>
                    </html>`
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                res.json(
                    {
                        success : true,
                        msg : `Se registró el centro educativo de forma correcta`
                    }
                )
            }
        }

    );
};

//registro padre familia
module.exports.registrar_pf = (req, res) =>{
    let padref_nuevo = new model_usuarios(
        {   
            foto : req.body.foto,
            nombre : req.body.nombre,
            segundo_nombre: req.body.segundo_nombre,
            papellido : req.body.papellido,
            sapellido : req.body.sapellido,
            identificacion : req.body.identificacion,
            cantidad_hijos : req.body.cantidad_hijos,
            correo_electronico : req.body.correo_electronico,
            clave: generador_clave.generate({
                length: 8,
                numbers: true,
                uppercase: true,
                strict: true}),
            temporal: 'si',
            telefono : req.body.telefono,
            provincia : req.body.provincia,
            canton : req.body.canton,
            distrito: req.body.distrito,
            direccion: req.body.direccion,
            tipo_usuario : req.body.tipo_usuario,
            estado : req.body.estado,
            tipo_id : req.body.tipo_id,
            fecha_nacimiento: req.body.fecha_nacimiento
        }
    );
    
    padref_nuevo.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se completar el registro ${error}`
                    }
                )
            }else{
                let mailOptions = {
                    from: 'loscaballerosdelamesaredonnda@gmail.com',
                    to: padref_nuevo.correo_electronico,
                    subject: 'Registro recibido',
                    html: `<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        
                        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                        <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
                        <link rel="stylesheet" href="./css/reset.css" type="text/css">
                        <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                        <style>
                    
                            /* What it does: Remove spaces around the email design added by some email clients. */
                            /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
                            html,
                            body {
                                margin: 0 auto !important;
                                padding: 0 !important;
                                height: 100% !important;
                                width: 100% !important;
                            }
                    
                            /* What it does: Stops email clients resizing small text. */
                            * {
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                            }
                    
                            /* What it does: Centers email on Android 4.4 */
                            div[style*="margin: 16px 0"] {
                                margin: 0 !important;
                            }
                    
                            /* What it does: Stops Outlook from adding extra spacing to tables. */
                            table,
                            td {
                                mso-table-lspace: 0pt !important;
                                mso-table-rspace: 0pt !important;
                            }
                    
                            /* What it does: Fixes webkit padding issue. */
                            table {
                                border-spacing: 0 !important;
                                border-collapse: collapse !important;
                                table-layout: fixed !important;
                                margin: 0 auto !important;
                            }
                    
                            /* What it does: Uses a better rendering method when resizing images in IE. */
                            img {
                                -ms-interpolation-mode:bicubic;
                            }
                    
                            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
                            a {
                                text-decoration: none;
                            }
                    
                            /* What it does: A work-around for email clients meddling in triggered links. */
                            a[x-apple-data-detectors],  /* iOS */
                            .unstyle-auto-detected-links a,
                            .aBn {
                                border-bottom: 0 !important;
                                cursor: default !important;
                                color: inherit !important;
                                text-decoration: none !important;
                                font-size: inherit !important;
                                font-family: inherit !important;
                                font-weight: inherit !important;
                                line-height: inherit !important;
                            }
                    
                            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
                            .a6S {
                                display: none !important;
                                opacity: 0.01 !important;
                            }
                    
                            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
                            .im {
                                color: inherit !important;
                            }
                    
                            /* If the above doesn't work, add a .g-img class to any image in question. */
                            img.g-img + div {
                                display: none !important;
                            }
                    
                            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                            /* Create one of these media queries for each additional viewport size you'd like to fix */
                    
                            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                                u ~ div .email-container {
                                    min-width: 320px !important;
                                }
                            }
                            /* iPhone 6, 6S, 7, 8, and X */
                            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                                u ~ div .email-container {
                                    min-width: 375px !important;
                                }
                            }
                            /* iPhone 6+, 7+, and 8+ */
                            @media only screen and (min-device-width: 414px) {
                                u ~ div .email-container {
                                    min-width: 414px !important;
                                }
                            }
                    
                        </style>
                    
                        <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
                        <!--[if gte mso 9]>
                        <xml>
                            <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                    
                        <!-- CSS Reset : END -->
                    
                        <!-- Progressive Enhancements : BEGIN -->
                        <style>
                    
                            /* What it does: Hover styles for buttons */
                            .button-td,
                            .button-a {
                                transition: all 100ms ease-in;
                            }
                            .button-td-primary:hover,
                            .button-a-primary:hover {
                                background: #555555 !important;
                                border-color: #555555 !important;
                            }
                    
                            /* Media Queries */
                            @media screen and (max-width: 600px) {
                    
                                /* What it does: Adjust typography on small screens to improve readability */
                                .email-container p {
                                    font-size: 17px !important;
                                }
                    
                            }
                    
                        </style>
                        <!-- Progressive Enhancements : END -->
                    
                    </head>
                    <!--
                        The email background color (#222222) is defined in three places:
                        1. body tag: for most email clients
                        2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
                        3. mso conditional: For Windows 10 Mail
                    -->
                    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
                        <center style="width: 100%; background-color: #222222;">
                            
                        <style>
                                {
                                    font-family: Nunito;
                                }
                                    </style>
                        <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #222222;">
                        <tr>
                        <td>
                        <![endif]-->
                    
                            <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
                            <!-- Preview Text Spacing Hack : BEGIN -->
                            <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Nunito;">
                                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                            </div>
                            <!-- Preview Text Spacing Hack : END -->
                    
                            <!--
                                Set the email width. Defined in two places:
                                1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.
                                2. MSO tags for Desktop Windows Outlook enforce a 600px width.
                            -->
                            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                                <!--[if mso]>
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
                                <tr>
                                <td>
                                <![endif]-->
                    
                                <!-- Email Body : BEGIN -->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                    <!-- Email Header : BEGIN -->
                                    <tr>
                                        <td style="padding: 20px 0; text-align: center">
                                            <img src="https://via.placeholder.com/200x50" width="200" height="50" alt="alt_text" border="0" style="height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555;">
                                        </td>
                                    </tr>
                                    <!-- Email Header : END -->
                    
                                    <!-- Hero Image, Flush : BEGIN -->
                                    <tr>
                                        <td style="background-color: #192a56;">
                                            <img src="https://res.cloudinary.com/kamelot/image/upload/aaifyj5w3ceyowsgzplf" width="250px;" height="" alt="alt_text" border="0" style="width: 100%; max-width: 150px; height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img">
                                        </td>
                                    </tr>
                                    <!-- Hero Image, Flush : END -->
                    
                                    <!-- 1 Column Text + Button : BEGIN -->
                                    <tr>
                                        <td style="background-color: #ffffff;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                        <h1 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Bienvenido a Costa Rica Educa.</h1>
                                                        <p style="margin: 0;">Bienvenido ${padref_nuevo.nombre} ${padref_nuevo.papellido}. Hemos recibido su registro y agradecemos la confianza. Está a un solo paso de unirse.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 20px;">
                                                        <!-- Button : BEGIN -->
                    
                                                        <!-- Button : END -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                        <h2 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">Encuentre a continuación los pasos para usar su contraseña temporal.</h2>
                                                        <ul style="padding: 0; margin: 0 0 10px 0; list-style-type: disc;">
                                                            <li style="margin:0 0 10px 30px;" class="list-item-first">Ingrese a nuestro sitio <a href="http://localhost:3000/public/index.html">web</a></li>
                                                            <li style="margin:0 0 10px 30px;">Haga click en iniciar sesión.</li>
                                                            <li style="margin: 0 0 0 30px;" class="list-item-last">Ingrese su contraseña temporal.</li>    
                                                            <li style="margin:0 0 10px 30px; font-weight: bold; font-family: Nunito;">Clave temporal ${padref_nuevo.clave}.</li>

                                                        </ul>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- 1 Column Text + Button : END -->
                    
                                    <!-- 2 Even Columns : BEGIN -->
                                    
                                    <!-- Two Even Columns : END -->
                    
                                    <!-- Clear Spacer : BEGIN -->
                                    <tr>
                                        <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <!-- Clear Spacer : END -->
                    
                                    <!-- 1 Column Text : BEGIN -->
                    
                                    <!-- 1 Column Text : END -->
                    
                                </table>
                                <!-- Email Body : END -->
                    
                                <!-- Email Footer : BEGIN -->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                    <tr>
                                        <td style="padding: 20px; font-family: Nunito; font-size: 12px; line-height: 15px; text-align: center; color: #888888;">
                                            <br><br>
                                            Desarrollado por Kamelot<br><span class="unstyle-auto-detected-links">Santa Marta, San Pedro de Montes de Oca<br>San José, 11501 CR</span>
                                            <br><br>
                                            <unsubscribe style="color: #888888; text-decoration: underline;">Conoce nuestro equipo <a href="http://localhost:3000/SiteKamelot/index.html">aquí</a></unsubscribe>
                                        </td>
                                    </tr>
                                </table>
                                <!-- Email Footer : END -->
                    
                                <!--[if mso]>
                                </td>
                                </tr>
                                </table>
                                <![endif]-->
                            </div>
                    
                            <!-- Full Bleed Background Section : BEGIN -->
                            <!-- Full Bleed Background Section : END -->
                    
                        <!--[if mso | IE]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </center>
                    </body>
                    </html>`
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.json(
                    {
                        success : true,
                        msg : `Se registró el padre de familia de manera correcta`
                    }
                )
            }
        }
    );
};

//listado centro educativo
module.exports.listar_ce = (req ,res) =>{
    model_usuarios.find({tipo_usuario : 'CE'}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios centro educativo'
                    }
                )
            }
        }

    )
};

//listado usuarios padre familia
module.exports.listar_pf = (req ,res) =>{
    model_usuarios.find({tipo_usuario : 'PF'}).then(
        function(padref){
            if(padref.length > 0){
                res.json(
                    {
                        success: true,
                        padref: padref
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios padre de familia'
                    }
                )
            }
        }

    )
};

//listado de todos los usuarios
module.exports.listar_todos = (req ,res) =>{
    model_usuarios.find().then(
        function(usuarios){
            if(usuarios.length > 0){
                res.json(
                    {
                        success: true,
                        usuarios: usuarios
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios'
                    }
                )
            }
        }

    )
};

//Listado centros educativos con solicitudes pendientes
module.exports.listar_solicitud_pendiente = (req ,res) =>{
    model_usuarios.find({estado : "inactivo"}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios con solicitudes pendientes'
                    }
                )
            }
        }

    )
};

//validar credenciales de los usuarios
module.exports.validar_sesion = (req, res)=>{
    model_usuarios.findOne({correo_electronico : req.body.correo_electronico}).then(
        function(usuario){
            if(usuario){
                if(usuario.clave === req.body.clave){
                    res.json({
                        success: true,
                        usuario: usuario
                    })
                }else{
                    res.json({
                        success: false,
                        msj: 'contraseña incorrecta',
                        test: `tu clave que enviaste es: ${req.body.clave}, la clave en el sistema es: ${usuario.clave}`
                    })
                }
            }else{
                res.json({
                    success: false,
                    msj:'No se encontró el usuario'
                });
            }

        }
    )
};

//busca usuario por ID
module.exports.buscar_usuario = (req, res)=>{
    model_usuarios.findOne({_id : req.body._id}).then(
        function(usuario){
            if(usuario){
                res.json({
                    success:true,
                    usuario: usuario
                });
            }else{
                res.json({
                    success:false,
                    msj: 'No se encontró el usuario'
                });
            }

        }
    )
}

module.exports.listar_primaria = (req ,res) =>{
    model_usuarios.find({nivel_centro : 'Primaria', estado: 'activo'}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios centro educativo'
                    }
                )
            }
        }

    )
};

module.exports.listar_secundaria = (req ,res) =>{
    model_usuarios.find({nivel_centro : 'Secundaria', estado: 'activo'}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios centro educativo'
                    }
                )
            }
        }

    )
};


module.exports.deshabilitar_usuario = (req ,res) =>{
    model_usuarios.findByIdAndUpdate(req.body._id, {$set: {
                estado: 'inactivo'
            }},
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo deshabilitar el usuario '});
            }else{
                res.json({success: true ,msg: 'El usuario se desactivó con éxito'});
            }
        }
    )
};
module.exports.habilitar_usuario = (req ,res) =>{
    model_usuarios.findByIdAndUpdate(req.body._id, {$set: {
                estado: 'activo'
            }},
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo habilitar el usuario '});
            }else{
                res.json({success: true ,msg: 'El usuario se activó con éxito'});
            }
        }
    )
};

module.exports.borrar_usuario = (req ,res) =>{
    model_usuarios.findByIdAndDelete(req.body._id,
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo borrar el usuario '});
            }else{
                res.json({success: true ,msg: 'El usuario se borro con éxito'});
            }
        }
    )
};

module.exports.modificar_ce = (req, res) =>{
    model_usuarios.findByIdAndUpdate(req.body._id, { $set: req.body },
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo modificar el centro educativo '});
            }else{
                res.json({success: true ,msg: 'El centro educativo se modificó con éxito'});
            }
        }
        );
};

module.exports.modificar_pf = (req, res) =>{
    model_usuarios.findByIdAndUpdate(req.body._id, { $set: req.body },
        function(error){
            if(error){
                res.json({success: false ,msg: 'No se pudo modificar el padre de familia'});
            }else{
                res.json({success: true ,msg: 'El padre de familia se modificó con éxito'});
            }
        }
    );
};

module.exports.listar_activos = (req ,res) =>{
    model_usuarios.find({estado : 'activo', tipo_usuario : 'CE'}).then(
        function(centroe){
            if(centroe.length > 0){
                res.json(
                    {
                        success: true,
                        centroe: centroe
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron usuarios activos'
                    }
                )
            }
        }

    )
};


module.exports.clave_temporal = (req ,res) =>{
    model_usuarios.findOneAndUpdate({correo_electronico:req.body.correo}, {$set:
            {
                clave: generador_clave.generate({
                    length: 8,
                    numbers: true,
                    uppercase: true,
                    strict: true}),
                temporal: 'si'
            }},{new: true}, (error, user) => {
            if(error){
                res.json({success: false ,msg: 'No se encontró el correo', test: error});
            }else{
                let mailOptions = {
                    from: 'loscaballerosdelamesaredonnda@gmail.com',
                    to: req.body.correo,
                    subject: 'Código temporal',
                    html: `<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        
                        <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                        <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                        <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                        <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
                        <link rel="stylesheet" href="./css/reset.css" type="text/css">
                        <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                        <style>
                    
                            /* What it does: Remove spaces around the email design added by some email clients. */
                            /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
                            html,
                            body {
                                margin: 0 auto !important;
                                padding: 0 !important;
                                height: 100% !important;
                                width: 100% !important;
                            }
                    
                            /* What it does: Stops email clients resizing small text. */
                            * {
                                -ms-text-size-adjust: 100%;
                                -webkit-text-size-adjust: 100%;
                            }
                    
                            /* What it does: Centers email on Android 4.4 */
                            div[style*="margin: 16px 0"] {
                                margin: 0 !important;
                            }
                    
                            /* What it does: Stops Outlook from adding extra spacing to tables. */
                            table,
                            td {
                                mso-table-lspace: 0pt !important;
                                mso-table-rspace: 0pt !important;
                            }
                    
                            /* What it does: Fixes webkit padding issue. */
                            table {
                                border-spacing: 0 !important;
                                border-collapse: collapse !important;
                                table-layout: fixed !important;
                                margin: 0 auto !important;
                            }
                    
                            /* What it does: Uses a better rendering method when resizing images in IE. */
                            img {
                                -ms-interpolation-mode:bicubic;
                            }
                    
                            /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
                            a {
                                text-decoration: none;
                            }
                    
                            /* What it does: A work-around for email clients meddling in triggered links. */
                            a[x-apple-data-detectors],  /* iOS */
                            .unstyle-auto-detected-links a,
                            .aBn {
                                border-bottom: 0 !important;
                                cursor: default !important;
                                color: inherit !important;
                                text-decoration: none !important;
                                font-size: inherit !important;
                                font-family: inherit !important;
                                font-weight: inherit !important;
                                line-height: inherit !important;
                            }
                    
                            /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
                            .a6S {
                                display: none !important;
                                opacity: 0.01 !important;
                            }
                    
                            /* What it does: Prevents Gmail from changing the text color in conversation threads. */
                            .im {
                                color: inherit !important;
                            }
                    
                            /* If the above doesn't work, add a .g-img class to any image in question. */
                            img.g-img + div {
                                display: none !important;
                            }
                    
                            /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                            /* Create one of these media queries for each additional viewport size you'd like to fix */
                    
                            /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                                u ~ div .email-container {
                                    min-width: 320px !important;
                                }
                            }
                            /* iPhone 6, 6S, 7, 8, and X */
                            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                                u ~ div .email-container {
                                    min-width: 375px !important;
                                }
                            }
                            /* iPhone 6+, 7+, and 8+ */
                            @media only screen and (min-device-width: 414px) {
                                u ~ div .email-container {
                                    min-width: 414px !important;
                                }
                            }
                    
                        </style>
                    
                        <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
                        <!--[if gte mso 9]>
                        <xml>
                            <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                            </o:OfficeDocumentSettings>
                        </xml>
                        <![endif]-->
                    
                        <!-- CSS Reset : END -->
                    
                        <!-- Progressive Enhancements : BEGIN -->
                        <style>
                    
                            /* What it does: Hover styles for buttons */
                            .button-td,
                            .button-a {
                                transition: all 100ms ease-in;
                            }
                            .button-td-primary:hover,
                            .button-a-primary:hover {
                                background: #555555 !important;
                                border-color: #555555 !important;
                            }
                    
                            /* Media Queries */
                            @media screen and (max-width: 600px) {
                    
                                /* What it does: Adjust typography on small screens to improve readability */
                                .email-container p {
                                    font-size: 17px !important;
                                }
                    
                            }
                    
                        </style>
                        <!-- Progressive Enhancements : END -->
                    
                    </head>
                    <!--
                        The email background color (#222222) is defined in three places:
                        1. body tag: for most email clients
                        2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
                        3. mso conditional: For Windows 10 Mail
                    -->
                    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
                        <center style="width: 100%; background-color: #222222;">
                            
                        <style>
                                {
                                    font-family: Nunito;
                                }
                                    </style>
                        <!--[if mso | IE]>
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #222222;">
                        <tr>
                        <td>
                        <![endif]-->
                    
                            <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
                            <!-- Preview Text Spacing Hack : BEGIN -->
                            <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Nunito;">
                                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                            </div>
                            <!-- Preview Text Spacing Hack : END -->
                    
                            <!--
                                Set the email width. Defined in two places:
                                1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.
                                2. MSO tags for Desktop Windows Outlook enforce a 600px width.
                            -->
                            <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                                <!--[if mso]>
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
                                <tr>
                                <td>
                                <![endif]-->
                    
                                <!-- Email Body : BEGIN -->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                    <!-- Email Header : BEGIN -->
                                    <tr>
                                        <td style="padding: 20px 0; text-align: center">
                                            <img src="https://via.placeholder.com/200x50" width="200" height="50" alt="alt_text" border="0" style="height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555;">
                                        </td>
                                    </tr>
                                    <!-- Email Header : END -->
                    
                                    <!-- Hero Image, Flush : BEGIN -->
                                    <tr>
                                        <td style="background-color: #192a56;">
                                            <img src="https://res.cloudinary.com/kamelot/image/upload/aaifyj5w3ceyowsgzplf" width="250px;" height="" alt="alt_text" border="0" style="width: 100%; max-width: 150px; height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img">
                                        </td>
                                    </tr>
                                    <!-- Hero Image, Flush : END -->
                    
                                    <!-- 1 Column Text + Button : BEGIN -->
                                    <tr>
                                        <td style="background-color: #ffffff;">
                                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                <tr>
                                                    <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                        <h1 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Bienvenido a Costa Rica Educa.</h1>
                                                        <p style="margin: 0;">Hemos recibido tu petición de cambio de clave.</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 0 20px;">
                                                        <!-- Button : BEGIN -->
                    
                                                        <!-- Button : END -->
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                        <h2 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">Encuentre a continuación los pasos para usar su contraseña temporal.</h2>
                                                        <ul style="padding: 0; margin: 0 0 10px 0; list-style-type: disc;">
                                                            <li style="margin:0 0 10px 30px;" class="list-item-first">Ingrese a nuestro sitio <a href="http://localhost:3000/public/index.html">web</a></li>
                                                            <li style="margin:0 0 10px 30px;">Haga click en iniciar sesión.</li>
                                                            <li style="margin: 0 0 0 30px;" class="list-item-last">Ingrese su contraseña temporal.</li>    
                                                            <li style="margin:0 0 10px 30px; font-weight: bold; font-family: Nunito;">Clave temporal ${user.clave}</li>

                                                        </ul>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <!-- 1 Column Text + Button : END -->
                    
                                    <!-- 2 Even Columns : BEGIN -->
                                    
                                    <!-- Two Even Columns : END -->
                    
                                    <!-- Clear Spacer : BEGIN -->
                                    <tr>
                                        <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <!-- Clear Spacer : END -->
                    
                                    <!-- 1 Column Text : BEGIN -->
                    
                                    <!-- 1 Column Text : END -->
                    
                                </table>
                                <!-- Email Body : END -->
                    
                                <!-- Email Footer : BEGIN -->
                                <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                    <tr>
                                        <td style="padding: 20px; font-family: Nunito; font-size: 12px; line-height: 15px; text-align: center; color: #888888;">
                                            <br><br>
                                            Desarrollado por Kamelot<br><span class="unstyle-auto-detected-links">Santa Marta, San Pedro de Montes de Oca<br>San José, 11501 CR</span>
                                            <br><br>
                                            <unsubscribe style="color: #888888; text-decoration: underline;">Conoce nuestro equipo <a href="http://localhost:3000/SiteKamelot/index.html">aquí</a></unsubscribe>
                                        </td>
                                    </tr>
                                </table>
                                <!-- Email Footer : END -->
                    
                                <!--[if mso]>
                                </td>
                                </tr>
                                </table>
                                <![endif]-->
                            </div>
                    
                            <!-- Full Bleed Background Section : BEGIN -->
                            <!-- Full Bleed Background Section : END -->
                    
                        <!--[if mso | IE]>
                        </td>
                        </tr>
                        </table>
                        <![endif]-->
                        </center>
                    </body>
                    </html>`
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.json({success: true ,msg: 'El correo se envió con éxito', test: `nueva clave es: ${user.clave}`});
            }
            }
    )
};

module.exports.cambiar_clave = (req ,res) =>{
    model_usuarios.findByIdAndUpdate(req.body._id, {$set:
        {
            clave: req.body.clave,
            temporal: 'no'
        }},{new: true}, (error, user) => {
            if(error){
                res.json({success: false ,msg: 'No se pudo modificar el padre de familia', test: error});
            }else{
                res.json({success: true ,msg: 'El padre de familia se modificó con éxito', usuario: user});
            }
        }
    );
};


module.exports.set_temporal = (req, res) =>{
    model_usuarios.findByIdAndUpdate(req.body._id, { $set: {temporal: 'si'} },
        function(error){
            if(error){
                res.json({success: false ,msg: 'ya tiene temporal'});
            }else{
                res.json({success: true ,msg: 'no tiene temporal'});
            }
        }
    );
};


module.exports.activar_ce= (req ,res) =>{
    model_usuarios.findOneAndUpdate({_id: req.body._id}, {$set:
            {
                estado: 'activo'
            }},{new: true}, (error, user) => {
            if(error){
                res.json({success: false ,msg: 'No se encontró el correo', test: error});
            }else{
                let mailOptions = {
                    from: 'loscaballerosdelamesaredonnda@gmail.com',
                    to: req.body.correo_electronico,
                    subject: 'Solicitud aprobada',
                    html: `<!DOCTYPE html>
                    <html lang="es">
                    <head>
                    <meta charset="utf-8"> <!-- utf-8 works for most cases -->
                    <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
                    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
                    <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
                    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
                    <link rel="stylesheet" href="./css/reset.css" type="text/css">
                    <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
                    <style>
                
                        /* What it does: Remove spaces around the email design added by some email clients. */
                        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
                        html,
                        body {
                            margin: 0 auto !important;
                            padding: 0 !important;
                            height: 100% !important;
                            width: 100% !important;
                        }
                
                        /* What it does: Stops email clients resizing small text. */
                        * {
                            -ms-text-size-adjust: 100%;
                            -webkit-text-size-adjust: 100%;
                        }
                
                        /* What it does: Centers email on Android 4.4 */
                        div[style*="margin: 16px 0"] {
                            margin: 0 !important;
                        }
                
                        /* What it does: Stops Outlook from adding extra spacing to tables. */
                        table,
                        td {
                            mso-table-lspace: 0pt !important;
                            mso-table-rspace: 0pt !important;
                        }
                
                        /* What it does: Fixes webkit padding issue. */
                        table {
                            border-spacing: 0 !important;
                            border-collapse: collapse !important;
                            table-layout: fixed !important;
                            margin: 0 auto !important;
                        }
                
                        /* What it does: Uses a better rendering method when resizing images in IE. */
                        img {
                            -ms-interpolation-mode:bicubic;
                        }
                
                        /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
                        a {
                            text-decoration: none;
                        }
                
                        /* What it does: A work-around for email clients meddling in triggered links. */
                        a[x-apple-data-detectors],  /* iOS */
                        .unstyle-auto-detected-links a,
                        .aBn {
                            border-bottom: 0 !important;
                            cursor: default !important;
                            color: inherit !important;
                            text-decoration: none !important;
                            font-size: inherit !important;
                            font-family: inherit !important;
                            font-weight: inherit !important;
                            line-height: inherit !important;
                        }
                
                        /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
                        .a6S {
                            display: none !important;
                            opacity: 0.01 !important;
                        }
                
                        /* What it does: Prevents Gmail from changing the text color in conversation threads. */
                        .im {
                            color: inherit !important;
                        }
                
                        /* If the above doesn't work, add a .g-img class to any image in question. */
                        img.g-img + div {
                            display: none !important;
                        }
                
                        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                        /* Create one of these media queries for each additional viewport size you'd like to fix */
                
                        /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
                        @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                            u ~ div .email-container {
                                min-width: 320px !important;
                            }
                        }
                        /* iPhone 6, 6S, 7, 8, and X */
                        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                            u ~ div .email-container {
                                min-width: 375px !important;
                            }
                        }
                        /* iPhone 6+, 7+, and 8+ */
                        @media only screen and (min-device-width: 414px) {
                            u ~ div .email-container {
                                min-width: 414px !important;
                            }
                        }
                
                    </style>
                
                    <!-- What it does: Makes background images in 72ppi Outlook render at correct size. -->
                    <!--[if gte mso 9]>
                    <xml>
                        <o:OfficeDocumentSettings>
                            <o:AllowPNG/>
                            <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                    <![endif]-->
                
                    <!-- CSS Reset : END -->
                
                    <!-- Progressive Enhancements : BEGIN -->
                    <style>
                
                        /* What it does: Hover styles for buttons */
                        .button-td,
                        .button-a {
                            transition: all 100ms ease-in;
                        }
                        .button-td-primary:hover,
                        .button-a-primary:hover {
                            background: #555555 !important;
                            border-color: #555555 !important;
                        }
                
                        /* Media Queries */
                        @media screen and (max-width: 600px) {
                
                            /* What it does: Adjust typography on small screens to improve readability */
                            .email-container p {
                                font-size: 17px !important;
                            }
                
                        }
                
                    </style>
                    <!-- Progressive Enhancements : END -->
                
                </head>
                <!--
                    The email background color (#222222) is defined in three places:
                    1. body tag: for most email clients
                    2. center tag: for Gmail and Inbox mobile apps and web versions of Gmail, GSuite, Inbox, Yahoo, AOL, Libero, Comcast, freenet, Mail.ru, Orange.fr
                    3. mso conditional: For Windows 10 Mail
                -->
                <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #222222;">
                    <center style="width: 100%; background-color: #222222;">
                        
                    <style>
                            {
                                font-family: Nunito;
                            }
                                </style>
                    <!--[if mso | IE]>
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #222222;">
                    <tr>
                    <td>
                    <![endif]-->
                
                        <!-- Create white space after the desired preview text so email clients don’t pull other distracting text into the inbox preview. Extend as necessary. -->
                        <!-- Preview Text Spacing Hack : BEGIN -->
                        <div style="display: none; font-size: 1px; line-height: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: Nunito;">
                            &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                        </div>
                        <!-- Preview Text Spacing Hack : END -->
                
                        <!--
                            Set the email width. Defined in two places:
                            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.
                            2. MSO tags for Desktop Windows Outlook enforce a 600px width.
                        -->
                        <div style="max-width: 600px; margin: 0 auto;" class="email-container">
                            <!--[if mso]>
                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="600">
                            <tr>
                            <td>
                            <![endif]-->
                
                            <!-- Email Body : BEGIN -->
                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                <!-- Email Header : BEGIN -->
                                <tr>
                                    <td style="padding: 20px 0; text-align: center">
                                        <img src="https://via.placeholder.com/200x50" width="200" height="50" alt="alt_text" border="0" style="height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555;">
                                    </td>
                                </tr>
                                <!-- Email Header : END -->
                
                                <!-- Hero Image, Flush : BEGIN -->
                                <tr>
                                    <td style="background-color: #192a56;">
                                        <img src="https://res.cloudinary.com/kamelot/image/upload/aaifyj5w3ceyowsgzplf" width="250px;" height="" alt="alt_text" border="0" style="width: 100%; max-width: 150px; height: auto; background: #192a56; font-family: Nunito; font-size: 15px; line-height: 15px; color: #555555; margin: auto; display: block;" class="g-img">
                                    </td>
                                </tr>
                                <!-- Hero Image, Flush : END -->
                
                                <!-- 1 Column Text + Button : BEGIN -->
                                <tr>
                                    <td style="background-color: #ffffff;">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                    <h1 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 25px; line-height: 30px; color: #333333; font-weight: normal;">Bienvenido a Costa Rica Educa.</h1>
                                                    <p style="margin: 0;">Hemos recibido su registro y agradecemos la confianza. Su solicitud fue aprobada.</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 0 20px;">
                                                    <!-- Button : BEGIN -->
                
                                                    <!-- Button : END -->
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 20px; font-family: Nunito; font-size: 15px; line-height: 20px; color: #555555;">
                                                    <h2 style="margin: 0 0 10px 0; font-family: Nunito; font-size: 18px; line-height: 22px; color: #333333; font-weight: bold;">Para empezar a usar nuestro sitio web, siga los siguientes pasos:.</h2>
                                                    <ul style="padding: 0; margin: 0 0 10px 0; list-style-type: disc;">
                                                        <li style="margin:0 0 10px 30px;" class="list-item-first">Ingrese a nuestro sitio <a href="http://localhost:3000/public/index.html">web</a></li>
                                                        <li style="margin:0 0 10px 30px;">Haga click en iniciar sesión.</li>
                                                        <li style="margin: 0 0 0 30px;" class="list-item-last">Ingrese su correo</li>    
                                                        <li style="margin:0 0 10px 30px; font-weight: bold; font-family: Nunito;">Ingrese la siguiente clave temporal ${req.body.clave}. </li>

                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <!-- 1 Column Text + Button : END -->
                
                                <!-- 2 Even Columns : BEGIN -->
                                
                                <!-- Two Even Columns : END -->
                
                                <!-- Clear Spacer : BEGIN -->
                                <tr>
                                    <td aria-hidden="true" height="40" style="font-size: 0px; line-height: 0px;">
                                        &nbsp;
                                    </td>
                                </tr>
                                <!-- Clear Spacer : END -->
                
                                <!-- 1 Column Text : BEGIN -->
                
                                <!-- 1 Column Text : END -->
                
                            </table>
                            <!-- Email Body : END -->
                
                            <!-- Email Footer : BEGIN -->
                            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
                                <tr>
                                    <td style="padding: 20px; font-family: Nunito; font-size: 12px; line-height: 15px; text-align: center; color: #888888;">
                                        <br><br>
                                        Desarrollado por Kamelot<br><span class="unstyle-auto-detected-links">Santa Marta, San Pedro de Montes de Oca<br>San José, 11501 CR</span>
                                        <br><br>
                                        <unsubscribe style="color: #888888; text-decoration: underline;">Conoce nuestro equipo <a href="http://localhost:3000/SiteKamelot/index.html">aquí</a></unsubscribe>
                                    </td>
                                </tr>
                            </table>
                            <!-- Email Footer : END -->
                
                            <!--[if mso]>
                            </td>
                            </tr>
                            </table>
                            <![endif]-->
                        </div>
                
                        <!-- Full Bleed Background Section : BEGIN -->
                        <!-- Full Bleed Background Section : END -->
                
                    <!--[if mso | IE]>
                    </td>
                    </tr>
                    </table>
                    <![endif]-->
                    </center>
                </body>
                </html>`
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.json({success: true ,msg: 'El correo se envió con éxito', test: `nueva clave es: ${user.clave}`});
            }
            }
    )
};