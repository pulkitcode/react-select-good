const router = require('express').Router();
let Major = require('../models/major.model');

router.route('/').get((req, res) => {
  Major.find()
    .then(majors => res.json(majors))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const newMajor = new Major(
      {
          name: req.body.name,
          department: req.body.department,
          "core": req.body.core
      }
  );

  newMajor.save()
    .then(() => res.json('Major added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;