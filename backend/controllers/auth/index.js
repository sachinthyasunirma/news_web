//Library
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//Model
const usermodel = require('../../models/user/user.model');

//Validation
const{
    validateSignup,
    validateSigIn
}=require('../../validation/auth');


const signUp =  async (req,res)=>{
    const{email} =req.body;
    console.log(email);
    try{
        console.log(req.body);
        //validate signup data
        await validateSignup(req.body);
        //check email and phone 
        await usermodel.checkEmialAndPhone(req.body);
        
        //save db
        const newUser = await usermodel.create({
            ...req.body,
        })
        const token = newUser.generatejwtToken();
        return res.status(200).json({
            token, 
            status:"success"
        })

    }catch(error){
        return res.status(500).json({
            error:error.message
        })
    }
}

const signIn = async (req,res)=>{
    try{
        //validate signIn data
        await validateSigIn(req.body);
        const user = await usermodel.getEmailAndPassword(req.body);
        const token = user.generatejwtToken();
        return res.status(200).json({
            token,
            status: "success"
        })
    }catch(error){
        return res.status(500).json({
            message: error
        })
    }
}

module.exports ={
    signUp,
    signIn
}