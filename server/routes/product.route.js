const router = require('express').Router();

router.route('/')
.get((req, res) => {
    //ününleri getirecek controller'a gönder
})
.post((req,res)=>{
    //yeni ürün ekleyecek controller'a gönder
})

router.route('/:id')
.get((req,res)=>{
    //ürünü getirecek controller'a gönder
})
.put((req,res)=>{
    //ürünü güncelleyecek controller'a gönder
})
.delete((req,res)=>{
    //ürünü silicek controller'a gönder
})


module.exports = router;