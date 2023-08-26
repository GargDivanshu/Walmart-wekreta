const mongoose = require("mongoose");
const Vendor = require("./Vendor");


const EnterpriseSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: false},
    phone: {type:Number, required: true, unique:true},
    password: { type: String, required: true },
    isuser: {type:Boolean, default:false},
    employee: {type: [Vendor],default:null},
  },{timestamps: true});

  mongoose.models = {};
  export default mongoose.model("Enterprise", EnterpriseSchema);
