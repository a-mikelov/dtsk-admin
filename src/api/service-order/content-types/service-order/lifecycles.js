module.exports = {
    async afterCreate(event) {
        const { result } = event;

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${result.client.email}`,
                subject: `Заявка на ${result.name}`,
                html: clientHtmlTemplate(result)
            });
        } catch (err) {
            console.log(err);
        }

        try {
            await strapi.plugins['email'].services.email.send({
                to: `${process.env.EMAIL_ADDRESS_FROM}`,
                subject: `Заказ на ${result.name} от ${result.client.name}`,
                html: ownerHtmlTemplate(result),
            });
        } catch (err) {
            console.log(err);
        }
    }
};

function clientHtmlTemplate(data) {
    return `
    <!DOCTYPE html>
<html lang="ru-RU" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
    <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso]>
            <xml>
                <o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG /></o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
        <!--[if !mso]><!-->
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
        <!--<![endif]-->
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                padding: 0;
            }

            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: inherit !important;
            }

            #MessageViewBody a {
                color: inherit;
                text-decoration: none;
            }

            p {
                line-height: inherit;
            }

            .desktop_hide,
            .desktop_hide table {
                mso-hide: all;
                display: none;
                max-height: 0px;
                overflow: hidden;
            }

            @media (max-width: 640px) {
                .desktop_hide table.icons-inner {
                    display: inline-block !important;
                }

                .icons-inner {
                    text-align: center;
                }

                .icons-inner td {
                    margin: 0 auto;
                }

                .row-content {
                    width: 100% !important;
                }

                .column .border,
                .mobile_hide {
                    display: none;
                }

                table {
                    table-layout: fixed !important;
                }

                .stack .column {
                    width: 100%;
                    display: block;
                }

                .mobile_hide {
                    min-height: 0;
                    max-height: 0;
                    max-width: 0;
                    overflow: hidden;
                    font-size: 0px;
                }

                .desktop_hide,
                .desktop_hide table {
                    display: table !important;
                    max-height: none !important;
                }
            }
        </style>
    </head>
    <body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
            <tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="
                                                            mso-table-lspace: 0pt;
                                                            mso-table-rspace: 0pt;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            padding-top: 5px;
                                                            padding-bottom: 5px;
                                                            border-top: 0px;
                                                            border-right: 0px;
                                                            border-bottom: 0px;
                                                            border-left: 0px;
                                                        "
                                                        width="100%"
                                                    >
                                                        <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                            <tr>
                                                                <td style="width: 100%; padding-right: 0px; padding-left: 0px;">
                                                                    <div align="center" style="line-height: 10px;">
                                                                        <!--                                                                        <img alt="Image" src="images/okok.gif" style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;" title="Image" width="250" />-->
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="
                                                            mso-table-lspace: 0pt;
                                                            mso-table-rspace: 0pt;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            padding-top: 5px;
                                                            padding-bottom: 10px;
                                                            border-top: 0px;
                                                            border-right: 0px;
                                                            border-bottom: 0px;
                                                            border-left: 0px;
                                                        "
                                                        width="100%"
                                                    >
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 5px; padding-left: 10px; padding-right: 10px; padding-top: 10px;">
                                                                    <div style="font-family: Tahoma, sans-serif;">
                                                                        <div
                                                                            class="txtTinyMce-wrapper"
                                                                            style="
                                                                                font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                                font-size: 12px;
                                                                                mso-line-height-alt: 14.399999999999999px;
                                                                                color: #333333;
                                                                                line-height: 1.2;
                                                                            "
                                                                        >
                                                                            <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                                <span style="font-size: 46px;">
                                                                                    <strong><span style="font-size: 38px;">Здравствуйте,</span> <span style="font-size: 38px; color: #ffc006;">${data.client.name}</span></strong>
                                                                                </span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 35px; padding-left: 10px; padding-right: 10px; padding-top: 20px;">
                                                                    <div style="font-family: Tahoma, sans-serif;">
                                                                        <div
                                                                            class="txtTinyMce-wrapper"
                                                                            style="
                                                                                font-size: 12px;
                                                                                font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                                mso-line-height-alt: 18px;
                                                                                color: #71777d;
                                                                                line-height: 1.5;
                                                                            "
                                                                        >
                                                                            <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
                                                                                <span style="font-size: 16px;">Мы получили ваш заказ, сейчас он находится в обработке.</span>
                                                                            </p>
                                                                            <p style="margin: 0; font-size: 16px; text-align: center; mso-line-height-alt: 24px;">
                                                                                <span style="font-size: 16px;">В ближайшее время мы свяжемся с Вами для уточнения деталей!</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffc006; color: #333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="66.66666666666667%"
                                                    >
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                                                    <div style="font-family: sans-serif;">
                                                                        <div
                                                                            class="txtTinyMce-wrapper"
                                                                            style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;"
                                                                        >
                                                                            <p style="margin: 0; font-size: 14px;">Детали заказа</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td
                                                        class="column column-2"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="33.333333333333336%"
                                                    >
                                                        <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                                                    <div style="font-family: sans-serif;">
                                                                        <div
                                                                            class="txtTinyMce-wrapper"
                                                                            style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;"
                                                                        >
                                                                            <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;"></p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="
                                                            mso-table-lspace: 0pt;
                                                            mso-table-rspace: 0pt;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            padding-top: 0px;
                                                            padding-bottom: 5px;
                                                            border-top: 0px;
                                                            border-right: 0px;
                                                            border-bottom: 0px;
                                                            border-left: 0px;
                                                        "
                                                        width="100%"
                                                    >
                                                        <table border="0" cellpadding="10" cellspacing="0" class="list_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <ul
                                                                        start="1"
                                                                        style="
                                                                            margin: 0;
                                                                            padding: 0;
                                                                            margin-left: 20px;
                                                                            color: #333333;
                                                                            font-size: 13px;
                                                                            font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                            font-weight: 400;
                                                                            line-height: 150%;
                                                                            text-align: left;
                                                                            direction: ltr;
                                                                            letter-spacing: 0px;
                                                                        "
                                                                    >
                                                                        <li style="margin-bottom: 7px;">Дата заказа: ${data.createdAt}</li>
                                                                        <li style="margin-bottom: 7px;">Услуга: ${data.name}</li>
                                                                        ${data.details ? renderDetails(data.details) : 'Доп. данные по работе не указаны'}
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                            <tr>
                                                                <td style="padding-left: 10px; padding-right: 10px; padding-top: 15px;">
                                                                    <div align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #cccccc;"><span> </span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content stack"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="75%"
                                                    >
                                                        <table
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="paragraph_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%"
                                                        >
                                                            <tr>
                                                                <td style="padding-top: 20px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;">
                                                                    <div
                                                                        style="
                                                                            color: #333333;
                                                                            font-size: 20px;
                                                                            font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                            font-weight: 400;
                                                                            line-height: 120%;
                                                                            text-align: right;
                                                                            direction: ltr;
                                                                            letter-spacing: 0px;
                                                                        "
                                                                    >
                                                                        <p style="margin: 0;">Итого (предварительно):</p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td
                                                        class="column column-2"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="25%"
                                                    >
                                                        <table
                                                            border="0"
                                                            cellpadding="0"
                                                            cellspacing="0"
                                                            class="paragraph_block"
                                                            role="presentation"
                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                            width="100%"
                                                        >
                                                            <tr>
                                                                <td style="padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;">
                                                                    <div
                                                                        style="
                                                                            color: #333333;
                                                                            font-size: 28px;
                                                                            font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                            font-weight: 400;
                                                                            line-height: 120%;
                                                                            text-align: right;
                                                                            direction: ltr;
                                                                            letter-spacing: 0px;
                                                                        "
                                                                    >
                                                                        <p style="margin: 0;"><strong>${data.sum} р.</strong></p>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="
                                                            mso-table-lspace: 0pt;
                                                            mso-table-rspace: 0pt;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            padding-top: 5px;
                                                            padding-bottom: 5px;
                                                            border-top: 0px;
                                                            border-right: 0px;
                                                            border-bottom: 0px;
                                                            border-left: 0px;
                                                        "
                                                        width="100%"
                                                    >
                                                        <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                            <tr>
                                                                <td style="padding-bottom: 40px; padding-left: 10px; padding-right: 10px; padding-top: 5px;">
                                                                    <div align="center">
                                                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                            <tr>
                                                                                <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #cccccc;"><span> </span></td>
                                                                            </tr>
                                                                        </table>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                        <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                            <tr>
                                                                <td>
                                                                    <div style="font-family: sans-serif;">
                                                                        <div
                                                                            class="txtTinyMce-wrapper"
                                                                            style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;"
                                                                        >
                                                                            <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;"><span style="font-size: 12px;">Copyright © ${(new Date()).getFullYear()}</span></p>
                                                                            <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
                                                                                <span style="font-size: 12px;">С уважением, компания ДТСК.</span><br />
                                                                                <span style="font-size: 12px;">Вы можете связаться с нами по телефону:
                                                                                 +7 (4212) 737-891, +7 (924) 113-95-82</span>
                                                                            </p>
                                                                            <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;">
                                                                                <span style="font-size: 12px;">или написать на email: sales@dtsk.ru</span>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table
                                            align="center"
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            class="row-content stack"
                                            role="presentation"
                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                            width="620"
                                        >
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class="column column-1"
                                                        style="
                                                            mso-table-lspace: 0pt;
                                                            mso-table-rspace: 0pt;
                                                            font-weight: 400;
                                                            text-align: left;
                                                            vertical-align: top;
                                                            padding-top: 5px;
                                                            padding-bottom: 5px;
                                                            border-top: 0px;
                                                            border-right: 0px;
                                                            border-bottom: 0px;
                                                            border-left: 0px;
                                                        "
                                                        width="100%"
                                                    >
                                                        <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                            <tr>
                                                                <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                    <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                        <tr>
                                                                            <td style="vertical-align: middle; text-align: center;">
                                                                                <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                <!--[if !vml]><!-->
                                                                                <table
                                                                                    cellpadding="0"
                                                                                    cellspacing="0"
                                                                                    class="icons-inner"
                                                                                    role="presentation"
                                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"
                                                                                >
                                                                                    <!--<![endif]-->
<!--                                                                                    <tr>-->
<!--                                                                                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;">-->
<!--                                                                                            <a href="" style="text-decoration: none; display: inline-block; width: 100px; height: 50px;" target="_blank">-->
<!--                                                                                                <svg-->
<!--                                                                                                    version="1.1"-->
<!--                                                                                                    id="Слой_1"-->
<!--                                                                                                    xmlns="http://www.w3.org/2000/svg"-->
<!--                                                                                                    xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--                                                                                                    x="0px"-->
<!--                                                                                                    y="0px"-->
<!--                                                                                                    viewBox="0 0 692.64 432.48"-->
<!--                                                                                                    style="enable-background: new 0 0 692.64 432.48;"-->
<!--                                                                                                    xml:space="preserve"-->
<!--                                                                                                >-->
<!--                                                                                                    <style type="text/css">-->
<!--                                                                                                        \\t.st0 {-->
<!--                                                                                                            enable-background: new;-->
<!--                                                                                                        }-->
<!--                                                                                                        \\t.st1 {-->
<!--                                                                                                            fill: #4a4a49;-->
<!--                                                                                                        }-->
<!--                                                                                                    </style>-->
<!--                                                                                                    <g class="st0">-->
<!--                                                                                                        \\t-->
<!--                                                                                                        <path-->
<!--                                                                                                            class="st1"-->
<!--                                                                                                            d="M386.24,172.28c5.74,0,7.66,1.76,7.66,7.04v17.91c0,5.28-1.91,7.04-7.66,7.04H361.7v74.53-->
<!--\\t\\tc0,5.28-1.91,7.04-7.66,7.04h-25.06c-5.74,0-7.66-1.76-7.66-7.04v-74.53H296.8c-5.74,0-7.66-1.76-7.66-7.04v-17.91-->
<!--\\t\\tc0-5.28,1.91-7.04,7.66-7.04H386.24z"-->
<!--                                                                                                        ></path>-->
<!--                                                                                                        <path-->
<!--                                                                                                            class="st1"-->
<!--                                                                                                            d="M398.42,216.26c0-28.79,20.18-46.38,55.5-46.38c27.32,0,44.89,9.76,52.72,29.11c1.91,4.96,0.52,7.2-4.87,8.96-->
<!--\\t\\tl-23.66,7.68c-5.57,1.44-7.66,0.64-9.74-4.48c-2.78-6.56-6.26-9.12-14.44-9.12c-11.83,0-15.14,3.84-15.14,14.08v25.91-->
<!--\\t\\tc0,10.24,3.31,14.08,15.14,14.08c7.31,0,12.18-3.04,14.62-9.12c2.09-5.12,4.35-6.24,9.74-4.48l23.49,7.68-->
<!--\\t\\tc5.39,1.76,6.79,4.16,4.87,9.12c-7.83,19.35-25.4,28.95-52.72,28.95c-35.32,0-55.5-17.59-55.5-46.38V216.26z"-->
<!--                                                                                                        ></path>-->
<!--                                                                                                        <path-->
<!--                                                                                                            class="st1"-->
<!--                                                                                                            d="M623.74,277.04c2.96,4.96,0.87,8.8-5.22,8.8h-23.49c-9.74,0-13.05-1.28-16.36-7.52l-14.09-26.87-->
<!--\\t\\tc-2.44-4.48-4.87-6.72-7.13-6.72h-1.57v34.07c0,5.28-1.91,7.04-7.66,7.04h-25.06c-5.74,0-7.66-1.76-7.66-7.04v-99.48-->
<!--\\t\\tc0-5.28,1.91-7.04,7.66-7.04h25.06c5.74,0,7.66,1.76,7.66,7.04v33.11l1.91,0.16h1.22l19.49-33.91c1.57-2.72,3.13-4.48,4.7-5.28-->
<!--\\t\\tc1.57-0.8,4.52-1.12,9.22-1.12h24.88c5.57,0,7.48,3.04,4.7,7.68l-27.49,47.98c2.09,2.4,4,5.12,5.74,8.16L623.74,277.04z"-->
<!--                                                                                                        ></path>-->
<!--                                                                                                    </g>-->
<!--                                                                                                    <g>-->
<!--                                                                                                        \\t-->
<!--                                                                                                        <g>-->
<!--                                                                                                            \\t\\t-->
<!--                                                                                                            <path-->
<!--                                                                                                                class="st1"-->
<!--                                                                                                                d="M200.6,115.22H70.56c-6.53,0-11.83,5.3-11.83,11.83v32.66H183c20.15,0,36.48,16.33,36.48,36.48v11.12-->
<!--\\t\\t\\tc0,20.7-16.78,37.49-37.49,37.49h-7.95l8.46-66.32l-39.05,4.1l-13.22,103.25h20.22h18.36h40.7c38.19,0,69.15-30.96,69.15-69.15-->
<!--\\t\\t\\tv-23.42C278.65,150.16,243.71,115.22,200.6,115.22z"-->
<!--                                                                                                            ></path>-->
<!--                                                                                                            <path-->
<!--                                                                                                                class="st1"-->
<!--                                                                                                                d="M117.92,214.34H31.67c-0.72,0-1.31-0.59-1.31-1.31v-9.75c0-0.72,0.59-1.31,1.31-1.31h86.25-->
<!--\\t\\t\\tc0.72,0,1.31,0.59,1.31,1.31v9.75C119.22,213.75,118.64,214.34,117.92,214.34z"-->
<!--                                                                                                            ></path>-->
<!--                                                                                                            <path-->
<!--                                                                                                                class="st1"-->
<!--                                                                                                                d="M117.92,234.36H50.24c-0.72,0-1.31-0.59-1.31-1.31v-9.75c0-0.72,0.59-1.31,1.31-1.31h67.68-->
<!--\\t\\t\\tc0.72,0,1.31,0.59,1.31,1.31v9.75C119.22,233.77,118.64,234.36,117.92,234.36z"-->
<!--                                                                                                            ></path>-->
<!--                                                                                                            <path-->
<!--                                                                                                                class="st1"-->
<!--                                                                                                                d="M117.92,255.62H31.67c-0.72,0-1.31-0.59-1.31-1.31v-9.75c0-0.72,0.59-1.31,1.31-1.31h86.25-->
<!--\\t\\t\\tc0.72,0,1.31,0.59,1.31,1.31v9.75C119.22,255.04,118.64,255.62,117.92,255.62z"-->
<!--                                                                                                            ></path>-->
<!--                                                                                                            \\t-->
<!--                                                                                                        </g>-->
<!--                                                                                                    </g>-->
<!--                                                                                                </svg>-->
<!--                                                                                            </a>-->
<!--                                                                                        </td>-->
<!--                                                                                    </tr>-->
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
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
        <!-- End -->
    </body>
</html>


  `
}


function ownerHtmlTemplate(data) {
    return `
      <!DOCTYPE html>
  
  <html lang="ru-RU" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <!--[if mso]>
              <xml>
                  <o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG /></o:OfficeDocumentSettings>
              </xml>
          <![endif]-->
          <!--[if !mso]><!-->
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
          <!--<![endif]-->
          <style>
              * {
                  box-sizing: border-box;
              }
  
              body {
                  margin: 0;
                  padding: 0;
              }
  
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important;
              }
  
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none;
              }
  
              p {
                  line-height: inherit;
              }
  
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0px;
                  overflow: hidden;
              }
  
              @media (max-width: 640px) {
                  .desktop_hide table.icons-inner {
                      display: inline-block !important;
                  }
  
                  .icons-inner {
                      text-align: center;
                  }
  
                  .icons-inner td {
                      margin: 0 auto;
                  }
  
                  .row-content {
                      width: 100% !important;
                  }
  
                  .column .border,
                  .mobile_hide {
                      display: none;
                  }
  
                  table {
                      table-layout: fixed !important;
                  }
  
                  .stack .column {
                      width: 100%;
                      display: block;
                  }
  
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0px;
                  }
  
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      <body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
          <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
              <tbody>
                  <tr>
                      <td>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="
                                                              mso-table-lspace: 0pt;
                                                              mso-table-rspace: 0pt;
                                                              font-weight: 400;
                                                              text-align: left;
                                                              vertical-align: top;
                                                              padding-top: 5px;
                                                              padding-bottom: 5px;
                                                              border-top: 0px;
                                                              border-right: 0px;
                                                              border-bottom: 0px;
                                                              border-left: 0px;
                                                          "
                                                          width="100%"
                                                      >
  <!--                                                        <table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">-->
  <!--                                                            <tr>-->
  <!--                                                                <td style="width: 100%; padding-right: 0px; padding-left: 0px;">-->
  <!--                                                                    <div align="center" style="line-height: 10px;">-->
  <!--                                                                        <img alt="Image" src="images/okok.gif" style="display: block; height: auto; border: 0; width: 250px; max-width: 100%;" title="Image" width="250" />-->
  <!--                                                                    </div>-->
  <!--                                                                </td>-->
  <!--                                                            </tr>-->
  <!--                                                        </table>-->
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="
                                                              mso-table-lspace: 0pt;
                                                              mso-table-rspace: 0pt;
                                                              font-weight: 400;
                                                              text-align: left;
                                                              vertical-align: top;
                                                              padding-top: 5px;
                                                              padding-bottom: 10px;
                                                              border-top: 0px;
                                                              border-right: 0px;
                                                              border-bottom: 0px;
                                                              border-left: 0px;
                                                          "
                                                          width="100%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 5px; padding-left: 10px; padding-right: 10px; padding-top: 10px;">
                                                                      <div style="font-family: Tahoma, sans-serif;">
                                                                          <div
                                                                              class="txtTinyMce-wrapper"
                                                                              style="
                                                                                  font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                                  font-size: 12px;
                                                                                  mso-line-height-alt: 14.399999999999999px;
                                                                                  color: #333333;
                                                                                  line-height: 1.2;
                                                                              "
                                                                          >
                                                                              <p style="margin: 0; font-size: 14px; text-align: center;">
                                                                                  <span style="font-size: 46px;">
                                                                                      <strong><span style="font-size: 38px;">Новый заказ на</span> <span style="font-size: 38px; color: #ffc006;">${data.name}</span></strong>
                                                                                  </span>
                                                                              </p>
                                                                          </div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 35px; padding-left: 10px; padding-right: 10px; padding-top: 20px;">
                                                                      <div style="font-family: Tahoma, sans-serif;"></div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffc006; color: #333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                          width="66.66666666666667%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                                                      <div style="font-family: sans-serif;">
                                                                          <div
                                                                              class="txtTinyMce-wrapper"
                                                                              style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;"
                                                                          >
                                                                              <p style="margin: 0; font-size: 14px;">Информация о заказчике</p>
                                                                          </div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                      <td
                                                          class="column column-2"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                          width="33.333333333333336%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                                                      <div style="font-family: sans-serif;">
                                                                          <div
                                                                              class="txtTinyMce-wrapper"
                                                                              style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;"
                                                                          >
                                                                              <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;"></p>
                                                                          </div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="
                                                              mso-table-lspace: 0pt;
                                                              mso-table-rspace: 0pt;
                                                              font-weight: 400;
                                                              text-align: left;
                                                              vertical-align: top;
                                                              padding-top: 0px;
                                                              padding-bottom: 5px;
                                                              border-top: 0px;
                                                              border-right: 0px;
                                                              border-bottom: 0px;
                                                              border-left: 0px;
                                                          "
                                                          width="100%"
                                                      >
                                                          <table border="0" cellpadding="10" cellspacing="0" class="list_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td>
                                                                      <ul
                                                                          start="1"
                                                                          style="
                                                                              margin: 0;
                                                                              padding: 0;
                                                                              margin-left: 20px;
                                                                              color: #333333;
                                                                              font-size: 13px;
                                                                              font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                              font-weight: 400;
                                                                              line-height: 150%;
                                                                              text-align: left;
                                                                              direction: ltr;
                                                                              letter-spacing: 0px;
                                                                          "
                                                                      >
                                                                          <li style="margin-bottom: 7px;">Имя заказчика: ${data.client.name}</li>
                                                                          <li style="margin-bottom: 7px;">Организация: ${data.client.company || 'нет'}</li>
                                                                          <li style="margin-bottom: 7px;">Email: ${data.client.email}</li>
                                                                          <li style="margin-bottom: 7px;">Телефон: ${data.client.phone}</li>
                                                                          <li>${data.note}</li>
                                                                      </ul>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-5" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffc006; color: #333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                          width="66.66666666666667%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                                                      <div style="font-family: sans-serif;">
                                                                          <div
                                                                              class="txtTinyMce-wrapper"
                                                                              style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;"
                                                                          >
                                                                              <p style="margin: 0; font-size: 14px;">Детали заказа</p>
                                                                          </div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                      <td
                                                          class="column column-2"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                          width="33.333333333333336%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 10px; padding-left: 20px; padding-right: 20px; padding-top: 10px;">
                                                                      <div style="font-family: sans-serif;">
                                                                          <div
                                                                              class="txtTinyMce-wrapper"
                                                                              style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif;"
                                                                          >
                                                                              <p style="margin: 0; font-size: 14px; mso-line-height-alt: 14.399999999999999px;"></p>
                                                                          </div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-6" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="
                                                              mso-table-lspace: 0pt;
                                                              mso-table-rspace: 0pt;
                                                              font-weight: 400;
                                                              text-align: left;
                                                              vertical-align: top;
                                                              padding-top: 0px;
                                                              padding-bottom: 5px;
                                                              border-top: 0px;
                                                              border-right: 0px;
                                                              border-bottom: 0px;
                                                              border-left: 0px;
                                                          "
                                                          width="100%"
                                                      >
                                                          <table border="0" cellpadding="10" cellspacing="0" class="list_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td>
                                                                      <ul
                                                                          start="1"
                                                                          style="
                                                                              margin: 0;
                                                                              padding: 0;
                                                                              margin-left: 20px;
                                                                              color: #333333;
                                                                              font-size: 13px;
                                                                              font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                              font-weight: 400;
                                                                              line-height: 150%;
                                                                              text-align: left;
                                                                              direction: ltr;
                                                                              letter-spacing: 0px;
                                                                          "
                                                                      >
                                                                          <li style="margin-bottom: 7px;">Дата заказа: ${data.createdAt}</li>
                                                                          <li style="margin-bottom: 7px;">Услуга: ${data.name}</li>
                                                                          ${data.details ? renderDetails(data.details) : 'Доп. данные по работе не указаны'}
                                                                      </ul>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                              <tr>
                                                                  <td style="padding-left: 10px; padding-right: 10px; padding-top: 15px;">
                                                                      <div align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                              <tr>
                                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #cccccc;"><span> </span></td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-7" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content stack"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                          width="75%"
                                                      >
                                                          <table
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              class="paragraph_block"
                                                              role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                              width="100%"
                                                          >
                                                              <tr>
                                                                  <td style="padding-top: 20px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;">
                                                                      <div
                                                                          style="
                                                                              color: #333333;
                                                                              font-size: 20px;
                                                                              font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                              font-weight: 400;
                                                                              line-height: 120%;
                                                                              text-align: right;
                                                                              direction: ltr;
                                                                              letter-spacing: 0px;
                                                                          "
                                                                      >
                                                                          <p style="margin: 0;">Итого (предварительно):</p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                      <td
                                                          class="column column-2"
                                                          style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                          width="25%"
                                                      >
                                                          <table
                                                              border="0"
                                                              cellpadding="0"
                                                              cellspacing="0"
                                                              class="paragraph_block"
                                                              role="presentation"
                                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
                                                              width="100%"
                                                          >
                                                              <tr>
                                                                  <td style="padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;">
                                                                      <div
                                                                          style="
                                                                              color: #333333;
                                                                              font-size: 28px;
                                                                              font-family: 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
                                                                              font-weight: 400;
                                                                              line-height: 120%;
                                                                              text-align: right;
                                                                              direction: ltr;
                                                                              letter-spacing: 0px;
                                                                          "
                                                                      >
                                                                          <p style="margin: 0;"><strong>${data.sum} р</strong></p>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="
                                                              mso-table-lspace: 0pt;
                                                              mso-table-rspace: 0pt;
                                                              font-weight: 400;
                                                              text-align: left;
                                                              vertical-align: top;
                                                              padding-top: 5px;
                                                              padding-bottom: 5px;
                                                              border-top: 0px;
                                                              border-right: 0px;
                                                              border-bottom: 0px;
                                                              border-left: 0px;
                                                          "
                                                          width="100%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                              <tr>
                                                                  <td style="padding-bottom: 20px; padding-left: 10px; padding-right: 10px; padding-top: 5px;">
                                                                      <div align="center">
                                                                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                              <tr>
                                                                                  <td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px dotted #cccccc;"><span> </span></td>
                                                                              </tr>
                                                                          </table>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                          <table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
                                                              <tr>
                                                                  <td>
                                                                      <div style="font-family: sans-serif;">
                                                                          <div
                                                                              class="txtTinyMce-wrapper"
                                                                              style="font-size: 12px; font-family: Lato, Tahoma, Verdana, Segoe, sans-serif; mso-line-height-alt: 18px; color: #555555; line-height: 1.5;"
                                                                          >
                                                                              <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;"><span style="font-size: 12px;">Copyright © ${(new Date()).getFullYear()}</span></p>
                                                                              <p style="margin: 0; font-size: 12px; text-align: center; mso-line-height-alt: 18px;"><span style="font-size: 12px;">Компания ДТСК.</span></p>
                                                                          </div>
                                                                      </div>
                                                                  </td>
                                                              </tr>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-9" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table
                                              align="center"
                                              border="0"
                                              cellpadding="0"
                                              cellspacing="0"
                                              class="row-content stack"
                                              role="presentation"
                                              style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #333333; width: 620px;"
                                              width="620"
                                          >
                                              <tbody>
                                                  <tr>
                                                      <td
                                                          class="column column-1"
                                                          style="
                                                              mso-table-lspace: 0pt;
                                                              mso-table-rspace: 0pt;
                                                              font-weight: 400;
                                                              text-align: left;
                                                              vertical-align: top;
                                                              padding-top: 5px;
                                                              padding-bottom: 5px;
                                                              border-top: 0px;
                                                              border-right: 0px;
                                                              border-bottom: 0px;
                                                              border-left: 0px;
                                                          "
                                                          width="100%"
                                                      >
                                                          <table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                              <tr>
                                                                  <td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
                                                                      <table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
                                                                          <tr>
                                                                              <td style="vertical-align: middle; text-align: center;">
                                                                                  <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                                                                  <!--[if !vml]><!-->
  <!--                                                                                <table-->
  <!--                                                                                    cellpadding="0"-->
  <!--                                                                                    cellspacing="0"-->
  <!--                                                                                    class="icons-inner"-->
  <!--                                                                                    role="presentation"-->
  <!--                                                                                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"-->
  <!--                                                                                >-->
  <!--                                                                                    &lt;!&ndash;<![endif]&ndash;&gt;-->
  <!--                                                                                    <tr>-->
  <!--                                                                                        <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 6px;">-->
  <!--                                                                                            <a href="" style="text-decoration: none;" target="_blank">-->
  <!--                                                                                                <img-->
  <!--                                                                                                    align="center"-->
  <!--                                                                                                    alt="DTSK"-->
  <!--                                                                                                    class="icon"-->
  <!--                                                                                                    height="50"-->
  <!--                                                                                                    src="images/logo.svg"-->
  <!--                                                                                                    style="display: block; height: auto; margin: 0 auto; border: 0;"-->
  <!--                                                                                                    width="100"-->
  <!--                                                                                                />-->
  <!--                                                                                            </a>-->
  <!--                                                                                        </td>-->
  <!--                                                                                    </tr>-->
  <!--                                                                                </table>-->
                                                                              </td>
                                                                          </tr>
                                                                      </table>
                                                                  </td>
                                                              </tr>
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
          <!-- End -->
      </body>
  </html>`
}

function renderDetails(data) {
    return
    `<li style="margin-bottom: 7px;">Дата доставки: ${data.date}</li>
    <li style="margin-bottom: 7px;">Время доставки: с ${data.workTime.minTime} до ${data.workTime.maxTime}</li>
    <li>${data.address}</li>`
}