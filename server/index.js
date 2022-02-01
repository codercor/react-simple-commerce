const express = require('express');
const app = express();
const port = 3001;
app.use(express.json()); // for parsing application/json to req.body for object
app.use(require("cors")())
const userRoute = require('./routes/user.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/product.route');


app.use('/user', userRoute);
app.use('/auth', authRoute)


app.listen(port, () => console.log(`🚀 React Commerce Server Running on http://localhost:${port}! 🚀`));