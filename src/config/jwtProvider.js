const jwt = require("jsonwebtoken")

const SECRET_KEY = "cgklazdbgn[gqiefgvnfwetibneryoDSAVAGBDSGJOAYGYBZ";

const generateToken = (userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken = (token)=>{
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken;
}

module.exports={generateToken,getUserIdFromToken};