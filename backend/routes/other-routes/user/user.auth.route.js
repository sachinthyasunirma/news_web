const express = require('express');
const router = express.Router();

const{
    signUp,
    signIn,
}=require('../../../controllers/auth/index');

// create post route for the signup
/*
@Route - /signup
@Desc  - Register new user
@Params- None
@Access- Public
@Method - POST
*/
router.post("/signup", signUp)
/*
@Route - /signin
@Desc  - signin using by email and password
@Params- None
@Access- Public
@Method - POST
*/
router.post("/signin", signIn)

// /*
// @Route - /auth/google
// @Desc  - signin using by email and password
// @Params- None
// @Access- Public
// @Method - POST
// */
// router.get("/google",passport.authenticate("google",{
//     scope:[
//         "https://www.googleapis.com/auth/userinfo.profile",
//         "https://www.googleapis.com/auth/userinfo.email",
//     ]
// }))
// /*
// @Route - /auth/google/callback
// @Desc  - signin using by email and password
// @Params- None
// @Access- Public
// @Method - POST
// */
// router.get("/google/callback", passport.authenticate("google",{failureRedirect: "/"}),(req,res)=>{
//     return res.redirect(
//         `https://localhost:4000/google/${req.session.passport.user.token}`
//     )
// }
// )

module.exports = router;