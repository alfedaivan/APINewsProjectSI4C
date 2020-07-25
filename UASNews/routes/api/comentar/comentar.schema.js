const {
    Schema,
    model
} = require('../../../db.config')
const scheme = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    newsCommented: {
        type: Schema.Types.ObjectId,
        ref: 'News',
        select: true
    }
});
module.exports = model('Comentar', scheme, 'comentar');