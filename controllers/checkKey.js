const Interviewer = require("../models/interviewer");



exports.checkKey = (req, res) => {

    const { key } = req.query
    Interviewer.findByPk(key)
        .then(result => {
            // console.log(result.dataValues.id)
            if(result) res.send({key: result.dataValues.id, message:"ok"})
            else res.send({message:"email is not registered"})
        })
        .catch(err => console.log(err))

}