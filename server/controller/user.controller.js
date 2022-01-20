const userModel = require('../model/user.model');
const getAll = async (req, res) => {
    let users = await userModel.getAll();
    res.json({
        users
    });
}
const create = async (req, res) => {
    const { username, password, email, role, name,lastName , phone, address } = req.body;
    console.log( username, password, email, role, name, phone, address,lastName);
    let result = await userModel.create(req.body);
    res.json({
        result: result?"User created successfully":"User creation failed"
    });
}
const getOneById = async (req, res) => {
    let user = await userModel.getOneById(req.params.id);
    res.json({
        user:{...user[0]}
    });
}
const update = async (req, res) => {
    let result = await userModel.update(req.body, req.params.id);
    res.json({
        result
    });
}
const remove = async (req, res) => {
    let result = await userModel.remove(req.params.id);
    res.json({
        result
    });
}

module.exports = {
    create,
    getOneById,
    getAll,
    update,
    remove
}