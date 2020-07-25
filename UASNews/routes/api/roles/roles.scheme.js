const { Schema, model } = require('../../../db.config')
const scheme = new Schema({
   name:{
      type: String,
      enum:['admin','author','guest'],
      lowercase: true,
      required: true,
   },
   priority:{
      type: Number,
      required: true,
      default: 1,
      unique:true
   },
});
module.exports = model('Roles', scheme, 'roles');
