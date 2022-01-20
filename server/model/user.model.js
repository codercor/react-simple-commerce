
const db = require('../config/db').promise();
module.exports.getAll = async () => {
    let result = await db.query(`SELECT * FROM users`);
    return result[0];
}

module.exports.getOneById = async (id) => {
    let result = await db.query(`SELECT * FROM users WHERE id = ?`, [id]);
    return result[0];
}

module.exports.create = async (data) => {
    //a user has these properties; username, password, email, role, name, phone, address,lastName
    let result = await db.query(`INSERT INTO users (username, password, email, role, name, phone, address,lastName) VALUES (?,?,?,?,?,?,?,?)`, [data.username, data.password, data.email, data.role, data.name, data.phone, data.address,data.lastName]);
    return result[0];
}

module.exports.update = async (data,id) => {
    //a user has these properties; username, password, email, role, name, phone, address,lastName
    let result = await db.query(`UPDATE users SET username = ?, password = ?, email = ?, role = ?, name = ?, phone = ?, address = ?,lastName = ? WHERE id = ?`, [data.username, data.password, data.email, data.role, data.name, data.phone, data.address,data.lastName, id]);
    return result[0];
}

module.exports.remove = async (id) => {
    let result = await db.query(`DELETE FROM users WHERE id = ?`, [id]);
    return result[0];
}
