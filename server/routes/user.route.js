const router = require('express').Router();
const userController = require('../controller/user.controller');

router.route('/')
.get(userController.getAll)
.post(userController.create);

router.route('/:id')
.get(userController.getOneById)
.put(userController.update)
.delete(userController.remove);


module.exports = router;