
const { body, param } = require('express-validator');
const { cekRolesId } = require('../roles/roles.controller')
const { findByUserOrEmail } = require('./users.controller')

exports.validation = [
  // isString().withMessage('username harus string').
  body('username').trim().custom(value => {
    return findByUserOrEmail(value).then(user => {
      if(user){
        return Promise.reject('Username sudah terdaftar')
      }
    })
  }),

  //validasi phone
  body('phone').isMobilePhone().normalizeEmail().custom(value => {
    return findByUserOrPhone(value).then(user => {
      if(user){
        return Promise.reject('Nomor sudah terdaftar')
      }
    })
  }),

  //validasi email
  body('email').isEmail().normalizeEmail().custom(value => {
    return findByUserOrEmail(value).then(user => {
      if(user){
        return Promise.reject('E-mail sudah terdaftar')
      }
    })
  }),
  
  body('password').isLength({ min: 5 }),
  body('role').isMongoId().custom(value => {
    return cekRolesId(value).then(role => {
      if(!role){
        return Promise.reject('Role tidak ditemukan')
      }
    })
  }),
]


exports.findByUserOrEmail = (value) => {
  return Users.findOne({$or: [{ username: value}, { email: value}]})
}
exports.cekRolesId = (id) => {
  return Roles.findById(id)
}

exports.paramValidation = [
  param('id').isMongoId().withMessage('Invalid Mongo ID')
]

