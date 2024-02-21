const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to the Ecommerce api-node", status:true})
})

const authRouters = require("./routes/auth.router.js");
app.use("/auth" , authRouters);

const userRouters = require("./routes/user.router.js");
app.use("/api/users" , userRouters);
module.exports=app;

// testings the API from POSTMAN
