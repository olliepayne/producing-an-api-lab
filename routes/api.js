var express = require('express');
const chess = require('../controllers/api/chess');
var router = express.Router();
const chessCtrl = require('../controllers/api/chess');

router.get('/chess', chessCtrl.index)
router.get('/chess/:id', chessCtrl.show)
router.post('/chess', chessCtrl.create)
router.put('/chess/:id', chessCtrl.update)
router.delete('/chess/:id', chessCtrl.delete)

module.exports = router;
