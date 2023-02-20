const express = require('express');
const router = express.Router();

//import user route from the other route
const authRoute = require('../other-routes/user/user.auth.route');
//create user route
router.use("/auth",authRoute);

// import user route from the other route
const userRoute = require('../other-routes/user/user.route');
// create user route
router.use("/user",userRoute);

module.exports = router;