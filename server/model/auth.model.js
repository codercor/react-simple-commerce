const db = require('../config/db').promise();
const userModel = require('./user.model');
module.exports.login = async (username,password)=>{
    let [rows] = await db.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password]);
    if(rows.length > 0){ 
        return true;
    }
    return false;
}

module.exports.register = userModel.create;