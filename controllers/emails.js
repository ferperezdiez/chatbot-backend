
const { getName } = require('../utils/getName')
const {v4} = require('uuid');
const Interviewer = require("../models/interviewer");
const { sendMail } = require('../helpers/sendMail');

exports.sendKey = (req, res) => {
    
    let name = "";
    const { company } = req.body;
    const { email } = req.body;
   
    Interviewer.findAll({
        where: {
            email: email
        } 
    }).then(result => {
        if(result.length > 0){
            const keyToSend = result[0].id;
            const name = result[0].name;
            sendMail(email, name, company, keyToSend, res)
        } else {
            const keyToSend = v4()
            getName(email).then(answer => {
                if(answer[0].message.content !== "Unknown") name = answer[0].message.content;
                Interviewer.create({
                    id: keyToSend,
                    email,
                    name,
                    company,
                    counter: 5,
                    }).then(() => {
                    sendMail(email, name, company, keyToSend, res)
                    })
            }) 
        }
    })


    
    
    

    
}