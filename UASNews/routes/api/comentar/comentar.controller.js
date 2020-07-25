// const Users = require('./comentar.schema')
// const passwordHash = require('password-hash');
// const {
//    validationResult
// } = require('express-validator');

const Comentar = require('./comentar.schema')

//method untuk menampilkan data keseluruhan
exports.findAll = (req, res, next) => {
   const q = req.query;
   const where = {}
   if (q.name) where['name'] = q.name;
   if (q.email) where['email'] = q.email;
   if (q.date) where['date'] = q.date;
   Comentar.find(where)
      .limit(req.query.limit || 0)
      .skip(req.query.skip || 0)
      .then(comentar => {
         res.json(comentar);
      })
      .catch(err => next(err));
}


//menampilkan data berdasarkan id
exports.findById = (req, res, next) => {
   const id = req.params.id
   Comentar.findById(id)
      .then(comentar => {
         res.json(comentar);
      })
      .catch(err => next(err));
}


//inset comentar
exports.insert = (req, res, next) => {
   const data = req.body;
   Comentar.create(data)
      .then(comentar => {
         res.json({
            data: comentar
         });
      })
      .catch(err => next(err))
}


//update comentar
exports.updateById = (req, res, next) => {
   const id = req.params.id
   const data = req.body
   Comentar.findByIdAndUpdate(id, data)
      .then(comentar => {
         res.json({
            data: comentar
         });
      })
      .catch(err => next(err))
}


//hapus comentar
exports.remove = (req, res, next) => {
   Comentar.remove()
      .then(comentar => {
         res.json({
            message: 'All comentar removed!',
            data: comentar
         });
      })
      .catch(err => next(err))
}


//hapus comentar berdasarkan id
exports.removeById = (req, res, next) => {
   const id = req.params.id
   Comentar.findByIdAndRemove(id)
      .then(comentar => {
         res.json({
            message: `comentar ${id} removed!`,
            data: comentar
         });
      })
      .catch(err => next(err))
}