const Posts = require('./news.schema')


//menampilkan seluruh data
exports.findAll = (req, res, next) => {
   const q = req.query;
   const where = {}
   if (q.title) where['title'] = q.title;
   Posts.find(where)
      .limit(req.query.limit || 0)
      .skip(req.query.skip || 0)
      .populate('createdBy')
      .populate('updatedBy')
      .populate('category')
      .then(posts => {
         res.json(posts);
      })
      .catch(err => next(err));
}


//menampilkan data berdasarkan id
exports.findById = (req, res, next) => {
   const id = req.params.id
   Posts.findById(id)
      .populate('createdBy')
      .populate('updatedBy')
      .populate('category')
      .then(posts => {
         res.json(posts);
      })
      .catch(err => next(err));
}


//insert data
exports.insert = (req, res, next) => {
   let data = req.body;
   if (req.user) data.createdBy = req.user;
   Posts.create(data)
      .then(posts => {
         res.json({
            message: `New news added!`,
            data: posts
         });
      })
      .catch(err => next(err))
}


//update berita
exports.updateById = (req, res, next) => {
   const id = req.params.id
   let data = req.body
   if (req.user) data.updatedBy = req.user;
   Posts.findByIdAndUpdate(id, data)
      .then(posts => {
         res.json({
            message: `news ${id} updated!`,
            data: posts
         });
      })
      .catch(err => next(err))
}


//hapus seluruh data
exports.remove = (req, res, next) => {
   Posts.remove()
      .then(posts => {
         res.json({
            message: 'All posts removed!',
            data: posts
         });
      })
      .catch(err => next(err))
}


//hapus berdasarkan id
exports.removeById = (req, res, next) => {
   const id = req.params.id
   Posts.findByIdAndRemove(id)
      .then(posts => {
         res.json({
            message: `post ${id} removed!`,
            data: posts
         });
      })
      .catch(err => next(err))
}