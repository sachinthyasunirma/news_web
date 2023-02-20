const express = require('express');
const router = express.Router();
const{
    updateUser,
    getUserData
}=require('../../../controllers/user/index')
/*
@Route - /user/:_id
@Desc  - get user data
@Params- _id
@Access- Public
@Method - GET
*/
router.get("/:_id", getUserData);
/*
@Route - /update/:_id
@Desc  - update user data
@Params- _id
@Access- Public
@Method - PUT
*/
router.put("/update/:_id", updateUser);

module.exports = router;