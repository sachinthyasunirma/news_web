const express = require("express");
const cors = require("cors");//Cross-Orign Resource Sharing
const dotenv = require("dotenv");//for the security reason we have to hide the imprtent things then we can use dotenv that not allow to the outside

//enable enviroment file
dotenv.config();

const db = require("./database/db");

const app = express();

app.use(cors());//allow to access our API
app.use(express.json());

// main route
const mainRoute = require("./routes/main-route/index");
app.use("/api", mainRoute);
//Start Server Call
app.listen(process.env.PORT,()=>{
    console.log(`Listening at http://localhost:${process.env.PORT}`);
})