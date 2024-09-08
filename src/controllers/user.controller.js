const User = require('../models/user.model');

exports.addUser = async(req, res)=>{
    try{
        const newUser = req.body;
        const user = await User.create(newUser);
        res.status(201).send(user);
    }
    catch(error){
        res.status(500).send(error);
    }
}
