const express = require("express");
const cors = require("cors")
const collection = require("./DB")
const app = express();
const port = 9090;

// Middleware
app.use(express.json())
app.use(cors())

// Routes
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const adminRoutes = require('./routes/admin');

app.use('/', loginRoutes);
app.use('/user', signupRoutes);
app.use('/admin', adminRoutes);


app.listen(port, ()=>{
    console.log("Server started");
})