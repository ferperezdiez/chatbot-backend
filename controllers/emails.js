
const { getName } = require('../utils/getName')
const {v4} = require('uuid');
const Interviewer = require("../models/interviewer");
const { sendMail } = require('../helpers/sendMail');

exports.sendKey = (req, res) => {
    
    const { company } = req.body;
    const { email } = req.body;
   
    Interviewer.findAll({
        where: {
            email: email
        } 
    }).then(result => {
        if(result.length > 0){
            const keyToSend = result[0].id;
            sendMail(email, company, keyToSend, res)
        } else {
            const keyToSend = v4()
            Interviewer.create({
                id: keyToSend,
                email,
                name,
                company,
                counter: 5,
                }).then(() => {
                sendMail(email, company, keyToSend, res)
                })
        }
    })


    
    
    

    
}