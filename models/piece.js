const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pieceSchema = new Schema({
  piece: {type: String, required: true},
  direction: {type: String},
  distance: {type: [Number]}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Piece', pieceSchema);