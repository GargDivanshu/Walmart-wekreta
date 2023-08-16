const mongoose = require("mongoose");

const ReviewsSchema = new mongoose.Schema(
  {
    
    vendornumber: { type: String, required: true },
    email : {type:String, required: true},
    name : {type:String, required: true},
    msg: {type:String, required: true}
  },{timestamps: true});

  mongoose.models = {};
  export default mongoose.model("Reviews", ReviewsSchema);