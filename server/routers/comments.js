var express = require('express');
var songController = require('../../db/models/song.js');
var router = express.Router();

// router.route('/newcomment')
//   .get(function(req, res) {
//     songController.findAll((err, instance) => {
//       if (err) {
//         res.status(400).send(err);
//       } else {
//         res.status(200).send(instance);
//       }
//     })
//   });

router.route('/:id')
  .get(function(req, res) {
    const idToLook = {id: req.params.id}
    songController.findOne(idToLook, (err, instance) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(instance);
      }
    })
  });

module.exports = router;