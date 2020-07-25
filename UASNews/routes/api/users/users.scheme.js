const {
  Schema,
  model
} = require('../../../db.config')
const scheme = new Schema({

  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    minlength: 7,
    lowercase: true,
    uppercase: true,
    required: true
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['active', 'banned'],
    default: 'active'
  },
  //untuk men join kan ke role
  role: {
    type: Schema.Types.ObjectId,
    ref: 'Roles',
    select: true
  },
}, {
  timestamps: true
});
module.exports = model('Users', scheme, 'users');