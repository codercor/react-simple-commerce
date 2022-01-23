const db = require('../config/db').promise();
const userModel = require('./user.model');
module.exports.login = async (username,password)=>{
    let [rows] = await db.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password]);
    if(rows.length > 0){ 
        let user = (rows[0]);
        delete user.password;
        console.log(user);
        return user;
    }
    return null;
}

module.exports.register = userModel.create;