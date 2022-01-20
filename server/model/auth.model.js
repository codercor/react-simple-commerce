const connect = require('../config/db');
const userModel = require('./user.model');
module.exports.login = async (username,password)=>{
    let con = await connect();
    let [rows] = await con.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password]);
    if(rows.length > 0){ 
        return true;
    }
    return false;
}

module.exports.register = userModel.create;