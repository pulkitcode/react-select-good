const router = require('express').Router();
let Elective = require('../models/electives.model');

router.route('/').get((req, res) => {
  Elective.find()
    .then(electives => res.json(electives))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newElective = new Elective(
      {
        department: req.body.department,
        electives: req.body.electives
      }
  );

  newElective.save()
    .then(() => res.json('Electives added added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;