const {
  body,
  param
} = require('express-validator');

exports.validation = [
  body('name').isString().withMessage('nama categories harus string'),
  //validasi name
  body('name').isName().normalizeName().custom(value => {
    return findByUserOrName(value).then(user => {
      if (user) {
        return Promise.reject('Kategori sudah terdaftar')
      }
    })
  }),
]