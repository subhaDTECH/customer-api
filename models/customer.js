const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      
    },
    mobileNo: {
      type: String,
      require: true,
      unique:true
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    instagramID: {
      type: String,
      required: true,
      unique:true
    },
    companies: [
    String,
    ],
  },
  { timestamps: true }
);



module.exports=mongoose.model('Customer',customerSchema);
