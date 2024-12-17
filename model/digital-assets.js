const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const digitalAssetsSchema = new Schema({
  name : {
    type : String,
    required : true
  }
  ,
  description : {
    type : String,
    required : true
  },
  fileType : {
    type : String,
    required : true
  },
  document : {
    type : String,
    required : true
  },
  fileSize : {
    type : Number,
    required : true
  },
  uploadedBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'user'
  }
},
{
  timestamps : true
}
);

let DIGITALASSETS = mongoose.model("digitalAssets",digitalAssetsSchema)
module.exports = DIGITALASSETS
