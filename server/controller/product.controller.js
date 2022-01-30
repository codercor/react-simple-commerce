const userModel = require('../model/product.model');
const getAll = async (req, res) => {
    let products = await userModel.findAll();
    res.json({
        products
    });
}
const create = async (req, res) => {
    try {
        let result = await userModel.create(req.body);
        result ? res.status(200).json({
            result: "Product created successfully"
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
    let product = await userModel.findByPk(req.params.id);
    res.json({
        product
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
            result: "Product updated successfully"
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
            result: "Product deleted successfully"
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

