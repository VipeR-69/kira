const userModel = require("../models/users");

async function currentUser(req, res){
    const {username} = req.body;
    let user = await userModel.findOne({ username });

    res.render("profile", {user});
}


module.exports = {
    currentUser,
}