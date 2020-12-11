const Piece = require('../../models/piece');

module.exports = {
  index,
  show,
  create,
  update,
  delete: deleteOne,
}

function index(req, res) {
  Piece.find({}).then(function(pieces) {
    res.status(200).json(pieces);
  });
}

function show(req, res) {
  Piece.findById(req.params.id).then(function(piece) {
    res.status(200).json(piece);
  });
}

function create(req, res) {
  Piece.create(req.body).then(function(piece) {
    res.status(201).json(piece);
  });
}

function update(req, res) {
  Piece.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(function(piece) {
    res.status(200).json(piece);
  });
}

function deleteOne(req, res) {
  Piece.findByIdAndRemove(req.params.id).then(function(piece) {
    res.status(200).json(piece);
  });
}