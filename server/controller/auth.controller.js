const { generateToken } = require('../helpers/token');
const authModel = require('../model/auth.model');
const login = async (req, res) => {
    const { username, password } = req.body;
    let isLogin = await authModel.login(username,password);
    if(isLogin){
        let token = generateToken(username);
        console.log(token);
        res.status(200).json({
            status: true,
            message: "Login Successful",
            token
        });
    }else{
        res.status(401).json({
            status: false,
            message: "Login Failed"
        });
    }

}
const register = async (req, res) => {
    res.json({
        message: 'User registered successfully'
    });
}
module.exports = {
    login, register
}