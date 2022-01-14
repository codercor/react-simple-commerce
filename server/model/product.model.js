const router = require('express').Router();
const productController = require('../controller/product.controller');

router.route('/')
.get(productController.getAll)
.post(productController.create);

router.route('/:id')
.get(productController.getOneById)
.put(productController.update)
.delete(productController.remove);


module.exports = router;