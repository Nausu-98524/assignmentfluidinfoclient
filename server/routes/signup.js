const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const collection = require('../DB');

router.post("/signup", async(req, res)=>{
    const { name, email, password , contact} = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const data = {
        name:name,
        email:email,
        password:hashedPassword,
        contact:contact
    }

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.send("exist")
        }else{
            res.send("notexist")
            await collection.insertMany([data])
        }
    }catch(err){
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;