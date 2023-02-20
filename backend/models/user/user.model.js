const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    fullName :{ 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    address:[{
        details:{
            type: String,
        },
        for:{
            type: String,
        }
    }],
    phoneNumber:{
        type: String,
    }
},{
    timestamps : true
})
//static and methods
UserSchema.statics.getEmailAndPassword = async ({email, password})=>{
    const user = await UserModel.findOne({email})
    if(!user) throw new Error("User does not exist!!!")
    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword) throw new Error("Invalid Password!!!, Plase enter your password again")

    return user;
}
UserSchema.methods.generatejwtToken = function(){
    return jwt.sign({user: this._id.toString()},`${process.env.JWT_KEY}`)
}
UserSchema.statics.checkEmialAndPhone = async ({email, phoneNumber})=>{
    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});
    if(checkUserByEmail||checkUserByPhone){
            throw new Error("User already exists");
    }
    return false;
}
UserSchema.pre("save",function (next){

    //password is modifide
    if(!this.isModified("password")) return next();
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);

        //hash password
        bcrypt.hash(this.password, salt, (error, hash)=>{
            if(error) return next(error);
            //assigned password
            this.password = hash;
            return next();
        }) 
    })
    //hash password
    
})
const UserModel = mongoose.model("Users", UserSchema);//create collection user 




module.exports = UserModel;