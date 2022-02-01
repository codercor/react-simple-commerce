const { generateToken } = require('../helpers/token');
const userModel = require('../model/user.model');

const login = async (req, res) => {
    const { username, password } = req.body;
    let user = await userModel.findOne({
         where: {
                username,
                password
            }
    });
    if(user){
        let token = generateToken(user);
        console.log(token);
        res.status(200).json({
            status: true,
            message: "Login Successful",
            token,
            user
        });
    }else{
        res.status(401).json({
            status: false,
            message: "Login Failed"
        });
    }

}
const register = async (req, res) => {
    req.body.role = 0;
    try {
        
   
    let result = await userModel.create(req.body);
    if(result){
        let user = await userModel.findOne({
            where: {
                   username: req.body.username,
                   password: req.body.password
               }
       });
        let token = generateToken(user);
        res.status(200).json({
            status: true,
            message: "Register Successful",
            token,
            user
        });
    }else{
        res.status(401).json({
            status: false,
            message: "Register Failed"
        });
    }
} catch (error) {
    res.status(400).json({
        error: error.message,
        field : error.errors ? error.errors[0].path : null
    });    
}

}
module.exports = {
    login, register
}