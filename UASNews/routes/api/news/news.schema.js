const {
   Schema,
   model
} = require('../../../db.config')
const scheme = new Schema({
      title: {
         type: String,
         required: true,
         unique: true
      },
      content: {
         type: String,
         required: true,
         minlength: 10
      },
      //untuk mennjoinkan ke catogry
      category: [{
         type: Schema.Types.ObjectId,
         ref: 'Categories',
         select: true
      }],
      //untuk menjoinkan ke user
      createdBy: {
         type: Schema.Types.ObjectId,
         ref: 'Users',
         select: true
      },
      updatedBy: {
         type: Schema.Types.ObjectId,
         ref: 'Users',
         select: true
      },
   },

   {
      timestamps: true
   });
module.exports = model('News', scheme, 'news');