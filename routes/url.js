const express = require("express");
const {createUser, signin, logout} = require("../controllers/user");
const {currentUser} = require("../controllers/profile")

const router = express.Router();

router.get("/", async (req, res) => {
    return res.render("index");
});
    

router.get("/signin", (req, res) => {
    return res.render("signin");
})

router.get("/signup", (req, res) => {
    return res.render("signup");
});

router.get("/home", (req, res) => {
    return res.render("home");
})

router.get("/profile", (req, res) => {
    return res.render("profile");
})

router.get("/test", (req, res) => {
    return res.render("test");
})

router.get("/logout", logout);

router.post('/signup', createUser);
router.post('/signin', signin);
router.post('/profile', currentUser);

module.exports = router;