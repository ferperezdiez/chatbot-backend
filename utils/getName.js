const OpenAI = require('openai');
require('dotenv').config();

exports.getName = async (mail) => {

    return [{message:{content: "Unknown"}}]

    // const key = process.env.API_KEY;

    // const system = `extrae el nombre del correo electronico.
    // Responde con dos palabras maximo. En caso de no ser posible, responder Unknown.
    // `;
    // try{
    //     const openai = new OpenAI({
    //         apiKey: key
    //       });
          
    //       const chatCompletion = await openai.chat.completions.create({
    //         model: "gpt-3.5-turbo",
    //         messages: [{
    //                     role: "system",
    //                     content: system
    //                 }, , {
    //                     role: "user",
    //                     content: "rodolfo.gimenez@hitachi.com"
    //                 }, {
    //                     role: "assistant",
    //                     content: "rodolfo Gimenez"
    //                 }, {
    //                     role: "user",
    //                     content: "juan.gonzalez@gmail.com"
    //                 }, {
    //                     role: "assistant",
    //                     content: "Juan Gonzalez"
    //                 }, {
    //                     role: "user",
    //                     content: "fernando.perez@gmail.com"
    //                 }, {
    //                     role: "assistant",
    //                     content: "fernando perez"
    //                 }, {
    //                     role: "user",
    //                     content: "rrhh@google.com"
    //                 }, {
    //                     role: "assistant",
    //                     content: "Unknown"
    //                 }, {
    //                     role: "user",
    //                     content: "juanlopez@microsoft"
    //                 }, {
    //                     role: "assistant",
    //                     content: "juan lopez"
    //                 }, {
    //                     role: "user",
    //                     content: mail
    //                 }],
    //         max_tokens: 2
    //       });
    //         return chatCompletion.choices 
    // }
    // catch{
    //     return [{message:{content: "Unknown"}}]
    // }
};