const userModel = require('../model/user.model');
const getAll = async (req, res) => {
    let users = await userModel.findAll();
    res.json({
        users
    });
}
const create = async (req, res) => {
    try {
        let result = await userModel.create(req.body);
        result ? res.status(200).json({
            result: "User created successfully"
        }) : res.status(400).json({
            result: "Error"
        });

    } catch (error) {
        res.status(400).json({
            error: error.message,
            field: error.errors[0].path
        });
    }

}
const getOneById = async (req, res) => {
    let user = await userModel.findByPk(req.params.id);
    res.json({
        user
    });
}
const update = async (req, res) => {

    try {
        let result = await userModel.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        result ? res.status(200).json({
            result: "User updated successfully"
        }) : res.status(400).json({
            result: "Error"
        });
    } catch (error) {
        res.status(400).json({
            error: error.message,
            field: error.errors[0].path
        });
    }
}
const remove = async (req, res) => {
    try {
        let result = await userModel.destroy({
            where: {
                id: req.params.id
            }
        });
        result ? res.status(200).json({
            result: "User deleted successfully"
        }) : res.status(400).json({
            result: "Error"
        });

    } catch (error) {
        res.status(400).json({
            error: error.message,
            field: error.errors[0].path
        });
    }
}

module.exports = {
    create,
    getOneById,
    getAll,
    update,
    remove
}