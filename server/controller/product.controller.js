const create = async (req, res) => {
    res.json({
        message: 'User created successfully'
    });
}
const getOneById = async (req, res) => {
    res.json({
        message: 'User found successfully'
    });
}
const getAll = async (req, res) => {
    res.json({
        message: 'All users found successfully'
    });
}
const update = async (req, res) => {
    res.json({
        message: 'User updated successfully'
    });
}
const remove = async (req, res) => {
    res.json({
        message: 'User removed successfully'
    });
}

module.exports = {
    create,
    getOneById,
    getAll,
    update,
    remove
}