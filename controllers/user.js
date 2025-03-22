const userModel = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


async function createUser(req, res){
    const {username, email, password, repeatPassword} = req.body;
    
    if(password == repeatPassword){
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                const newUser = new userModel({username, email, password: hash});
                await newUser.save();

                const token = jwt.sign({username}, "secretKey");
                res.cookie("token", token);
                res.redirect("/home");
            })
        })
    }
}

async function signin(req, res){
    const {username, password} = req.body;
    let user = await userModel.findOne({ username });

    if(!user)
        res.render("signin", {error: "( Incorrect username or password )"});
    else{
        bcrypt.compare(password, user.password, function (err, result){
            if(result){
                const token = jwt.sign({ username }, "secretKey");
                res.cookie("token", token);
                return res.render("home", {token: token, username: username});
            }
            else
                res.render("signin", {error: "( Incorrect username or password )"});
        })
    }
}

async function logout(req, res){
    res.cookie("token", "");
    res.redirect("/");
}

module.exports = {
    createUser,
    signin,
    logout,
}