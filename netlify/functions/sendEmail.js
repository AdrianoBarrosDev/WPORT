/* eslint-disable no-undef */

import emailjs from 'emailjs-com';

const handler = async (event) => {
    const { name, phone, message } = JSON.parse(event.body);  // Captura dados do formulário

    const serviceID = process.env.VITE_SERVICE;
    const templateID = process.env.VITE_TEMPLATE;
    const userID = process.env.VITE_KEY;

    try {
        const response = await emailjs.send(serviceID, templateID, {
            from_name: name,
            from_phone: phone,
            message: message
        }, userID);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email enviado com sucesso!", response }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Falha ao enviar e-mail", error: err }),
        };
    }
};

export default handler;
