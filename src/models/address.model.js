const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required : true
    },
    lastname:{
        type : String,
        required : true
    },
    streetAddress:{
        type : String,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    zipCode:{
        type : Number,
        required : true
    },
    user:{
        type : mongoose.Schema.ObjectId,
        ref:"user"
    },
    mobile:{
        type : String,
        required : true
    },
});

const Address = mongoose.model("addresses" , AddressSchema) ; 
module.exports={Address};