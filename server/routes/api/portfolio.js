// routes/api/portfolio.js

const express = require('express');
const router = express.Router();

// Load Portfolio Model

const Portfolio = require('../../models/Portfolio');

// @route GET api/portfolio/test
// @description tests portfolio route
// @access public

router.get('/test', (req,res) => res.status(200).send({message:'Portfolio route testing'}));

// @route GET api/portfolio
// @description Get all portfolio
// @access Public
router.get('/', (req, res) => {
  Portfolio.find()
    .then(portfolio => res.json(portfolio))
    .catch(err => res.status(404).json({ noportfoliofound: 'No Porfolio Items found' }));
});

// @route GET api/portfolio/:id
// @description Get single portfolio by id
// @access Public
router.get('/:id', (req, res) => {
  Portfolio.findById(req.params.id)
    .then(portfolio => res.json(portfolio))
    .catch(err => res.status(404).json({ noportfoliofound: 'No Portfolio found' }));
});

// @route GET api/portfolio
// @description add/save portfolio
// @access Public
router.post('/', (req, res) => {
  Portfolio.create(req.body)
    .then(portfolio => res.json({ msg: 'Portfolio added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this portfolio item' }));
});

// @route GET api/portfolio/:id
// @description Update portfolio
// @access Public
router.put('/:id', (req, res) => {
  Portfolio.findByIdAndUpdate(req.params.id, req.body)
    .then(portfolio => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/portfolio/:id
// @description Delete portfolio by id
// @access Public
router.delete('/:id', (req, res) => {
  Portfolio.findByIdAndRemove(req.params.id, req.body)
    .then(portfolio => res.json({ mgs: 'Portfolio entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such item in portfolio' }));
});

module.exports = router;
