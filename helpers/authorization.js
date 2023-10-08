const Interviewer = require("../models/interviewer");



exports.authorization = async (token) => {
    if(token && token.toString().startsWith('Bearer ')) {
        const userId = (token.slice(7));
        const result = Interviewer.findByPk(userId);
        if(result) return true;
        else return false;
    }
    else return false;
}