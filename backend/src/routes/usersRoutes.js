const express = require("express");
const router = express.Router()
const {login, register} = require("../controllers/users.controllers.js");
const wrapAsync = require("../utils/wrapAsync.js");



router.route("/login").post(wrapAsync(login))
router.route("/register").post(wrapAsync(register))



module.exports = router